const mongoose=require("mongoose");
const Schema = mongoose.Schema

const descItemSchema = new Schema({
    h1: {
        type: String,
    },
    sub1: {
        type: String,
    },
    desc: {
        type: String,
    },
    link:{
        type: String
    },
    table:{
        type: String
    }
});

const InternshipSchema=new Schema({
    title: {
        type: String,
    },
    author:{
        type: String
    },
    homedesc:{
        type: String
    },
    internimg:{
        type: String
    },
    desc:{
        type: [descItemSchema],
    },
    
},{
    timestamps: true,
    
})

const Internship=mongoose.model('internship',InternshipSchema);
module.exports=Internship;
