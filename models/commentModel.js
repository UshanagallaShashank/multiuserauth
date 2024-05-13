const mongoose=require("mongoose")
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2044440872.
 const CommentSchema=mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,require:true,ref:"User"},
    post_id:{type:mongoose.Schema.Types.ObjectId,require:true,ref:"Post"},
    comment:{type:String,require:true},
 })

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1066887928.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:549732045.
 module.exports=mongoose.model("Comment",CommentSchema);