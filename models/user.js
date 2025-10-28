const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    MID:Number
});
const UserModel=mongoose.model("metro_users",userSchema);;
module.exports=UserModel;