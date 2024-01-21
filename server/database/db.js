import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Connection = async () =>{
    const URL = process.env.MONGODB_URL;
    try{
       await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
       console.log("Database connected Successfully")
    } catch(error){
        console.log(`Error while connection with the database`, error.message);
    }
}

export default Connection