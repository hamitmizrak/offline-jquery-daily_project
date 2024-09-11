// DOTENV
import dotenv from 'dotenv'

// EXPRESS
import express from 'express'

// MONGOOSE
import mongoose from 'mongoose'

// PATH
import path from 'path'

// ROUTERS
import dailyApiRouters from '../routes/daily_api_routes'



// env.
dotenv.config();

// App
const app = express();

const port = process.env.PORT || 3000;

// MongoDb BAğlantısı
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/daily',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// App
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));

// Daily Routes
app.use('/',dailyApiRouters);

// Listen
app.listen(port,()=>{
    console.log(`Sunucu: ${port} portunda çalışıyor`);
});
