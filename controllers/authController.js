const User=require("../models/userModel")

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1157657112.
const {validationResult}=require("express-validator")

const  registerUser=async(req,res)=>{
     try{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({success:false,message:"errors",errors:errors.array()})
        }
     }
     catch(error){
        return res.status(400).json({success:false,message:error.message})
     }
}
module.exports={
    registerUser
}