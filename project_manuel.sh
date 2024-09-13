#!/bin/bash

# Not: Eğer linux üzerinden çalıştıracaksak chmod ile çalıştırarak yetkilendirelim
# x: eXecute
chmod +x project_npm_local.sh
chmod +x project_docker.sh
chmod +x project_manuel.sh
chmod +x countdown.sh

#######################################################################################
# npmInstall
npmInstall(){
    sleep 2
    echo -e "\n npm install başladı"

    # Geriye say
    ./countdown.sh 

    npm install
}
npmInstall

#######################################################################################
# distDelete
distDelete(){
     echo -e "\n dist silme başladı"
  # Eğer dist varsa sil
if [ -f "dist" ]; then
  rm -rf dist
  echo "Dosya silindi."
else
  echo "Dosya bulunamadı."
fi  
}
distDelete

#######################################################################################
# npmBuild
npmBuild(){
    sleep 2
    echo -e "\n npm install başladı"

    # Geriye say
    ./countdown.sh 

     # npm run build & # tsc
    npm run build  # tsc 
}
npmBuild


#######################################################################################
# npmBuild
npmStart(){
    sleep 2
    echo -e "\n npm run start başladı"

    # Geriye say
    ./countdown.sh 

    npm run start  # nodemon --exec ts-node ./dist/index.js
}
npmStart
