const express=require("express");
const router=express.Router();

const {signup,login}=require("../controllers/auth");
const {auth,isStudent,isAdmin}=require("../middleware/auth");

router.post("/signup",signup);
router.post("/login",login)
router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for tests"
    });
});

router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for students"
    })
} )
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protectd route for admin"
    })
})

module.exports=router;
//protected route
