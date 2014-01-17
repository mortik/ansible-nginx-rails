server {
  listen 80;
{% if protocol == 'https' %}
  server_name  www.{{ domain }} {{ domain }};
{% else %}
  server_name  www.{{ domain }};
{% endif %}
  rewrite ^/(.*) {{ protocol }}://{{ domain }}/$1 permanent;
}

{% if protocol == 'https' %}
server {
  listen 443;

  include {{ app }}_ssl;

  server_name www.{{ domain }};
  rewrite ^(.*) {{ protocol }}://{{ domain }}/$1 permanent;
}
{% endif %}

server {
{% if protocol == 'https' %}
  listen 443;
{% else %}
  listen 80;
{% endif %}
  server_name {{ domain }};
  root {{ app_root }};
{% if protocol == 'https' %}

  include {{ app }}_ssl;
{% endif %}
{% if basic_auth %}

  auth_basic            "Restricted";
  auth_basic_user_file  {{ app }}_htpasswd;
{% endif %}

  location / {
    try_files $uri @proxy;
  }

  location @proxy {
    include {{ app }}_proxy_params;
    proxy_pass http://127.0.0.1:{{ port }};
  }

  location ~ ^/(assets)/ {
    expires max;
    add_header Cache-Control public;
    add_header Last-Modified "";
    add_header ETag "";
  }
}
