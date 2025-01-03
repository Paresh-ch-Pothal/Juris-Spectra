const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
    },
    message: {
        type: String,
    },
},{
    timestamps: true
})

const User=mongoose.model("user",UserSchema);
module.exports=User;