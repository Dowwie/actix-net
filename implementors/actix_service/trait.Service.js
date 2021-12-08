(function() {var implementors = {};
implementors["actix_service"] = [];
implementors["actix_tls"] = [{"text":"impl&lt;IO:&nbsp;ActixStream&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;IO&gt; for <a class=\"struct\" href=\"actix_tls/accept/openssl/struct.AcceptorService.html\" title=\"struct actix_tls::accept::openssl::AcceptorService\">AcceptorService</a>","synthetic":false,"types":["actix_tls::accept::openssl::AcceptorService"]},{"text":"impl&lt;IO:&nbsp;ActixStream&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;IO&gt; for <a class=\"struct\" href=\"actix_tls/accept/rustls/struct.AcceptorService.html\" title=\"struct actix_tls::accept::rustls::AcceptorService\">AcceptorService</a>","synthetic":false,"types":["actix_tls::accept::rustls::AcceptorService"]},{"text":"impl&lt;IO:&nbsp;ActixStream + 'static&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;IO&gt; for <a class=\"struct\" href=\"actix_tls/accept/native_tls/struct.AcceptorService.html\" title=\"struct actix_tls::accept::native_tls::AcceptorService\">AcceptorService</a>","synthetic":false,"types":["actix_tls::accept::native_tls::AcceptorService"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.ConnectInfo.html\" title=\"struct actix_tls::connect::ConnectInfo\">ConnectInfo</a>&lt;R&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/struct.ConnectorService.html\" title=\"struct actix_tls::connect::ConnectorService\">ConnectorService</a>","synthetic":false,"types":["actix_tls::connect::connector::ConnectorService"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.ConnectInfo.html\" title=\"struct actix_tls::connect::ConnectInfo\">ConnectInfo</a>&lt;R&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/struct.ResolverService.html\" title=\"struct actix_tls::connect::ResolverService\">ResolverService</a>","synthetic":false,"types":["actix_tls::connect::resolver::ResolverService"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.ConnectInfo.html\" title=\"struct actix_tls::connect::ConnectInfo\">ConnectInfo</a>&lt;R&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/tcp/struct.TcpConnectorService.html\" title=\"struct actix_tls::connect::tcp::TcpConnectorService\">TcpConnectorService</a>","synthetic":false,"types":["actix_tls::connect::tcp::TcpConnectorService"]},{"text":"impl&lt;R, IO&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connection.html\" title=\"struct actix_tls::connect::Connection\">Connection</a>&lt;R, IO&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/openssl/struct.TlsConnectorService.html\" title=\"struct actix_tls::connect::openssl::TlsConnectorService\">TlsConnectorService</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;IO: ActixStream,&nbsp;</span>","synthetic":false,"types":["actix_tls::connect::openssl::TlsConnectorService"]},{"text":"impl&lt;R, IO&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connection.html\" title=\"struct actix_tls::connect::Connection\">Connection</a>&lt;R, IO&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/rustls/struct.TlsConnectorService.html\" title=\"struct actix_tls::connect::rustls::TlsConnectorService\">TlsConnectorService</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;IO: ActixStream,&nbsp;</span>","synthetic":false,"types":["actix_tls::connect::rustls::TlsConnectorService"]},{"text":"impl&lt;R, IO&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connection.html\" title=\"struct actix_tls::connect::Connection\">Connection</a>&lt;R, IO&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/native_tls/struct.TlsConnector.html\" title=\"struct actix_tls::connect::native_tls::TlsConnector\">TlsConnector</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;IO: ActixStream + 'static,&nbsp;</span>","synthetic":false,"types":["actix_tls::connect::native_tls::TlsConnector"]}];
implementors["actix_tracing"] = [{"text":"impl&lt;S, Req, F&gt; <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;Req&gt; for <a class=\"struct\" href=\"actix_tracing/struct.TracingService.html\" title=\"struct actix_tracing::TracingService\">TracingService</a>&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;Req&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;</a>Req) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tracing/0.1.29/tracing/span/struct.Span.html\" title=\"struct tracing::span::Span\">Span</a>&gt;,&nbsp;</span>","synthetic":false,"types":["actix_tracing::TracingService"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()