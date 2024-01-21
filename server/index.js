import express from 'express';
import Connection from './database/db.js'
const PORT = 8000;
const app = express();

Connection();

app.listen(PORT, ()=>{
    console.log(`server is runing on ${PORT} successfully`)
})

app.use('/', (req, res) => {
    res.send("hello");
})