const mongoose=require("mongoose")
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2044440872.
 const categorySchema=mongoose.Schema({
    name:{type:String,require:true},
 })

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1066887928.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:549732045.
 module.exports=mongoose.model("Category",categorySchema);