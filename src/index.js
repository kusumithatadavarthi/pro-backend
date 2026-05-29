const express=require('express');
const app= express();
app.get('/health',(req,res)=>{
    res.status(200).json({"status":"OK"})
})
app.listen(2000,()=>{
    console.log('server started at 2000 port')
})