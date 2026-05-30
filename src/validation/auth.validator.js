const z=require('zod');
const registration_schema=z.object({
    name:z.string().min(1,"name is required"),
    email:z.string().email("invalid email type"),
    password:z.string().min(6,"password must be 6 characters long")
})
const login_schema=z.object({
   email:z.string().email("invalid email type"),
    password:z.string().min(6,"password must be 6 characters long")
})
module.exports={registration_schema,login_schema};