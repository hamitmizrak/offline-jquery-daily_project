console.info("index.js Server 1111 portunda ayağa kalktı");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import winston from 'winston';
import helmet from 'helmet';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import dailyRoutes from './routes/daily_api_routes.js';


dotenv.config(); // .env dosyasından konfigürasyonları yükleyin

// const app: Application = express();
const app = express();

// Winston logger yapılandırması
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: 'winston_error.log',
      level: 'error',
    }),
    new winston.transports.File({ filename: 'winston_combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

// MongoDB Bağlantısı
const databaseCloudUrl: string = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@jquery.lcd09.mongodb.net/?retryWrites=true&w=majority&appName=jquery`;

mongoose
  .connect(databaseCloudUrl)
  .then(() => {
    console.log('Mongo DB Başarıyla Yüklendi');
  })
  .catch((err: Error) => {
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

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware'ler
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());

// CSRF koruma middleware
const csrfProtection = csrf({ cookie: true });

// Statik dosyaları sunmak için public klasörünü kullan
app.use(express.static('public'));

// EJS şablon motorunu ayarla
app.set('view engine', 'ejs');



// Rotaları ayarla
app.use('/daily', dailyRoutes);

// Sunucu Başlatma
const port: number = 1111;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor http://localhost:${port}/daily/list`);
  logger.info(`Sunucu ${port} portunda çalışıyor http://localhost:${port}`);
});

// http://localhost:1111/daily/list
// http://localhost:1111/daily/create
// http://localhost:1111/daily/edit/:id