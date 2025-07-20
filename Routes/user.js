const express=require("express")
const {handleSignup,handleLogin,handleLogout}=require("../controller/user")
const router=express.Router()

router.post("/",handleSignup)

router.post("/login",handleLogin)

router.post('/logout',handleLogout)

module.exports=router;