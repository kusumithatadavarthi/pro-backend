require('dotenv').config()  // ← must be first line
const express=require('express');
const {connection}=require('./config/db');
connection();
const app= express();
const user_router=require('./routes/auth.routes');
app.use(express.json());
app.use(user_router);
app.get('/health',(req,res)=>{
    res.status(200).json({"status":"OK"})
})
app.listen(2000,()=>{
    console.log('server started at 2000 port')
})
