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
});

const newsSmallSchema=new Schema({
    title: {
        type: String,
    },
    author:{
        type: String
    },
    homedesc:{
        type: String
    },
    newsimg:{
        type: String
    },
    desc:{
        type: [descItemSchema],
    },
    
},{
    timestamps: true,
    
})

const NewsSmall=mongoose.model('newssmall',newsSmallSchema);
module.exports=NewsSmall;