const mongoose=require("mongoose");
require('dotenv').config();

const mongoUrl = process.env.MONGO;

const ConnectToMongoDb=async()=>{
    return await mongoose.connect(mongoUrl).then(()=>{
        console.log("MongoDb is connected");
    }).catch(()=>{
        console.log("MOngoDb is not Connected");
    })
}

module.exports=ConnectToMongoDb;