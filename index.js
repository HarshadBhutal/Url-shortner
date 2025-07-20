require("dotenv").config();
const express= require("express");
const path=require("path")
const cookieParser = require('cookie-parser');
const connectMongodb=require("./connection.js")

//Routes
const userRoute=require("./Routes/user")
const staticRoute=require("./Routes/staticRouter.js")
const urlRouter=require("./Routes/url");
const {checkAuth}= require("./middleware/auth.js");

const port = process.env.PORT || 3000;
const app=express();

//connect to database
const mongoURI = process.env.MONGO_URI;
connectMongodb(mongoURI);


// To use ejs as template engine
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

//middlewares to parse data
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(checkAuth)


app.use("/urls",urlRouter)
app.use("/user",userRoute)
app.use("/",staticRoute)




app.listen(port,()=>console.log(`sever started at port:${port}`))