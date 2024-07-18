const mongoose=require("mongoose");
const ConnectToMongoDb=async()=>{
    return await mongoose.connect("mongodb://localhost:27017/juris-spectra").then(()=>{
        console.log("MongoDb is connected");
    }).catch(()=>{
        console.log("MOngoDb is not Connected");
    })
}

module.exports=ConnectToMongoDb;