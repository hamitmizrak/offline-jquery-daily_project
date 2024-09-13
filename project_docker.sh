#!/bin/bash

# Not: Eğer linux üzerinden çalıştıracaksak chmod ile çalıştırarak yetkilendirelim
# x: eXecute
chmod +x project_npm_local.sh
chmod +x project_docker.sh
chmod +x project_manuel.sh


# Docker Compose
# docker-compose up 
# docker-compose up -d

# Docker Compose ile Tüm servisleri çalıştır(Ayağa kaldır)
docker-compose up --build 


