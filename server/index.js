import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config.js';
import postsRoutes from './routes/posts.js';
import usersRoutes from './routes/users.js';
import fileUpload from "express-fileupload";

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    app.listen(port, () => {
        console.log(`The database listening at http://localhost:${port}`);
    })
}).catch((err) => {
    console.log('Error Name: ' + err);
});

//app.use(busboy());
//app.use(multipartMiddleware);
app.use(fileUpload({createParentPath: true}));
app.use(cors());

//bodyParser
app.use(express.json({ extended: true }));
app.use(express.urlencoded({extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/posts', postsRoutes);
app.use('/users', usersRoutes);

