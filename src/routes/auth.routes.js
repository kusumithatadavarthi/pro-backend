const express=require('express');
const {auth_middleware}=require('../middlewares/auth.middlewares');
const router=express.Router()
const {login,register,profile}=require('../controllers/auth.controller');
router.post('/login',login);
router.post('/signup',register);
router.get('/profile',auth_middleware,profile);
module.exports=router;