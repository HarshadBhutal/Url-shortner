const { getUser } = require("../services/auth");



async function checkAuth(req,res,next){
     const userUid=req.cookies?.uid;
     const user= await getUser(userUid);
    req.user=user;
    next();
}
module.exports={checkAuth};