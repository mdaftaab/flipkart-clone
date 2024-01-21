import mongoose from "mongoose";

const Connection = async () =>{
    const URL = 'mongodb+srv://mdyash99:OvZlajqWY6pk0asE@flipkart.knxmdja.mongodb.net/flipkart_db?retryWrites=true&w=majority';
    try{
       await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
       console.log("Database connected Successfully")
    } catch(error){
        console.log(`Error while connection with the database`, error.message);
    }
}

export default Connection