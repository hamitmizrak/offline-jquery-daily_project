# jQuery Daily Project
[GitHub](https://github.com/hamitmizrak/offline-jquery-daily_project)
---

## Git Clone
```sh
git clone https://github.com/hamitmizrak/offline-jquery-daily_project

```

## Teknolojiler
```sh
Html5
Css3
TailwindCss
Javascript
Embedded JavaScript (ejs)
EcmaScript
Typescript

jQuery
Ajax

Node js
nodemon
Express.JS

MongoDB

Katmanlı mimari yapısı
Dockerfile 
docker-compose.yml
git
gitHub
gitlab-ci.yml


```
---



---
## Install
```sh
node -v
npm -v

$ node -v
v20.17.0 (LTS)  Kararlı Sürüm


```
---
## npm init
```sh
npm init -y
npm init 

package name:
1-) Her bir bileşini küçük harflerle yaz
2-) boşluk kullanma bunun yerine (- _)
3-) Türkçe harflerden lan (üğşçö)

version: v1.0.0 (Semantic Version)
description: 
entry point: index.js
test command: test
git repository: https://github.com/hamitmizrak/offline-jquery-daily_project
keywords: Daily,Html5,css3,js,ejs,tailwindcss,jquery,ajax,nodejs,express,mongodb,git,github
author: Yüksek Bilgisayar Mühendisi Hamit Mızrak
licence: ISC
yes

```
---
## NPM INSTALL => NPM (Node Package Manager)
```sh
npm search express
npm i express
npm install express
npm install express@4.17.1
npm install express -g
npm install express --save
npm install express --save-dev
npm install express -D

npm uninstall express
npm update express

```

---
## NPM ALL PROPERTIES 
```sh
npm help install

npm install
npm update
npm cache clean (NPM önbelleğini temizle)
npm cache clean --force (NPM önbelleğini zorlayarak (--force) temizle)

npm login
npm publish (Bir paketi npm registry'sine ekelyeceğim)
npm audit (Projedeki Güvenlik açıklarını göster)

npm ci
npm version
npm info


npm start 
npm run start 

npm list    (Localde hangi kütüphaneler var? )
npm list -g (Globalde hangi kütüphaneler var? )
npm list -g --depth=0 (Globalde hangi kütüphaneler var ? ve ana branche yüklediğim kütüphaneleri(dosyaları göster))

npm root     (Localdeki projelerde node_modules'ı göster)
npm root -g  (Globaldeki projelerde node_modules'ı göster)


```

---
## Node.js Nodemon
```sh
-- package.json -- 
"script" :{
"start": "node index.js",
"nodemon": "nodemon index.js",
"nodemon_q": "nodemon -q index.js",
}

```
---

## Npm Nedir
```sh
Npm(Node Package Management): Paket yönetim sistemidir.
Npm bize hızlı kodlar yazmamız için gereken alt yapıyı sunar.
```
---

## Aşağıdaki Teknolojiler Nedir ?
```sh

### 1. **npm install tailwindcss ejs jquery**

- **TailwindCSS**: Bir yardımcı sınıflar CSS framework'üdür. Hazır stil sınıfları sağlar ve kullanıcıya hızlı ve özelleştirilebilir bir arayüz oluşturma imkanı tanır.
  
- **EJS (Embedded JavaScript)**: Sunucu tarafında JavaScript ile HTML dosyaları oluşturmanıza imkan veren bir şablon motorudur. Dinamik HTML sayfaları oluşturmak için kullanılır.
  
- **jQuery**: HTML belgeleri üzerinde manipülasyon yapmayı, olayları işleyebilmeyi ve asenkron AJAX işlemlerini daha kolay hale getiren bir JavaScript kütüphanesidir.

### 2. **npm install express @types/express @types/node**

- **Express**: Node.js için minimal ve esnek bir web framework'üdür. RESTful API'ler ve web uygulamaları geliştirmek için yaygın olarak kullanılır.
  
- **@types/express**: Express framework'ü için TypeScript tipi desteği sağlar. TypeScript kullanarak geliştirme yaparken, Express bileşenlerine tip desteği ekler.
  
- **@types/node**: Node.js için TypeScript tipi tanımlarını içerir. Node.js API'lerinin TypeScript ile kullanılmasını sağlar.

### 3. **npm install body-parser compression cookie-parser cors csurf**

- **body-parser**: Express uygulamasında gelen POST isteklerinin gövdesini ayrıştırmak için kullanılır. JSON ve URL encoded formatlı verileri işlemek için yaygın olarak kullanılır.
  
- **compression**: Express uygulamasında HTTP yanıtlarını sıkıştırmak için kullanılır. Bu, performansı artırmak için kullanıcılara daha küçük boyutlu veri gönderilmesini sağlar.
  
- **cookie-parser**: HTTP istekleri üzerinde çerezleri (cookies) ayrıştırmak ve işlemek için kullanılır. Çerezler, kullanıcı bilgilerini tarayıcıda saklamak için kullanılır.
  
- **CORS (Cross-Origin Resource Sharing)**: Tarayıcılar arasında yapılan farklı kaynaklardan gelen istekleri yönetmek için kullanılır. API'lerin diğer alanlardan gelen istekleri kabul etmesini sağlar.
  
- **csurf (Cross-Site Request Forgery Protection)**: Uygulamanızda CSRF saldırılarına karşı koruma sağlar. Kullanıcıların oturumlarını güvenli hale getirir.

### 4. **npm install mongoose mongodb dotenv**

- **Mongoose**: Node.js ve MongoDB arasında bir ODM (Object Data Modeling) kütüphanesidir. MongoDB veritabanı ile çalışırken veri modelleri oluşturmayı ve yönetmeyi kolaylaştırır.
  
- **mongodb**: MongoDB'yi Node.js ile kullanmak için kullanılan resmi MongoDB istemci kütüphanesidir. MongoDB veritabanına bağlanmak ve CRUD işlemlerini gerçekleştirmek için kullanılır.
  
- **dotenv**: Ortam değişkenlerini (environment variables) kullanmanızı sağlar. Veritabanı bağlantı bilgileri, API anahtarları gibi hassas bilgileri `.env` dosyasında saklayarak bu bilgilere uygulama içinde erişim sağlar.

### 5. **npm install express-rate-limit helmet morgan winston**

- **express-rate-limit**: Bir IP adresi üzerinden belirli bir süre içinde yapılan istek sayısını sınırlayan bir middleware'dir. Bu, API'yi aşırı yüklenmeye ve olası kötü niyetli saldırılara karşı korumak için kullanılır.
  
- **helmet**: Express uygulamanızın güvenliğini artırmak için HTTP başlıklarını değiştiren bir middleware'dir. Güvenlik açıklarını azaltmaya yardımcı olur.
  
- **morgan**: HTTP isteklerini loglamak için kullanılır. İsteklerin ne zaman, kim tarafından ve hangi URL'ler üzerinden yapıldığını izlemeye yardımcı olur.
  
- **winston**: Çok yönlü ve güçlü bir logging kütüphanesidir. Express uygulamanızda hata izleme ve hata günlüğü tutmak için yaygın olarak kullanılır.

### 6. **npm install swagger-jsdoc swagger-ui-express**

- **swagger-jsdoc**: API dökümantasyonu için kullanılan Swagger/OpenAPI dökümantasyonunu oluşturmak için kullanılan bir araçtır. Uygulamanızdaki API'leri tanımlamak için JSDoc açıklamalarını Swagger/OpenAPI biçimine dönüştürür.
  
- **swagger-ui-express**: Express uygulamalarında API dökümantasyonu oluşturmak ve kullanıcı arayüzü sağlamak için kullanılır. Swagger/OpenAPI ile dökümante edilen API'lerin tarayıcı üzerinden görsel olarak keşfedilmesini sağlar.

```
---


## NPM LOCAL
```sh
npm install tailwindcss  ejs jquery --save
npm install express  @types/express @types/node  
npm install body-parser  compression cookie-parser cors csurf 
npm install mongoose mongodb  dotenv 
npm install express-rate-limit helmet morgan winston
npm install swagger-jsdoc swagger-ui-express  

--save-dev: 
- Bu paketler geliştirme zamanındaki bağımlılıklar
- Sadece ama sadece geliştirme zamanında (development) ihtiyaç duyulur.
- Ve Üretim ortamında(production) gerkli olmayan araçlar veya paketlerdir. (Examples: Test araçları, derleyiciler)

npm install nodemon typescript eslint sass --save-dev
npm install @babel/core @babel/preset-env --save-dev

```
---
## NPM GLOCAL
```sh
npm install tailwindcss  ejs jquery express  @types/express @types/node   body-parser  compression cookie-parser cors csurf  mongoose mongodb  dotenv express-rate-limit helmet morgan winston install swagger-jsdoc swagger-ui-express -g  


```
---


## Node JS Nedir ?
```sh
NodeJS :
- Chrome V8 Javascript motorunu kullanan, 
- açık kaynak kodlu, 
- hızlı ve etkili bir platformdur.
- Server Side(Server[Sunucu]) tarafından çalışan bir Javascript framework'udur. 
- Ryan Dahl ve Isaac Z. Schluter tarafından 2009 yılında geliştirmeye başlamış.
```
---


## Node JS Özellikleri
```sh
Javascript betik dilimiz senkron(Aynı anda sadece bir iş yapan) çalışır.

Event-Driven (Olay odaklıdır),Non-Blocking I/O Modeli (Engelsiz Input(Girdi), Output(Çıktı)):
- Bu özellikler amaçı JS özelliğinden olan senkron özelliğini, asenkron(Aynı anda birden fazla process) özelliğe taşımaktır.
- Single Threaded(Tek iş parçasıcı) mimarisinde sahiptir.
- Npm'i otomatik olarak sisteme yükerl
- Full stack(frontend,backend) aynı dil(JS) üzerinden projemizi geliştirme imkanını sağlar.
- API ile çalışmamıza olanak sağlar.
- Gerçek zamanlı uygulamalar(Message: Socket) yüksek performans sağlar.
- Express(Middleware: orta katman), node js için popüler bir web geliştirme platformudur. 
- Veri tabanı erişimlerinde MongoDB, mysql, postgresql
- Routing(yönlendirme)
```
---


## Node JS Olay odaklı(event-driven) , engelsiz(non-blocking) I/O Modeli, Event Loop
```sh
- Bu model amacı performans metriğini artırmak içindir
- Olay odaklı programlamada, bir programın olaylar(event) tepki verme şeklidir.
- Uzun süren işlemlerde(Ağ etkileşimi) bazen bekleyebiliyoruz. Biz bunu asenkron olarak işlersek beklemeden diğer işlemlerin sürdürülebilirliğini artırmış oluruz.
- Yani işlemlerin tamamlanmasını beklemeden diğer tetiklenen(trigger) olaylara yanıt vermedir.
- Aynı anda  birden fazla işlem(process) çalışır ve bloke olmadan devam eder.
- Event-Loop(Olay döngüsü): uygulamaları dinliyor ve işlem bekleyenleri işliyor.
- Callback function: programalada callback functionlar olay odaklı programlanın bir parçasıdır.
- Olay odaklı bu model ölçeklenebilinirliliğini sağlar ve eş zamanlı çalışmayı sağlar
```
---

## Node JS Tarihçesi
```sh
2009 geliştirilmeye başlandı
2010 Non-blocking (Engelsiz)
Windows
LTS(Long Term Support: Uzaun vadeli destek)
```
---

## Node JS Node JS Framework
```sh
- Express.js (En popüler olanı) hafiftir.
- Koa.js (ES6 destekliyor) daha az kod
- Nest.js (TS ile geliştirildi)
- Meteor.js (Full- stack) JS uygulamaları geliştirmek için uygundur.
- Sails.js (MVC) mimarisine dayanır.
- Hapi.js (Büyük ölçekli projeler için uygundur)
```
---

## Node JS Framework Express
```sh
- Middleware: orta katman için uygundur.
- Esnektir, 
- Hızlıdır (Minimalist)
- SPA uygulamalarında(Single Page Application) idealdir SPA(React,Angular)
- node js için en popüler hafif,esnek, bir web geliştirme platformudur. 
- Http istekleri (GET,POST,PUT, DELETE) için birçok özellikler sağlar.
- Hızlı prototype oluşturmada, RESTful API geliştirmede 
- Yönlendirme (Routing): Yönlendirme mekanizması vardır.
```
---





## Cloud MongoDB
```sh

mongodb+srv://hamitmizrak:aJhJSvL3WbYCCeo8@jquery.txe5e.mongodb.net/?retryWrites=true&w=majority&appName=jquery

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---
## Teknolojiler
```sh

```
---