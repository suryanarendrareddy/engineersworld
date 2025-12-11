import React from 'react'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  const updatedAt = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-900 text-gray-100 py-12 px-4"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <article className="mx-auto max-w-3xl bg-gradient-to-br from-black/60 to-slate-900/60 ring-1 ring-white/6 rounded-2xl p-8 md:p-12 shadow-2xl print:shadow-none print:ring-0">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-300 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400">
            Last updated:{' '}
            <time dateTime={new Date().toISOString()}>{updatedAt}</time>
          </p>
        </header>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            This Privacy Policy (the “Policy”) governs how Engineers World Pvt.
            Ltd. (“Company”, “we”, “us”, “our”) collects, uses, stores and
            protects information obtained from users (“you”). It applies to all
            visitors, customers, partners, trainees and anyone interacting with
            our services.
          </p>
          <p>
            By using our website or services you accept this Policy. If you do
            not agree, please discontinue use of our services.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            2. Scope of This Privacy Policy
          </h2>
          <p>This Policy applies to:</p>
          <ul className="list-disc ml-6">
            <li>Visitors browsing our website</li>
            <li>Clients using our cybersecurity & development services</li>
            <li>Participants in our training programs</li>
            <li>Users interacting with our apps or portals</li>
            <li>Anyone contacting us by email, forms or chat</li>
          </ul>
          <p className="mt-2">
            It does <strong>not</strong> apply to third-party websites linked
            from our site.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">3. Information We Collect</h2>
          <p>
            We collect information to deliver secure, efficient, and
            personalised services:
          </p>

          <h3 className="text-lg font-medium mt-3">A. Personal Information</h3>
          <ul className="list-disc ml-6">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address / location</li>
            <li>Company / organisation details</li>
            <li>Project requirements and communications</li>
            <li>Resumes, applications, registrations</li>
          </ul>

          <h3 className="text-lg font-medium mt-3">
            B. Sensitive Personal Information
          </h3>
          <p>Collected only when necessary, e.g.:</p>
          <ul className="list-disc ml-6">
            <li>Identity documents (when required)</li>
            <li>System access credentials (for authorized tasks)</li>
            <li>Security logs (with client permission)</li>
          </ul>

          <h3 className="text-lg font-medium mt-3">
            C. Technical & Automatic Data
          </h3>
          <ul className="list-disc ml-6">
            <li>Error logs, diagnostic and telemetry data</li>
          </ul>

          <h3 className="text-lg font-medium mt-3">D. Cookies & Tracking</h3>
          <p>
            We use cookies to improve UX, analyze traffic and secure access.
            Disabling cookies may affect site functionality.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            4. How We Use Your Information
          </h2>
          <ul className="list-disc ml-6">
            <li>Provide and manage services</li>
            <li>Perform cybersecurity audits and testing</li>
            <li>Develop websites, apps and technical solutions</li>
            <li>Improve system security and infrastructure</li>
            <li>Respond to support queries and communications</li>
            <li>Send service alerts and notifications</li>
            <li>Comply with legal or regulatory requirements</li>
          </ul>
          <p className="mt-2">
            We do not sell or commercially exploit your personal information.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">5. Data Storage & Security</h2>
          <p>We follow industry-standard practices including:</p>
          <ul className="list-disc ml-6">
            <li>Encryption of sensitive information</li>
            <li>Firewall and intrusion detection systems</li>
            <li>Access controls and strong authentication</li>
            <li>24/7 monitoring and periodic audits</li>
            <li>Secure backup & disaster recovery</li>
          </ul>
          <p className="mt-2">
            No method guarantees absolute security; using our services implies
            acceptance of residual risk.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">6. Data Retention</h2>
          <p>We retain data only as necessary to:</p>
          <ul className="list-disc ml-6">
            <li>Fulfil service obligations</li>
            <li>Meet legal/regulatory requirements</li>
            <li>Maintain records for audits or disputes</li>
          </ul>
          <p className="mt-2">
            Users may request deletion unless retention is legally required.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">7. Sharing & Disclosure</h2>
          <p>We share data only with:</p>
          <ul className="list-disc ml-6">
            <li>Authorized service providers</li>
            <li>Law enforcement or regulators when required</li>
            <li>Internal team members working on your project</li>
            <li>Payment processors and financial institutions</li>
          </ul>
          <p className="mt-2">
            We do NOT sell or expose your data to unauthorized third parties.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">8. User Rights & Controls</h2>
          <p>You may request:</p>
          <ul className="list-disc ml-6">
            <li>Access to your personal data</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of data (subject to legal limits)</li>
            <li>Withdrawal of consent for processing</li>
            <li>Opt-out of promotional communications</li>
          </ul>
          <p className="mt-2">
            To exercise rights contact:{' '}
            <a
              className="text-emerald-300 hover:underline"
              href="mailto:info@engineersworld.in"
            >
              info@engineersworld.in
            </a>
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">9. Third-Party Services</h2>
          <p>
            Links to third-party sites are not covered by this Policy. We are
            not responsible for external content or privacy practices.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">10. Changes to This Policy</h2>
          <p>
            We may update this Policy. Continued use after changes means you
            accept the revised Policy.
          </p>
        </section>

        <section className="prose prose-invert max-w-none">
          <h2 className="text-xl font-semibold">
            11. Contact & Grievance Redressal
          </h2>
          <p>If you have questions or complaints, contact:</p>
          <address className="not-italic mt-2">
            <strong className="text-white">
              Data Protection Officer (DPO)
            </strong>
            <br />
            Akshay Kumar
            <br />
            Engineers World Pvt. Ltd.
            <br />
            Email:{' '}
            <a
              className="text-emerald-300 hover:underline"
              href="mailto:info@engineersworld.in"
            >
              info@engineersworld.in
            </a>
            <br />
            Phone:{' '}
            <a
              className="text-emerald-300 hover:underline"
              href="tel:+917997700218"
            >
              +91 79977 00218
            </a>
            <br />
            Journalist Colony, Nampally, Rajanna Sircilla, Telangana, 505302
          </address>
        </section>
      </article>
    </motion.main>
  )
}
