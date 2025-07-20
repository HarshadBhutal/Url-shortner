const express=require("express")
const {homepage}=require("../controller/staticRouter")
const router=express.Router();

router.get("/",homepage)

module.exports=router;