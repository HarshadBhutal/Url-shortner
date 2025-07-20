const mongoose=require("mongoose");

const url_schema=mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        required:true
    },
    visitHistory:[{timestamp:{type:Number}}],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

},{timestamps:true})


/** @type {import('mongoose').Model} */
const Url=mongoose.model("url",url_schema);

module.exports=Url;