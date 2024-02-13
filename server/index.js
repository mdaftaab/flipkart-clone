import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import dotenv from "dotenv";
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8000;
const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

Connection();

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT} successfully`)
})

DefaultData();