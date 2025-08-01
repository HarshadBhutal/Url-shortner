const Url=require("../models/url");
const shortid=require("shortid")

async function handleGenerateNewShortUrl(req,res){
   
    const body=req.body;
    if(!body.url) return res.status(400).json({msg:"url is required"});
    const short_Id=shortid.generate();
    if(!req.user){
      
      await Url.create({
        shortId:short_Id,
        redirectUrl:body.url,
        visitHistory:[],
        
      })
      return res.redirect(`/?created=${short_Id}`)
    }
    await Url.create({
        shortId:short_Id,
        redirectUrl:body.url,
        visitHistory:[],
        createdBy:req.user._id
    })
    return res.redirect(`/?created=${short_Id}`)

}

async function handleredirect(req,res){
    const id=req.params.id;
    const main_url=await Url.findOneAndUpdate(
        {shortId:id},
        {$push:{
             visitHistory:{
                timestamp:Date.now(),
             }
            
    }
})
    res.redirect(main_url.redirectUrl)
}


module.exports={handleGenerateNewShortUrl,handleredirect};