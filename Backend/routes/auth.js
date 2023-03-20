const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Creating  a user Using: POST "/api/create user". No login required

router.post('/createuser',[
   body ('name','Enter valid name').isLength({min:5}),
    body('email').isEmail(),
],async(req,res)=>{
console.log(req.body);
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}

res.send(req.body);
})
module.exports = router
