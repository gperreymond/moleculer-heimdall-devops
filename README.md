# HEIMDALL / DEVOPS

## Getting Started
This project uses [devbox](https://github.com/jetpack-io/devbox) to manage its development environment.

Install devbox:
```sh
curl -fsSL https://get.jetpack.io/devbox | bash
```

Start the devbox shell:
```sh 
devbox shell
```

## General purpose

## Development

```sh
$ docker compose u -d
$ APP_METADATA_NODENAME=pikachu yarn start:dev
$ APP_METADATA_NODENAME=ronflex yarn start:dev
```

## Staging

```sh
# remove old ssh entries if needed
$ devbox run vagrant:ssh-clean
# prepare
$ vagrant up
# validate fingerprints
$ ssh vagrant@127.0.0.1 -p 2201
$ ssh vagrant@127.0.0.1 -p 2202
$ ssh vagrant@127.0.0.1 -p 2203
# get informations about ssh on vagrant
$ vagrant ssh-config
$ devbox run vagrant:ansible
```

## Production
