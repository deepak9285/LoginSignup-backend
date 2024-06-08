const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        tirm:true
    },
    password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    role:{
        type:String,
        enum:["Student","Admin","Visitor"],
    },

}); 
module.exports=mongoose.model("user",userSchema);