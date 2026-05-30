const mongoose=require('mongoose');
require('dotenv').config();

const userSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String,
        select: false 
    }
})
const user=mongoose.model('User',userSchema);
module.exports=user;