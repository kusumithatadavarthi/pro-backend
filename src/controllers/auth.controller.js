const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const user=require('../model/auth.model');
const login =async(req,res)=>{
    try{
    const data=req.body
    if(!data.email||!data.password){
        return res.status(400).json({"message":"please enter al fields"});

    }
const user_data = await user.findOne({email: data.email}).select('+password')
    if(!user_data){
        return res.status(400).json({"message":"User Not found!"});
    }
    const decoded=await bcrypt.compare(data.password,user_data.password);
    if(!decoded){
        return res.status(400).json({"message":"Incorrect password!"});
    }
    const token=jwt.sign({
        email:data.email
    },process.env.JWT_KEY,{expiresIn:'2h'})
    res.send(token);
}
catch(err) {
  res.status(500).json({ message: "something went wrong" })
}
}

const register=async(req,res)=>{
    try{

    const data=req.body
    if (!data.name||!data.email||!data.password){
        return res.status(400).json({"message":"Enter all details"});
    }
    const hashed_pwd= await bcrypt.hash(data.password,10);
    const result=await user.create({
        name:data.name,
        email:data.email,
        password:hashed_pwd,
    })
    if(!result){
        return res.send('error occured please register again');
    }
    res.status(201).json({'message':'user added successfully!!'})

    
}
catch(err) {
  res.status(500).json({ message: "something went wrong" })
}}
module.exports={login,register};