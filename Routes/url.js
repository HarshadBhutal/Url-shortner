const express=require("express");
const {handleGenerateNewShortUrl,handleredirect} = require("../controller/url");

const router=express.Router();

router.post("/",handleGenerateNewShortUrl)

router.get("/:id",handleredirect)


module.exports=router;