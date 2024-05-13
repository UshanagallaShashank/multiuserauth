const mongoose=require("mongoose")
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2044440872.
 const permissionModel=mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,require:true,ref:"User"},
    post_id:{type:mongoose.Schema.Types.ObjectId,require:true,ref:"Post"},
    permission:[{
        permission_name:String,
        permission_value:[Number],//0 to 3 CRUD operation
    }]
 })

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1066887928.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:549732045.
 module.exports=mongoose.model("Permission",permissionModel);