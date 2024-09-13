#!/bin/bash

# Not: Eğer linux üzerinden çalıştıracaksak chmod ile çalıştırarak yetkilendirelim
# x: eXecute
chmod +x npm_local.sh
chmod +x project_docker.sh
chmod +x project_manuel.sh


# 1.YOL
node index.ts

# 2.YOL
# & = anlamı
# node index.ts komutunun çalıştıktan sonra terminali "bloklayarak" (kilitleyerek) diğer komutlara geçişi engellemesidir.
# Yani, node index.ts çalıştığında terminal bu süreçte bekler ve docker-compose up -d komutunu çalıştırmaz.
# node index.ts &

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
