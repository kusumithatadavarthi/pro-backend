const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const user=require('../model/auth.model');
const{registration_schema,login_schema}=require('../validation/auth.validator')
const login =async(req,res,next)=>{
    try{
    const data=req.body
    if(!req.body || Object.keys(req.body).length === 0) {
  return res.status(400).json({ message: "request body is empty" })
}
      const rest = login_schema.safeParse(req.body);
    if(!rest.success) {
  return res.status(400).json({ message: rest.error.issues[0].message })
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
  next(err);
}
}

const register=async(req,res,next)=>{
    try{

    const data=req.body
    if(!req.body || Object.keys(req.body).length === 0) {
  return res.status(400).json({ message: "request body is empty" })
}
    const rest = registration_schema.safeParse(req.body);
    if(!rest.success) {
  return res.status(400).json({ message: rest.error.issues[0].message })
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
  next(err);
}}
const profile=async(req,res)=>{
    res.status(200).send(req.user);
}
module.exports={login,register,profile};