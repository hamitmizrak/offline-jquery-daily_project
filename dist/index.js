"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.info("index.js Server 1111 portunda ayağa kalkt.");
console.info("http://localhost:1111/daily/list");
// http://localhost:1111/daily/list
// http://localhost:1111/daily/create
// http://localhost:1111/daily/edit/:id
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

İşte bu kodda kullanılan paketlerin ne işe yaradığını liste halinde açıklıyorum:

1. **`express`**
   - **Açıklama:** Node.js için minimal ve esnek bir web uygulama çatısıdır (framework). HTTP isteklerini işlemek, yönlendirme (routing) ve ara yazılım (middleware) desteği sunar.
   - **Kullanım:** Sunucu oluşturmak ve istekleri yönlendirmek için kullanılır.

2. **`{ Application, Request, Response }` (Express'ten İçe Aktarılanlar)**
   - **`Application`**: Express uygulamasının temel yapısını temsil eder.
   - **`Request`**: Gelen HTTP isteği ile ilgili bilgileri taşır.
   - **`Response`**: HTTP isteğine yanıt vermek için kullanılır.

3. **`mongoose`**
   - **Açıklama:** MongoDB veritabanı ile çalışmak için kullanılan bir ODM (Object Data Modeling) kütüphanesidir.
   - **Kullanım:** MongoDB'deki veritabanı işlemlerini nesne tabanlı olarak yapmanızı sağlar.

4. **`csrf`**
   - **Açıklama:** CSRF (Cross-Site Request Forgery) saldırılarına karşı koruma sağlayan bir Express ara yazılımıdır.
   - **Kullanım:** Uygulamanıza CSRF güvenlik önlemi eklemek için kullanılır.

5. **`cookieParser`**
   - **Açıklama:** Gelen isteklerdeki çerezleri (cookies) ayrıştırmak için kullanılan bir ara yazılımdır.
   - **Kullanım:** Çerezlerden gelen verileri okuyup kullanmanızı sağlar.

6. **`winston`**
   - **Açıklama:** Node.js uygulamalarında günlük tutma (logging) işlemleri için kullanılan bir kütüphanedir.
   - **Kullanım:** Uygulamanızda hata ve bilgi mesajlarını loglamak için kullanılır.

7. **`helmet`**
   - **Açıklama:** Node.js ve Express uygulamaları için HTTP başlıkları üzerinden güvenliği artırmak amacıyla kullanılan bir kütüphanedir.
   - **Kullanım:** Uygulamanızın çeşitli güvenlik açıklarına karşı korunmasına yardımcı olur (örneğin XSS, Clickjacking, MIME-sniffing).

8. **`swaggerJsDoc`**
   - **Açıklama:** Swagger/OpenAPI belgelerini oluşturmak için kullanılan bir kütüphanedir.
   - **Kullanım:** API’nizi otomatik olarak belgelemek için kullanılır.

9. **`swaggerUi`**
   - **Açıklama:** Swagger belgelerinin kullanıcı arayüzünde gösterilmesi için kullanılan kütüphanedir.
   - **Kullanım:** API belgelerini bir web arayüzünde sunmak için kullanılır.

10. **`bodyParser`**
    - **Açıklama:** Express uygulamasında gelen HTTP isteklerinin gövdesini (`req.body`) ayrıştırmak için kullanılan bir ara yazılımdır.
    - **Kullanım:** JSON, form verileri gibi çeşitli veri türlerini işlemek için kullanılır.

11. **`cors`**
    - **Açıklama:** Cross-Origin Resource Sharing (CORS) politikalarını yönetmek için kullanılan bir ara yazılımdır.
    - **Kullanım:** Farklı domainlerden gelen isteklerin kabul edilmesine veya reddedilmesine olanak tanır.

12. **`dotenv`**
    - **Açıklama:** Ortam değişkenlerini `.env` dosyasından yüklemek için kullanılan bir kütüphanedir.
    - **Kullanım:** Uygulamanın yapılandırma bilgilerini (örneğin veritabanı URL'si, API anahtarları) güvenli bir şekilde yönetmek için kullanılır.

13. **`dailyRoutes`**
    - **Açıklama:** Uygulamanızdaki günlük API rotalarını (`routes/daily_api_routes.js` dosyasından) yüklemek için kullanılan bir modüldür.
    - **Kullanım:** API'deki belirli rotaları yönlendirmek ve işlem yapmak için kullanılır.

Bu paketler, Node.js ve Express tabanlı bir uygulamanın temel işlevlerini genişletmek ve çeşitli güvenlik, performans ve geliştirme ihtiyaçlarını karşılamak için kullanılır.
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOT: index.js  => const mongoose = require("mongoose");  => .js  const  require() kullanılır
// NOT: index.ts  => import mongoose from "mongoose";       => .ts  import from      kullanılır
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Express Import
const express_1 = __importDefault(require("express"));
// Mongoose Import
const mongoose_1 = __importDefault(require("mongoose"));
// CSRF Import
const csurf_1 = __importDefault(require("csurf"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// Winston: Hata bilgilerini ve bilgi loglarını düzgün ve MORGAN'A göre daha gelişmiştir.
const winston_1 = __importDefault(require("winston"));
// Helmet Import
const helmet_1 = __importDefault(require("helmet"));
// Swagger UI
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// bodyParser Import
const body_parser_1 = __importDefault(require("body-parser"));
// Cors
const cors_1 = __importDefault(require("cors"));
// RateLimit
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// mongoose
const dotenv = __importStar(require("dotenv"));
const daily_api_routes_js_1 = __importDefault(require("./routes/daily_api_routes.js"));
// MongoDB Cloud (.dotenv)
dotenv.config(); // .env dosyasından konfigürasyonları yükleyin
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// app
// const app: Application = express();
const app = (0, express_1.default)();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Winston
// Winston logger yapılandırması
const logger = winston_1.default.createLogger({
    level: "info",
    format: winston_1.default.format.json(),
    transports: [
        new winston_1.default.transports.File({
            filename: "winston_error.log",
            level: "error",
        }),
        new winston_1.default.transports.File({ filename: "winston_combined.log" }),
    ],
});
if (process.env.NODE_ENV !== "production") {
    logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.simple(),
    }));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Mongo DB Bağlantısı
// username:  hamitmizrak
// password:  0eV5X9Ekz8E5k6ES
// mongodb+srv://hamitmizrak:0eV5X9Ekz8E5k6ES@offlinenodejscluster.l3itd.mongodb.net/?retryWrites=true&w=majority&appName=OfflineNodejsCluster
// Localhostta MongoDB yüklüyse)
// Bu proje için docker-compose üzerinden 27017 porta sahip mongodb kurdum
// 1.YOL (LOCALHOST)
// MongoDB Bağlantısı
const databaseLocalDockerUrl = "mongodb://localhost:27017/daily";
// MongoDB Cloud (username,password)
// 2.YOL
// Localhostta MongoDB yüklüyse)
const databaseCloudUrl = "mongodb+srv://hamitmizrak:0eV5X9Ekz8E5k6ES@offlinenodejscluster.l3itd.mongodb.net/?retryWrites=true&w=majority&appName=OfflineNodejsCluster";
// MongoDB Cloud (.dotenv)
// 3.YOL
// Localhostta MongoDB yüklüyse)
const databaseCloudUrlDotEnv = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@offlinenodejscluster.l3itd.mongodb.net/?retryWrites=true&w=majority&appName=OfflineNodejsCluster`;
// Local ve Cloud
const dataUrl = [
    databaseLocalDockerUrl,
    databaseCloudUrl,
    databaseCloudUrlDotEnv,
];
mongoose_1.default.connect(databaseCloudUrlDotEnv)
    .then(() => {
    //console.log('Mongo DB Başarıyla Yüklendi');
    logger.info(`Mongo DB Başarıyla Yüklendi`); //logger: Winston
})
    .catch((err) => {
    //console.error('Mongo DB Bağlantı Hatası', err);
    logger.error("Mongo DB Bağlantı Hatası:", err); //logger: Winston
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SWAGGER
/*
http://localhost:1111/api-docs
API'lerinizi daha iyi yönetmek ve test etmek için swagger kullanabilirsiniz.
*/
// Swagger yapılandırması
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Blog API",
            description: "Blog API yönetimi için dökümantasyon",
            version: "1.0.0",
            contact: {
                name: "Developer",
            },
            servers: [
                {
                    url: "http://localhost:1111",
                },
            ],
            // Bearer authentication istemiyorsak securtiy kapat
        },
    },
    apis: ["index.ts", "./routes/daily_api_routes.ts"], // API tanımları için dosyaları belirtin
};
/*
  Dikkat: No operations defined in spec! Swagger dokümasntasyonları API rotalarını işlemleri doğru yazdık
  API dosyamızın blog_api.routes.js , Swagger taglarini (JSDoc) olmadığı için
  
  // LIST
  // POST
  // DELETE
  // PUT
 
  */
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MIDDLEWARE
// Middleware'leri dahil et
// app.use(bodyParser.urlencoded({ extended: true }));
// Express.js uygulamalarındaki middleware'dir. Gelen isteklerin body(gövde) kısmını analiz ederek, form verilerini ve JSON verilerine erişebilir hale getirir.
// urlencoded: Burada gelen istek gövdelerini URL'ye kodlanmıi form verilerini işlemeye yarar.
// extended: true: Gelen veriler içim querystring(qs) adlı kütaphane kullanılır. Ve bunun sayesinde karmaşık nesleride ayrıştırabilir.
// URL' kodlanmış (x-www-form-urlencoded) biçimde gönderir. Bu middleware bu tür verileri ayrıştruu ve request.body nesnesine ekler.
// http://localhost:1111?name=Hamit&surname=Mızrak
/*
 {
name:"Hamit",
surname:"Mızrak"
}
 */
app.use(body_parser_1.default.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// Bu middleware gelen HTTP isteklerinin gövdesindeki JSIN verilerini ayrıştırır.
// Sunucusunun JSON formatından gelen GET,POST,DELETE,PUT gibi istekelrin anlamasını sağlar.
// Veriler analiz edildikten sonra ,ayrışmaztırılmış içerik request.body nesneini ekler
app.use(body_parser_1.default.json());
// app.use(cookieParser());
// HTTP istekelrinden gelen cooki'leri(çerez) ayrıştıran bir middleware'dir.
// Bu çerezler request.cookise adlı nesneye ekler.
app.use((0, cookie_parser_1.default)());
// CORS
// npm install cors
// CORS (Cross-Origin Resource Sharing)
// Eğer API'niz başka portlardan da erişim sağlanacaksa bunu açmamız gerekiyor.
app.use((0, cors_1.default)());
// Helmet: Http başlıkalrını güvenli hale getirir ve yaygın saldırı vektörlerini azaltır
//npm install helmet
// const helmet = require("helmet");
//app.use(helmet());
app.use(helmet_1.default.frameguard({ action: "deny" }));
app.use(helmet_1.default.xssFilter());
app.use(helmet_1.default.noSniff());
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// compression:
// npm install compression
// Gzip : Verilerin sıkıştırılmasıyla performansı artırmak
// ve ağ üzerinde sayfaya daha hızlı erişimi sağlar
// Tüm Http cevaplarını sıkıştırarak gönderilmesini sağlar.
// const compression = require('compression');
// app.use(compression);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Rate Limiting (İstek Sınırlamasını):
// npm install express-rate-limit
// DDoS saldırlarına karşı korumayı sağlamak ve sistem performansını artırmak içindir.
// Gelen istekleri sınırlayabiliriz.
// Her 15 dakika içinde en fazla 2000 istek atılabilinir.
// Rate limit ayarları
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 dakika
    max: 2000, // Bu süre zarfında en fazla 2000 istek yapılabilir
    message: "İstek sayısı fazla yapıldı, lütfen biraz sonra tekrar deneyiniz",
    handler: (req, res, next) => {
        res.status(429).json({
            message: "İstek limiti aşıldı, lütfen daha sonra tekrar deneyiniz.",
        });
    },
});
// "/blog/" rotasına rate limit uygulaması
app.use("/daily/", limiter);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CSRF
/*
CSRF (Cross-Site Request Forgery):  Türkçesi Siteler Arası istek Sahteciliğidir.
Bu saldırı türünde amaç, kötü niyetli bir kullanıcının, başka bir kullanının haberi olmadan onun adına istekler göndererek
işlem yapması halidir.
Kullanımı: Genellikle kullanıcı, başka bir sitede oturum açmışken, saldırganın tasarladğo kötü niyetli sitelerle veya bağlantılarla
istem dışı işlemler yapmasına saldırgan yönlendirir.
Kullanıcı browser üzerinden oturum açtığında ve kimlik doğrulama bilgilerie sahip olduğu sitelerde yapılır.

*/
// npm install csurf
// npm install cookie-parser
// CSRF koruma middleware
// CSRF Middleware
// CSRF(Cross-Site Request Forgery) saldırılarına karşı güvenliği sağlar.
// CSRF tokenlarını çerezler araçılığyla gönderilir.
const csrfProtection = (0, csurf_1.default)({ cookie: true });
// Statik dosyaları sunmak için public klasörünü kullan
// Uygulamada statik dosyaların HTL,CSS,JS,image v.b içerikler sunar.
// public klasörü, statik doyalar için kök dizin olarak belirlenir.
// Bu klasörde bulunan dosyalara tarayıcıdan direk erişim sağlanır.
// Örnek: public klasöründe style.css adlı bir dosya varsa biz buna şu şekilde erişim sağlarız.
// http://localhost:1111/style.css
app.use(express_1.default.static("public"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EJS(Embedded JavaScript) Görüntüleme motorunu aktifleştirdim
// EJS şablon motorunu ayarla
app.set("view engine", "ejs");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Router (Rotalar)
// Rotaları ayarla
app.use("/daily", daily_api_routes_js_1.default);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Windowsta 1111 portunu kapatmak
/*
  Terminali Yönetici olarak Aç
  
  # Çalışan portu gösteriyor
  netstat -aon | findstr :1111
  
  # TCP Protokolü için Portu Kapatma:
  netsh advfirewall firewall add rule name="Block TCP Port 1111" protocol=TCP dir=in localport=1111 action=block
  
  # UDP Protokolü için Portu Kapatma:
  netsh advfirewall firewall add rule name="Block UDP Port 1111" protocol=UDP dir=in localport=1111 action=block
  
  */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 404 Hata sayfası
app.use((req, res, next) => {
    res.status(404).render("404", { url: req.originalUrl });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sunucu Başlatma
const port = 1111;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor http://localhost:${port}/daily/list`);
    logger.info(`Sunucu ${port} portunda çalışıyor http://localhost:${port}`); //logger: Winston
});
// http://localhost:1111/daily/list
// http://localhost:1111/daily/create
// http://localhost:1111/daily/edit/:id
