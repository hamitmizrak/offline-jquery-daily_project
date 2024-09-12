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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const csurf_1 = __importDefault(require("csurf"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const winston_1 = __importDefault(require("winston"));
const helmet_1 = __importDefault(require("helmet"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const daily_api_routes_js_1 = __importDefault(require("./routes/daily_api_routes.js"));
dotenv.config(); // .env dosyasından konfigürasyonları yükleyin
// const app: Application = express();
const app = (0, express_1.default)();
// Winston logger yapılandırması
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.json(),
    transports: [
        new winston_1.default.transports.File({
            filename: 'winston_error.log',
            level: 'error',
        }),
        new winston_1.default.transports.File({ filename: 'winston_combined.log' }),
    ],
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.simple(),
    }));
}
// MongoDB Bağlantısı
const databaseCloudUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@jquery.lcd09.mongodb.net/?retryWrites=true&w=majority&appName=jquery`;
mongoose_1.default
    .connect(databaseCloudUrl)
    .then(() => {
    console.log('Mongo DB Başarıyla Yüklendi');
})
    .catch((err) => {
    console.error('Mongo DB Bağlantı Hatası', err);
});
// Swagger yapılandırması
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Blog API',
            description: 'Blog API yönetimi için dökümantasyon',
            version: '1.0.0',
            contact: {
                name: 'Developer',
            },
            servers: [
                {
                    url: 'http://localhost:1111',
                },
            ],
        },
    },
    apis: ['index.ts', './routes/daily_api_routes.ts'],
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
// Middleware'ler
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use(helmet_1.default.frameguard({ action: 'deny' }));
app.use(helmet_1.default.xssFilter());
app.use(helmet_1.default.noSniff());
// CSRF koruma middleware
const csrfProtection = (0, csurf_1.default)({ cookie: true });
// Statik dosyaları sunmak için public klasörünü kullan
app.use(express_1.default.static('public'));
// EJS şablon motorunu ayarla
app.set('view engine', 'ejs');
// Rotaları ayarla
app.use('/daily', daily_api_routes_js_1.default);
// Sunucu Başlatma
const port = 1111;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor http://localhost:${port}`);
    logger.info(`Sunucu ${port} portunda çalışıyor http://localhost:${port}`);
});
