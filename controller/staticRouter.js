const Url=require("../models/url")

async function homepage(req,res){
    if(!req.user) 
    {
      const shortId=req.query.created;
      return res.render("index",{
        urls:null,
        shortId:shortId,
        token:false
    });
    }
    else{
        const allurls=await Url.find({createdBy:req.user._id});
        const shortId=req.query.created;
        res.render("index",{
        urls:allurls,
        shortId:shortId,
        token:true
    });
    }
   
}
async function login(req,res){
    res.render("login")
}
async function signup(req,res){
    res.render("signup")
}
module.exports={homepage,login,signup}