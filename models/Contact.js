const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  mobile: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  message: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  }
});

module.exports = Contact = mongoose.model('contact', ContactSchema);