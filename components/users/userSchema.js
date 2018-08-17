const mongoose = require('mongoose');
const Joi = require('joi');

//User Schema
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: String,
  first_name: String,
  last_name: String,
  personal_phone: Number,
})

module.exports = mongoose.model('User', userSchema);
