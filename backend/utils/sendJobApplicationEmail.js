const nodemailer = require('nodemailer')

const sendJobApplicationEmail = async ({
  jobTitle,
  jobSlug,
  name,
  email,
  phone,
  message,
  resumeUrl,
}) => {
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
<html>
<head>
  <meta charset="UTF-8" />
  <title>New Job Application</title>
</head>

<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 12px;">
    <tr>
      <td align="center">
        <table width="640" cellpadding="0" cellspacing="0"
          style="background:#ffffff;border-radius:8px;border:1px solid #e5e7eb;overflow:hidden;">

          <!-- HEADER -->
          <tr>
            <td style="padding:22px 28px;border-bottom:1px solid #e5e7eb;">
              <h2 style="margin:0;font-size:20px;color:#020617;">Engineers World</h2>
              <p style="margin:6px 0 0;font-size:13px;color:#64748b;">
                New Job Application Received
              </p>
            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="padding:28px;font-size:14px;color:#111827;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0;font-weight:600;width:180px;">Job Title</td>
                  <td style="padding:8px 0;">${jobTitle}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:600;">Job Slug</td>
                  <td style="padding:8px 0;">${jobSlug}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:600;">Applicant Name</td>
                  <td style="padding:8px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:600;">Email</td>
                  <td style="padding:8px 0;">${email}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:600;">Phone</td>
                  <td style="padding:8px 0;">${phone}</td>
                </tr>
              </table>

              <div style="margin-top:22px;">
                <p style="margin:0 0 8px;font-weight:600;">Message</p>
                <div style="
                  background:#f9fafb;
                  border:1px solid #e5e7eb;
                  padding:16px;
                  border-radius:6px;
                  line-height:1.6;
                ">
                  ${(message || 'No message provided').replace(/\n/g, '<br/>')}
                </div>
              </div>

              <div style="margin-top:20px;">
                <p style="font-weight:600;margin-bottom:6px;">Resume</p>
                <a href="${resumeUrl}" target="_blank"
                  style="color:#2563eb;text-decoration:none;">
                  View / Download Resume
                </a>
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
              <p style="margin:0;">Submitted via Engineers World Careers Portal</p>
              <p style="margin:6px 0 0;">Reply to this email to contact the applicant.</p>
            </td>
          </tr>

        </table>

        <p style="margin-top:16px;font-size:11px;color:#94a3b8;">
          © ${new Date().getFullYear()} Engineers World
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`

  await transporter.sendMail({
    from: `"Engineers World Careers" <${process.env.MAIL_USER}>`,
    to: process.env.ADMIN_MAIL,
    replyTo: email,
    subject: `New Job Application – ${jobTitle}`,
    html,
  })
}

module.exports = sendJobApplicationEmail
