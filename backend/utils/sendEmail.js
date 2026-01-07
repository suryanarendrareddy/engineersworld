const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)

const sendEmail = async ({
  name,
  email,
  mobile,
  subject,
  message,
  ipAddress,
}) => {
  if (!process.env.RESEND_API_KEY || !process.env.ADMIN_MAIL) {
    throw new Error('Resend env variables missing')
  }

  const response = await resend.emails.send({
    from: 'Engineers World <onboarding@resend.dev>',
    to: process.env.ADMIN_MAIL,
    replyTo: email,
    subject: subject || 'New Contact Enquiry',
    html: `
      <h2>New Contact Enquiry</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Mobile:</b> ${mobile}</p>
      <p><b>Message:</b></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
      <hr/>
      <small>IP: ${ipAddress || 'N/A'}</small>
    `,
  })

  return response
}

module.exports = sendEmail
