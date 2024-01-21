import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import dotenv from "dotenv";
const PORT = process.env.PORT || 8000;

dotenv.config();
const app = express();

Connection();

app.listen(PORT, ()=>{
    console.log(`server is runing on PORT ${PORT} successfully`)
})

app.get('/', (req, res) => {
    res.send("hello");
})

DefaultData();