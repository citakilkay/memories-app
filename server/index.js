import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config.js';

const app = express();
const port = process.env.PORT || 5000;


//bodyParser
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    })
}).catch((err) => {
    console.log('Error Name: ' + err);
})

