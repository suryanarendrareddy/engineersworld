const mongoose = require('mongoose')

const internshipSchema = new mongoose.Schema(
  {
    internshipTitle: {
      type: String,
      required: true,
      trim: true,
    },

    internshipSlug: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique:true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      unique:true,
      match: /^\+?[1-9]\d{7,14}$/,
    },

    message: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    ipAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Internship', internshipSchema)
