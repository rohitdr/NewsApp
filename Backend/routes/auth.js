const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET ='baburao30lakh'


// Creating  a user Using: POST "/api/auth/createuser". No login required

router.post('/createuser',[
   body ('name','Enter valid name').isLength({min:3}),
    body('email','Enter valid email').isEmail(),
    body ('password','password must be atleast 8 characters').isLength({min:8}),
],async(req,res)=>{
//if there are errors, return bad request and the errors.
  console.log(req.body);
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
// check weither the user with this email exists already!!
//using try cath method
try{
let user = await User.findOne({email: req.body.email});

if(user){
  return res.status(400).json({error: "sorry user with this email already exists"})
}
const salt = await bcrypt.genSalt(10);
const secPass = await bcrypt.hash(req.body.password,salt);
// create a new user
 user =await User.create ({
  name: req.body.name,
  password: secPass,
  email: req.body.email,
});
const data ={
  user:{
    id: user.id

  }
}
const authtoken = jwt.sign(data, JWT_SECRET);


// res.json( user)
res.json({authtoken})
// catch errors
}catch(error){
  console.log(error.message);
  res.status(500).send("some error occured");
}

})
module.exports = router
