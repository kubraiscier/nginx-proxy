# nginx-proxy

## Description

`nginx-proxy` sets up a container running nginx, docker-gen and letsencrypt. 

`docker-gen` generates reverse proxy configs for nginx and reloads nginx when containers are started and stopped.

`letsencrypt` handles the automated creation, renewal and use of Let's Encrypt certificates for proxied Docker containers.


##  Setup

You can run the following commands to start/stop nginx proxy.

To start:
```shell
docker network create nginx-proxy
docker-compose up -d
```

To stop:
```shell 
docker-compose down
docker network rm nginx-proxy
```

Then you can run any containerized app to work with this nginx proxy. To do this you must configure: 

- Environment variables
- Docker network
- 80/443 port export


You can find an example app with the configurations in example-app folder. Please change environments with your host.

```yml
version: "3"

services:
  app:
    build: ./
    expose:
      - 80
    restart: always
    environment:
      VIRTUAL_HOST: yourprojectdomain.com
      VIRTUAL_PORT: 5000
      LETSENCRYPT_HOST: yourprojectdomain.com
      LETSENCRYPT_EMAIL: email@yourprojectdomain.com
networks:
  default:
    external:
      name: nginx-proxy
```

Example app setup

```shell 
cd example-app
docker-compose up -d --build
```

See the result: 
https://yourprojectdomain.com

## Thanks

https://github.com/nginx-proxy/nginx-proxy

https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion



