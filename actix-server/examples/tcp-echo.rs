//! Simple composite-service TCP echo server.
//!
//! Using the following command:
//!
//! ```sh
//! nc 127.0.0.1 8080
//! ```
//!
//! Start typing. When you press enter the typed line will be echoed back. The server will log
//! the length of each line it echos and the total size of data sent when the connection is closed.

use std::{
    env, io,
    sync::{
        atomic::{AtomicUsize, Ordering},
        Arc,
    },
};

use actix_rt::net::TcpStream;
use actix_server::Server;
use actix_service::{fn_factory, fn_service, ServiceExt as _};
use bytes::BytesMut;
use log::{error, info};
use tokio::io::{AsyncReadExt, AsyncWriteExt};

#[actix_rt::main]
async fn main() -> io::Result<()> {
    env::set_var("RUST_LOG", "info");
    env_logger::init();

    let count = Arc::new(AtomicUsize::new(0));

    let addr = ("127.0.0.1", 8080);
    info!("starting server on port: {}", &addr.0);

    // Bind socket address and start worker(s). By default, the server uses the number of available
    // logical CPU cores as the worker count. For this reason, the closure passed to bind needs
    // to return a service *factory*; so it can be created once per worker.
    Server::build()
        .bind("echo", addr, {
            fn_factory::<_, (), _, _, _, _>(move || {
                let count = Arc::clone(&count);

                async move {
                    let count = Arc::clone(&count);
                    let count2 = Arc::clone(&count);

                    let svc = fn_service(move |mut stream: TcpStream| {
                        let count = Arc::clone(&count);

                        let num = count.fetch_add(1, Ordering::SeqCst) + 1;

                        info!(
                            "[{}] accepting connection from: {}",
                            num,
                            stream.peer_addr().unwrap()
                        );

                        async move {
                            let mut size = 0;
                            let mut buf = BytesMut::new();

                            loop {
                                match stream.read_buf(&mut buf).await {
                                    // end of stream; bail from loop
                                    Ok(0) => break,

                                    // more bytes to process
                                    Ok(bytes_read) => {
                                        info!("[{}] read {} bytes", num, bytes_read);
                                        stream.write_all(&buf[size..]).await.unwrap();
                                        size += bytes_read;
                                    }

                                    // stream error; bail from loop with error
                                    Err(err) => {
                                        error!("Stream Error: {:?}", err);
                                        return Err(());
                                    }
                                }
                            }

                            // send data down service pipeline
                            Ok((buf.freeze(), size))
                        }
                    })
                    .map_err(|err| error!("Service Error: {:?}", err))
                    .and_then(move |(_, size)| {
                        let num = count2.load(Ordering::SeqCst);
                        info!("[{}] total bytes read: {}", num, size);
                        async move { Ok(size) }
                    });

                    Ok::<_, ()>(svc.clone())
                }
            })
        })?
        .workers(2)
        .run()
        .await
}
