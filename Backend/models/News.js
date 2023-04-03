const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: {
    type: 'string',
    required: true
  },
  description: {
    type: 'string',
    required: true,

  },
  tag: {
    type: 'string',
    default: 'General'
  },
  date: {
    type: 'Date',
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  image: {
    type: "string",

  },
  source: {
    type: "string",
  },
  userdata: {
    name: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      required: true,
      unique: true
    },

    password: {
      type: 'string',
      required: true
    },

    date: {
      type: 'Date',
      default: Date.now
    },
    image: {
      type: 'string',
      default: "others/profileimage.jpg",

    },
  },
});
module.exports = mongoose.model('News', NewsSchema);