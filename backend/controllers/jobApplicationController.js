const JobApplication = require('../models/JobApplication')
const sendJobApplicationEmail = require('../utils/sendJobApplicationEmail')

const applyForJob = async (req, res) => {
  try {
    const { jobTitle, jobSlug, name, email, phone, message } = req.body

    if (!jobTitle || !jobSlug || !name || !email || !phone) {
      return res.status(400).json({
        message: 'Job title, job slug, name, email and phone are required',
      })
    }

    if (!req.file || !req.file.path) {
      return res.status(400).json({
        message: 'Resume is required (PDF/DOC)',
      })
    }
    const resumeUrl = req.file.path
    const resumePublicId = req.file.filename || req.file.public_id

    await JobApplication.create({
      jobTitle: jobTitle.trim(),
      jobSlug: jobSlug.trim(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message?.trim(),
      resumeUrl,
      resumePublicId,
      ipAddress: req.ip,
    })

    await sendJobApplicationEmail({
      jobTitle,
      jobSlug,
      name,
      email,
      phone,
      message,
      resumeUrl,
    })

    return res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
    })
  } catch (error) {
    console.error('Job Application Error:', error)

    return res.status(500).json({
      message: 'Server Error',
    })
  }
}

module.exports = { applyForJob }
