const nodemailer = require('nodemailer')

const sendEmail = async ({ name, email, phone, subject, message, ipAddress }) => {
  if (
    !process.env.MAIL_HOST ||
    !process.env.MAIL_USER ||
    !process.env.MAIL_PASS ||
    !process.env.ADMIN_MAIL
  ) {
    throw new Error('Mail environment variables missing')
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Contact Enquiry</title>
</head>

<body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 12px;">
    <tr>
      <td align="center">
        <table width="640" cellpadding="0" cellspacing="0"
          style="background:#ffffff; border-radius:8px; border:1px solid #e5e7eb; overflow:hidden;">

          <!-- HEADER -->
          <tr>
            <td style="padding:22px 28px; border-bottom:1px solid #e5e7eb;">
              <h2 style="margin:0; font-size:20px; color:#020617;">
                Engineers World
              </h2>
              <p style="margin:6px 0 0; font-size:13px; color:#64748b;">
                New Contact Form Enquiry
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:28px; font-size:14px; color:#111827;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0; font-weight:600; width:160px;">Full Name</td>
                  <td style="padding:8px 0;">${name || '-'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:600;">Email Address</td>
                  <td style="padding:8px 0;">${email || '-'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:600;">Mobile Number</td>
                  <td style="padding:8px 0;">${phone || '-'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:600;">Subject</td>
                  <td style="padding:8px 0;">${subject || 'General Enquiry'}</td>
                </tr>
              </table>

              <div style="margin-top:22px;">
                <p style="margin:0 0 8px; font-weight:600;">Message</p>
                <div style="
                  background:#f9fafb;
                  border:1px solid #e5e7eb;
                  padding:16px;
                  border-radius:6px;
                  line-height:1.65;
                  color:#111827;
                ">
                  ${(message || '').replace(/\n/g, '<br/>')}
                </div>
              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="
              background:#f9fafb;
              padding:18px 28px;
              font-size:12px;
              color:#64748b;
              border-top:1px solid #e5e7eb;
            ">
              <p style="margin:0;">
                Submitted via Engineers World Contact Form
              </p>
              <p style="margin:6px 0 0;">
                IP Address: ${ipAddress || 'N/A'}
              </p>
              <p style="margin:6px 0 0;">
                Reply directly to this email to respond to the sender.
              </p>
            </td>
          </tr>

        </table>

        <p style="margin-top:16px; font-size:11px; color:#94a3b8;">
          © ${new Date().getFullYear()} Engineers World · Cybersecurity & IT Solutions
        </p>

      </td>
    </tr>
  </table>
</body>
</html>
`

  await transporter.sendMail({
    from: `"Engineers World" <${process.env.MAIL_USER}>`,
    to: process.env.ADMIN_MAIL,
    replyTo: email,
    subject: subject || 'New Contact Enquiry',
    html,
  })
}

module.exports = sendEmail
