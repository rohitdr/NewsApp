const mongoose = require('mongoose');
const{Schema} =mongoose;
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