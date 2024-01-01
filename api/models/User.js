import mongoose from "mongoose";
const UserModel=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
    password:{
       type:String,
       trim:true,
       required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})
const User=mongoose.model("User",UserModel)
export default User
