const nodemailer = require('nodemailer')
const axios = require('axios')
const path = require('path')

module.exports = async ({ jobTitle, name, email, phone, message, resumeUrl }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
  })

  const response = await axios.get(resumeUrl, {
    responseType: 'arraybuffer',
  })

  const fileExt = path.extname(resumeUrl).split('?')[0] || '.pdf'
  const fileName = `${name.replace(/\s+/g, '_')}_Resume${fileExt}`

  await transporter.sendMail({
    from: `"Engineers World Careers" <${process.env.MAIL_USER}>`,
    to: process.env.ADMIN_MAIL,
    replyTo: email,
    subject: `New Job Application – ${jobTitle}`,
    html: `
      <h2>New Job Application</h2>
      <hr/>
      <p><strong>Position:</strong> ${jobTitle}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message || '—'}</p>
      <br/>
      <p>
        <strong>Resume Link (Backup):</strong><br/>
        <a href="${resumeUrl}" target="_blank">${resumeUrl}</a>
      </p>
    `,
    attachments: [
      {
        filename: fileName,
        content: response.data,
      },
    ],
  })
}
