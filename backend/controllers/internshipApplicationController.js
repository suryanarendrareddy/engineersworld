const InternshipApplication = require('../models/InternshipApplication')
const sendInternshipApplicationEmail = require('../utils/sendInternshipApplicationEmail')
const validateEmail = require('../utils/validateEmail')

const normalizePhone = (phone) => phone.replace(/\s+/g, '')

const applyForInternship = async (req, res) => {
  try {
    let { internshipTitle, internshipSlug, name, email, phone, message } = req.body

    name = name?.trim()
    email = email?.trim()
    phone = normalizePhone(phone || '')
    message = message?.trim()

    if (!internshipTitle || !internshipSlug || !name || !email || !phone) {
      return res.status(400).json({
        message: 'Internship title, slug, name, email and phone are required',
      })
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' })
    }

    const existingApplication = InternshipApplication.findOne({
      $or:[{email}, {phone}],
      internshipSlug,
    })
    if(existingApplication){
      return res.status(409).json({message : 'Form already filled for this internship'})
    }
    await InternshipApplication.create({
      internshipTitle,
      internshipSlug,
      name,
      email,
      phone,
      message,
      ipAddress: req.ip,
    })

    sendInternshipApplicationEmail({
      internshipTitle,
      internshipSlug,
      name,
      email,
      phone,
      message,
    }).catch((err) => console.error('Internship mail failed:', err.message))

    res.status(201).json({
      success: true,
      message: 'Internship registration submitted successfully',
    })
  } catch (error) {
    console.error('Internship Application Error:', error)
    res.status(500).json({ message: 'Server Error' })
  }
}

module.exports = { applyForInternship }
