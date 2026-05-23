import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },

        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            enum:["SUPER_ADMIN","FLEET_MANAGER","DISPATCHER","DRIVER","AUDITOR"],
            default:"DISPATCHER"
        },

        isActive:{
            type:Boolean,
            default:true
        },
        
    },
    {
        timestamps:true
    }
)

const User=mongoose.model("User",userSchema);
export default User;