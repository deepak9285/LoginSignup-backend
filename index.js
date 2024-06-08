const express=require("express");
const app=express();
require("dotenv").config();
app.use(express.json());
const PORT=process.env.PORT||3000;
//cookie-parser
const cookieParser=require("cookie-parser");
//app.use(cookieParser());
const{db_connect}=require("./config/db");
db_connect();
const user=require("./routes/user");
app.use("/api/v1",user);
app.listen(PORT,()=>{
console.log(`app is listening at port number ${PORT}`)
})
app.get("/",(req,res)=>{
    res.send("<h1>Auth app</h1>");
})