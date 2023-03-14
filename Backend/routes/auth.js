const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Creating  a user Using: POST "/api/auth".Doesnt require Auth 

router.post('/',[
   body ('name').isLength({min:5}),
    body('email').isEmail(),
],async(req,res)=>{
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
