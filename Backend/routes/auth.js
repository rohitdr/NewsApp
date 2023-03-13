const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Creating  a user Using: POST "/api/auth".Doesnt require Auth 

router.post('/',async(req,res)=>{
 try{
let user = await User.create({
    email:req.body.email,
    password:req.body.password,
    name:req.body.name
});

 res.send(req.body)
}
catch(error){
    console.log(error.message);
}
})
module.exports = router
