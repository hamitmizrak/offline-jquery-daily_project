#!/bin/bash

# Not: Eğer linux üzerinden çalıştıracaksak chmod ile çalıştırarak yetkilendirelim
# x: eXecute
chmod +x npm_local.sh


# LOCAL SAVE
npm install tailwindcss  ejs jquery --save
npm install express  @types/express @types/node  
npm install body-parser  compression cookie-parser cors csurf 
npm install mongoose mongodb  dotenv 
npm install express-rate-limit helmet morgan winston
npm install swagger-jsdoc swagger-ui-express  &

# LOCAL SAVE-DEV
npm install nodemon typescript eslint sass --save-dev
npm install @babel/core @babel/preset-env --save-dev

npm list

# GLOBAL SAVE
npm install tailwindcss  ejs jquery express  @types/express @types/node   body-parser  compression cookie-parser cors csurf  mongoose mongodb  dotenv express-rate-limit helmet morgan winston install swagger-jsdoc swagger-ui-express -g  

npm list -g