const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Creating  a user Using: POST "/api/auth".Doesnt require Auth 

router.get('/',async(req,res)=>{
 console.log(req.body);
let user = await User.create(req.body);

 res.send(req.body)

})
module.exports = router