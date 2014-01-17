ssl on;

ssl_prefer_server_ciphers on;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2 SSLv3;

ssl_certificate /etc/nginx/ssl/{{ app }}.crt;
ssl_certificate_key /etc/nginx/ssl/{{ app }}.key;

ssl_session_cache  shared:SSL:10m;
ssl_session_timeout  10m;

add_header Strict-Transport-Security "max-age=31536000; includeSubdomains";
