const Contact = require('../models/contact')
const { sendEmail, validateEmail } = require('../utils/sendEmail')
const { parsePhoneNumberFromString } = require('libphonenumber-js')

const createContact = async (req, res) => {
  try {
    let { name, email, phone, subject, message } = req.body

    name = name?.trim()
    email = email?.trim()
    phone = phone?.trim()
    subject = subject?.trim()
    message = message?.trim()

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        message: 'Name, email, phone and message are required',
      })
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' })
    }

    const parsedPhone = parsePhoneNumberFromString(phone)

    if (!parsedPhone || !parsedPhone.isValid()) {
      return res.status(400).json({
        message: 'Invalid phone number with country code',
      })
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
      phone: parsedPhone.number,
      countryCode: `+${parsedPhone.countryCallingCode}`,
      subject: subject || 'General Enquiry',
      message,
      ipAddress: req.ip,
    })

    try {
      await sendEmail({
        name,
        email,
        phone: parsedPhone.number,
        subject: subject || 'General Enquiry',
        message,
        ipAddress: req.ip,
      })
    } catch (mailErr) {
      console.error('Email failed:', mailErr)
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    console.error('Contact Error:', error)
    res.status(500).json({ message: 'Server Error' })
  }
}

module.exports = { createContact }
