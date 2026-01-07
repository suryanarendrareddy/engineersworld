const Internship = require('./internship.model')
const sendInternshipApplicationEmail = require('../utils/sendInternshipApplicationEmail')
const validateEmail = require('../utils/validateEmail')

const normalizePhone = (phone) => {
  if (!phone) return ''
  return String(phone).replace(/\s+/g, '')
}

const applyForInternship = async (req, res) => {
  try {
    let { internshipTitle, internshipSlug, name, email, phone, message } =
      req.body

    name = name?.trim()
    email = email?.trim()
    message = message?.trim()

    if (
      !internshipTitle ||
      !internshipSlug ||
      !name ||
      !email ||
      !phone ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    phone = normalizePhone(phone)

    if (typeof validateEmail !== 'function' || !validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address',
      })
    }

    if (!/^\+?[0-9]{8,15}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid phone number',
      })
    }

    const existingApplication = await Internship.findOne({
      internshipSlug,
      $or: [{ email }, { phone }],
    })

    if (existingApplication) {
      return res.status(409).json({
        success: false,
        message:
          'You have already applied for this internship using this email or phone number.',
      })
    }

    await Internship.create({
      internshipTitle,
      internshipSlug,
      name,
      email,
      phone,
      message,
      ipAddress: req.ip,
    })

    try {
      await sendInternshipApplicationEmail({
        internshipTitle,
        internshipSlug,
        name,
        email,
        phone,
        message,
      })
    } catch (err) {
      console.error('Email failed:', err.message)
    }

    return res.status(201).json({
      success: true,
      message: 'Internship registration submitted successfully',
    })
  } catch (error) {
    console.error('🔥 INTERNSHIP ERROR STACK:', error)

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message:
          'You have already applied for this internship using this email or phone number.',
      })
    }

    return res.status(500).json({
      success: false,
      message: error.message || 'Server error',
    })
  }
}

module.exports = { applyForInternship }
