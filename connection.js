const mongoose=require("mongoose");

async function connectMongodb(Db){
    return mongoose.connect(Db)
    .then(()=>console.log("mogngodb connected"))
    .catch((err)=>console.log("mongo connection error",err));
}

module.exports=connectMongodb;