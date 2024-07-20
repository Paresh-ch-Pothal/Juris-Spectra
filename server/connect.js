const mongoose=require("mongoose");
const ConnectToMongoDb=async()=>{
    return await mongoose.connect("mongodb+srv://pareshchandrapotha:paresh9339@cluster0.lwa4inv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
        console.log("MongoDb is connected");
    }).catch(()=>{
        console.log("MOngoDb is not Connected");
    })
}

module.exports=ConnectToMongoDb;