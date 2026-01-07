const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },

    jobSlug: {
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
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      match: /^\+?[1-9]\d{7,14}$/,
    },

    message: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    resumeUrl: {
      type: String,
      required: true,
    },

    resumePublicId: {
      type: String,
      required: true,
    },

    ipAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Job', jobSchema)
