const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Creating  a user Using: POST "/api/create user". No login required

router.post('/createuser',[
   body ('name','Enter valid name').isLength({min:3}),
    body('email','Enter valid email').isEmail(),
    body ('password','password must be atleast 8 characters').isLength({min:8}),
],async(req,res)=>{
console.log(req.body);
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
let user =await User.create ({
  name: req.body.name,
  password: req.body.password,
  email: req.body.email,
}).then(user => res.json(user))
.catch(err=>{console.log(err)
res.json({error:'please enter a unique email', message: err.message})})


})
module.exports = router
