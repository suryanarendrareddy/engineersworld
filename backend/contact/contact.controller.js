const Contact = require('./contact.model')
const sendEmail = require('../utils/sendEmail')
const validateEmail = require('../utils/validateEmail')
const { parsePhoneNumberFromString } = require('libphonenumber-js')

const createContact = async (req, res) => {
  try {
    let { name, email, mobile, subject, message } = req.body

    name = name?.trim()
    email = email?.trim()
    mobile = mobile?.trim()
    subject = subject?.trim()
    message = message?.trim()

    if (!name || !email || !mobile || !message) {
      return res
        .status(400)
        .json({ message: 'Name, email, mobile and message are required' })
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' })
    }

    const parsedPhone = parsePhoneNumberFromString(mobile)

    if (!parsedPhone || !parsedPhone.isValid()) {
      return res
        .status(400)
        .json({ message: 'Invalid mobile number with country code' })
    }

    if (message.length < 10) {
      return res.status(400).json({ message: 'Message too short' })
    }

    const lastMessage = await Contact.findOne({ email }).sort({ createdAt: -1 })

    if (lastMessage) {
      const diff = (Date.now() - new Date(lastMessage.createdAt)) / 1000
      const ONE_WEEK = 7 * 24 * 60 * 60

      if (diff < ONE_WEEK) {
        const remainingDays = Math.ceil((ONE_WEEK - diff) / (24 * 60 * 60))
        return res.status(429).json({
          message: `You can send another message after ${remainingDays} day(s)`,
        })
      }
    }

    await Contact.create({
      name,
      email,
      mobile: parsedPhone.number,
      countryCode: `+${parsedPhone.countryCallingCode}`,
      subject: subject || 'General Enquiry',
      message,
      ipAddress: req.ip,
    })

    sendEmail({
      name,
      email,
      mobile: parsedPhone.number,
      subject: subject || 'General Enquiry',
      message,
      ipAddress: req.ip,
    }).catch(() => {})

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    console.error('Contact Error:', error)
    return res.status(500).json({ message: 'Server Error' })
  }
}

module.exports = { createContact }
