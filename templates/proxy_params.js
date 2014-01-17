proxy_http_version 1.1;
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto {{ protocol }};
proxy_set_header X-Nginx-Proxy true;
proxy_hide_header X-Runtime;
proxy_hide_header X-Rack-Cache;
proxy_redirect off;
