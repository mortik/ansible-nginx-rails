# Ansible Nginx-Rails Role

A Basic Role to install Nginx and Setup a vhost for Rails

## Role Variables

```yaml
app: # Name of your Rails App
app_root: # Path to your Rails App like: /home/*user*/current/public
protocol: # http or https
port: # The Port your Rails App is running on
domain: # The Domain for your vhost
basic_auth: # Basic Auth Username if you want Basic Authentication
basic_auth_password: # Password for Basic Auth
templates: # overrides for configuration files, see below
```

## Templates

You can setup your own Configuration Files by adding them to the ```templates``` variable
```
  roles:
    -
      role: "mortik.nginx-rails"
      templates:
        - { src: "templates/nginx.js", dest: "{{ nginx_path }}/nginx.conf" }
        - { src: "templates/vhost.js", dest: "{{ nginx_path }}/sites-available/vhost.conf" }
        ...
```

## SSL Setup

If you want to use https (ssl) you need to provide an ```ssl.crt``` and ```ssl.key``` file. Just put them in your playbooks files folder.

## License

MIT
