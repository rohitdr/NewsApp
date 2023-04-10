const mongoose = require('mongoose');

/* This code is defining a Mongoose schema for a news article. It specifies the fields that a news
article should have, such as title, description, tag, date, user, image, source, and userdata. Each
field has a type and some fields have additional properties such as required, default, ref, and
unique. This schema can be used to create a Mongoose model for news articles that can be stored and
retrieved from a MongoDB database. */
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