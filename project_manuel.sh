#!/bin/bash

# Not: Eğer linux üzerinden çalıştıracaksak chmod ile çalıştırarak yetkilendirelim
# x: eXecute
chmod +x project_npm_local.sh
chmod +x project_docker.sh
chmod +x project_manuel.sh

# 1.YOL
# Typescript compiler
#tsc 
##node ./dist/index.js
#nodemon --exec ts-node ./dist/index.js
##nodemon --exec ts-node index.ts
##node ./index.js
## Eğer tsconfig.json içinde => "outDir": "./dist" yazarsam


# 2.YOL
npm install

# Eğer dist varsa sil
if [ -f "dist" ]; then
  rm -rf dist
  echo "Dosya silindi."
else
  echo "Dosya bulunamadı."
fi

# npm run build & # tsc
npm run build  # tsc
npm run start  # nodemon --exec ts-node ./dist/index.js



npm install

# rm -rf dist
npm run build & # tsc
npm run start  # nodemon --exec ts-node ./dist/index.js



# 3.YOL
# node index.js

# 4.YOL
# & = anlamı
# node index.js komutunun çalıştıktan sonra terminali "bloklayarak" (kilitleyerek) diğer komutlara geçişi engellemesidir.
# Yani, node index.js çalıştığında terminal bu süreçte bekler ve docker-compose up -d komutunu çalıştırmaz.
# node index.js &

# 5.YOL
#npm start

# 6.YOL
# Eğer biz bir script yazarsak run yazmak zorundayız.
# npm run start

# 7.YOL Nodemon ile ayağa kaldır
# node monitoring
# npm run nodemon

# 8.YOL Nodemon ile ayağa kaldır
# q: terminal çıktısındaki çok detayı gösterme
#npm run nodemon_q
