const express=require("express");
const router=express.Router();
const User=require("../models/user");

const checkPhone=(str,k)=>{
    if(str.length !==k){
        return false
    }
    return Array.from(str).every(char => char >= '0' && char <='9');
}

router.post("/user",async(req,res)=>{
    const {name,email,message,phone}=req.body;
    if(!name || !email || !message){
        return res.status(400).json({success: false,message: "Please provide all the details"})
    }
    if(!checkPhone(phone,10)){
        return res.status(400).json({success: false,message: "Please enter correct phone number"})
    }
    let user=await User.findOne({email});
    if(user){
        return res.status(400).json({success: false,message: "user already exist with the same email"})
    }
    else{
        user=await User.create({
            name: name,
            email: email,
            message: message,
            phone: phone
        })
        return res.status(200).json({success: true,message: "Successfully send the details"})
    }
})

module.exports=router