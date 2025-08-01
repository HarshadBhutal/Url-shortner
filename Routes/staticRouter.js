const express=require("express")
const {homepage,login, signup}=require("../controller/staticRouter")
const router=express.Router();

router.get("/",homepage)
router.get("/login",login)
router.get("/signup",signup)

module.exports=router;