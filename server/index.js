import express, { urlencoded, json } from 'express';
const app = express();
import mongoose from 'mongoose';
import cors from 'cors';
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

//bodyParser
app.use(urlencoded({ extended: true }));
app.use(json());
