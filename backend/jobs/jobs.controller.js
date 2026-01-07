const Job = require('./jobs.model')
const sendJobApplicationEmail = require('../utils/sendJobApplicationEmail')
const validateEmail = require('../utils/validateEmail')

const APPLICATION_OPEN_DATE = new Date('2026-06-01T00:00:00')

const normalizePhone = (phone = '') => phone.replace(/\s+/g, '')

const applyForJob = async (req, res) => {
  try {
    if (new Date() < APPLICATION_OPEN_DATE) {
      return res.status(403).json({
        success: false,
        message: 'Applications are closed until June 1',
      })
    }

    let { jobTitle, jobSlug, name, email, phone, message } = req.body

    name = name?.trim()
    email = email?.trim()
    phone = normalizePhone(phone)
    message = message?.trim()

    if (!jobTitle || !jobSlug || !name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Job title, name, email, and phone are required',
      })
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address',
      })
    }

    if (!/^\+?[0-9]{8,15}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid phone number. Use country code (e.g. +91XXXXXXXXXX)',
      })
    }

    if (!req.file || !req.file.path) {
      return res.status(400).json({
        success: false,
        message: 'Resume is required (PDF / DOC / DOCX)',
      })
    }

    const existingApplication = await Job.findOne({
      jobSlug,
      $or: [{ email }, { phone }],
    })

    if (existingApplication) {
      return res.status(409).json({
        success: false,
        message:
          'You have already applied for this job using this email or phone number',
      })
    }

    const resumeUrl = req.file.path
    const resumePublicId = req.file.filename || req.file.public_id

    await Job.create({
      jobTitle,
      jobSlug,
      name,
      email,
      phone,
      message,
      resumeUrl,
      resumePublicId,
      ipAddress: req.ip,
    })

    sendJobApplicationEmail({
      jobTitle,
      jobSlug,
      name,
      email,
      phone,
      message,
      resumeUrl,
    }).catch((err) =>
      console.error('Job application email failed:', err.message)
    )

    return res.status(201).json({
      success: true,
      message: 'Job application submitted successfully',
    })
  } catch (error) {
    console.error('Job Application Error:', error)

    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}

module.exports = { applyForJob }
