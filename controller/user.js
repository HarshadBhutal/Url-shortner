const User=require("../models/user")
const { setUser} = require("../services/auth");
const Url=require("../models/url")



async function handleSignup(req,res){
    
    const {username,email,password}=req.body;
    const user=await User.findOne({email:email})
     if(!user){
        const newUser=await User.create({
        username:username,
        email:email,
        password:password
    })
    
     const token= setUser(newUser)
     res.cookie("uid",token,{SameSite:"Strict"})
     return res.redirect("/")
    
  }
      res.redirect("/signup")
}

async function handleLogin(req,res){
  const {email,password}=req.body;
  const user=await User.findOne({email:email,password:password})
  if(!user) {
      return res.render("login");
  }
  
  const token= setUser(user)
  res.cookie("uid",token,{SameSite:"Strict"})
  return res.redirect("/")
}

 async function handleLogout(req, res) {
  res.clearCookie('uid'); 
  res.redirect('/');
};


module.exports={handleSignup,handleLogin,handleLogout};