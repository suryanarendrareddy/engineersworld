const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)

module.exports = async ({
  internshipTitle,
  name,
  email,
  phone,
  message,
}) => {
  if (!process.env.RESEND_API_KEY || !process.env.ADMIN_MAIL) {
    throw new Error('Resend environment variables missing')
  }

  return await resend.emails.send({
    from: 'Engineers World <onboarding@resend.dev>',
    to: process.env.ADMIN_MAIL,
    replyTo: email,
    subject: `New Paid Internship Registration – ${internshipTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:24px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid #e5e7eb;">

          <div style="background:#020617; padding:20px;">
            <h2 style="margin:0; color:#34d399;">Engineers World</h2>
            <p style="margin-top:4px; color:#cbd5f5; font-size:14px;">
              Paid Internship / Training Registration
            </p>
          </div>

          <div style="padding:24px; color:#111827;">
            <table width="100%" cellpadding="6">
              <tr>
                <td><strong>Program</strong></td>
                <td>${internshipTitle}</td>
              </tr>
              <tr>
                <td><strong>Name</strong></td>
                <td>${name}</td>
              </tr>
              <tr>
                <td><strong>Email</strong></td>
                <td>${email}</td>
              </tr>
              <tr>
                <td><strong>Phone</strong></td>
                <td>${phone}</td>
              </tr>
            </table>

            <div style="margin-top:16px;">
              <p style="font-weight:bold;">Message</p>
              <div style="background:#f8fafc; border:1px solid #e5e7eb; padding:12px; border-radius:6px;">
                ${message || '—'}
              </div>
            </div>
          </div>

          <div style="background:#f1f5f9; padding:14px; font-size:12px; color:#64748b;">
            This registration was submitted via Engineers World website.<br/>
            Reply to this email to contact the applicant.
          </div>
        </div>

        <p style="text-align:center; margin-top:12px; font-size:11px; color:#94a3b8;">
          © ${new Date().getFullYear()} Engineers World
        </p>
      </div>
    `,
  })
}
