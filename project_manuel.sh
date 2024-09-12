#!/bin/bash

# Not: Eğer linux üzerinden çalıştıracaksak chmod ile çalıştırarak yetkilendirelim
# x: eXecute
chmod +x project_npm_local.sh
chmod +x project_docker.sh
chmod +x project_manuel.sh

# Typescript compiler
tsc 
#nodemon --exec ts-node index.ts
#node ./index.js

# Eğer tsconfig.json içinde => "outDir": "./dist" yazarsam
#node ./dist/index.js
nodemon --exec ts-node ./dist/index.js



# 1.YOL
# node index.js

# 2.YOL
# & = anlamı
# node index.js komutunun çalıştıktan sonra terminali "bloklayarak" (kilitleyerek) diğer komutlara geçişi engellemesidir.
# Yani, node index.js çalıştığında terminal bu süreçte bekler ve docker-compose up -d komutunu çalıştırmaz.
# node index.js &

# 3.YOL
#npm start

# 4.YOL
# Eğer biz bir script yazarsak run yazmak zorundayız.
# npm run start

# 5.YOL Nodemon ile ayağa kaldır
# node monitoring
# npm run nodemon

# 6.YOL Nodemon ile ayağa kaldır
# q: terminal çıktısındaki çok detayı gösterme
#npm run nodemon_q
