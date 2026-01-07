const { Resend } = require('resend')
const axios = require('axios')
const path = require('path')

const resend = new Resend(process.env.RESEND_API_KEY)

module.exports = async ({
  jobTitle,
  name,
  email,
  phone,
  message,
  resumeUrl,
}) => {
  if (!process.env.RESEND_API_KEY || !process.env.ADMIN_MAIL) {
    throw new Error('Resend environment variables missing')
  }

  const response = await axios.get(resumeUrl, {
    responseType: 'arraybuffer',
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  })

  const fileExt = path.extname(resumeUrl).split('?')[0] || '.pdf'
  const safeName = name.replace(/[^a-zA-Z0-9]/g, '_')
  const uniqueId = Date.now()
  const fileName = `Resume_${safeName}_${uniqueId}${fileExt}`

  return await resend.emails.send({
    from: 'Engineers World Careers <onboarding@resend.dev>',
    to: process.env.ADMIN_MAIL,
    replyTo: email,
    subject: `New Job Application – ${jobTitle}`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/></head>
<body style="margin:0;background:#f4f6f8;font-family:Arial">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0">
<tr><td align="center">

<table width="680" style="background:#fff;border-radius:12px;overflow:hidden">
<tr>
<td style="background:linear-gradient(135deg,#10b981,#06b6d4);padding:30px;text-align:center">
<h1 style="margin:0;color:#fff">New Job Application Received</h1>
<p style="margin:8px 0 0;color:#e6fffa">Engineers World – Careers</p>
</td>
</tr>

<tr>
<td style="padding:30px">

<p>A new candidate has submitted an application.</p>

<h3>Position</h3>
<p><strong>${jobTitle}</strong></p>

<h3>Candidate Details</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>

<h3>Message</h3>
<p>${message || 'No message provided.'}</p>

<h3>Resume</h3>
<p>The resume is attached.</p>
<a href="${resumeUrl}" target="_blank">View Resume</a>

</td>
</tr>

</table>

</td></tr>
</table>

</body>
</html>
    `,
    attachments: [
      {
        filename: fileName,
        content: Buffer.from(response.data).toString('base64'),
        contentType: 'application/pdf',
      },
    ],
  })
}
