const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
      maxlength: 50,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
      match: /^\+[1-9]\d{7,14}$/,
    },

    countryCode: {
      type: String,
      trim: true,
      match: /^\+\d{1,4}$/,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    subject: {
      type: String,
      trim: true,
      maxlength: 50,
    },

    message: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 1000,
    },

    ipAddress: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Contact', contactSchema)
