require('dotenv').config();
const jwt=require('jsonwebtoken');
const auth_middleware=async(req,res,next)=>{
    const auth_header=req.headers.authorization
    if(!auth_header){
  return res.status(401).json({ message: "no token provided" })
}
    const token=auth_header.split(' ')[1];
    if(!token){
        return res.status(401).send('unathorised access')
    }
    try{
    const decoded=jwt.verify(token,process.env.JWT_KEY);
    req.user=decoded
    next();}
    catch(error){
        return res.status(401).json({ message: "invalid or expired token" })
    }
    
}
module.exports={auth_middleware};