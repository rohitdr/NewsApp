const mongoose = require('mongoose');
const{Schema} =mongoose;
/* This code is defining a Mongoose schema for a user object with properties such as name, email,
password, date, and image. The `name` property is of type string and is required, meaning it must be
provided when creating a new user object. */
const UserSchema = new Schema({
    name:{
        type: 'string',
        required: true
         },

    email:{
        type: 'string',
        required: true,
        unique: true
         },

    password:{
        type: 'string',
        required: true
         },
         
    date:{
         type: 'Date',
         default: Date.now
         },
         image:{
            type:'string',
            default: "others/profileimage.jpg",

         },

  });
  const User = mongoose.model('User', UserSchema);
 
  module.exports = User;