 const mongoose=require("mongoose")
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2044440872.
 const UserSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    role:{type:Number,default:0},
 })

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1066887928.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:549732045.
 module.exports=mongoose.model("User",UserSchema);