const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

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
// create a new user
 user =await User.create ({
  name: req.body.name,
  password: req.body.password,
  email: req.body.email,
})

res.json( user)
// catch errors
}catch(error){
  console.log(error.message);
  res.status(500).send("some error occured");
}

})
module.exports = router
