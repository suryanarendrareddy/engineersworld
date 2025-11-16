import React from 'react'
import { motion } from 'framer-motion'
import './policies.css'

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="policy-container"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="policy-title">Privacy Policy</h1>
      <p className="policy-updated">
        Last Updated on: {new Date().toLocaleDateString()}
      </p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy (the “Policy”) governs the manner in which
          Engineers World Pvt. Ltd. (“Company”, “we”, “us”, “our”) collects,
          uses, maintains, processes, shares, stores, and protects information
          obtained from users (“User”, “you”, “your”) of its website,
          applications, services, and digital platforms. This Policy applies to
          all visitors, customers, clients, partners, trainees, or anyone who
          accesses or interacts with our services in any capacity.
        </p>
        <p>
          By accessing our website or using our services, you acknowledge that
          you have read, understood, and agreed to the terms outlined in this
          Privacy Policy. If you do not agree with any portion of this Policy,
          you must discontinue usage of our website and services immediately.
        </p>
      </section>

      <section>
        <h2>2. Scope of This Privacy Policy</h2>
        <p>This Policy applies to:</p>
        <ul>
          <li>Visitors browsing our website</li>
          <li>Clients availing our cybersecurity and development services</li>
          <li>Participants of our cybersecurity training programs</li>
          <li>Users interacting with our applications or online portals</li>
          <li>Anyone contacting us via email, chat, phone, or forms</li>
        </ul>
        <p>
          This Policy does <strong>not</strong> apply to any third-party
          websites, platforms, or services linked from our website, nor does it
          apply to data handled by third-party providers independently.
        </p>
      </section>

      <section>
        <h2>3. Information We Collect</h2>
        <p>
          Engineers World Pvt. Ltd. collects several types of information to
          deliver secure, efficient, and personalized services. This includes:
        </p>

        <h3>A. Personal Information</h3>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Address or location details</li>
          <li>Company or organizational information</li>
          <li>Project requirements and communication history</li>
          <li>Resumes, job applications, training registrations</li>
        </ul>

        <h3>B. Sensitive Personal Information</h3>
        <p>
          We may collect sensitive information only when necessary, including:
        </p>
        <ul>
          <li>Identity documents (only when required)</li>
          <li>
            System access credentials (for authorized cybersecurity tasks)
          </li>
          <li>Security logs (with client’s permission)</li>
        </ul>

        <h3>C. Automatically Collected Technical Data</h3>
        <ul>
          <li>Error logs and diagnostic information</li>
        </ul>

        <h3>D. Cookies and Tracking Technologies</h3>
        <p>
          We use cookies to enhance user experience, analyze traffic, improve
          performance, and deliver secure access. Users may choose to disable
          cookies, but some features may not function properly afterward.
        </p>
      </section>

      {/* ---------------------------- SECTION 4 ---------------------------- */}
      <section>
        <h2>4. How We Use Your Information</h2>
        <p>Your information is used strictly for:</p>
        <ul>
          <li>Providing and managing our services</li>
          <li>Performing cybersecurity audits and testing</li>
          <li>Developing websites, apps, and technical solutions</li>
          <li>Improving system security and infrastructure</li>
          <li>Responding to support queries and communication</li>
          <li>Sending service alerts and notifications</li>
          <li>Compliance with legal, regulatory, or auditing requirements</li>
        </ul>
        <p>
          We do not misuse, sell, rent, or commercially exploit your personal
          information in any manner.
        </p>
      </section>

      {/* ---------------------------- SECTION 5 ---------------------------- */}
      <section>
        <h2>5. Data Storage and Security Practices</h2>
        <p>We follow industry-standard security practices including:</p>
        <ul>
          <li>Encryption of sensitive information</li>
          <li>Firewall and intrusion detection systems</li>
          <li>Strict access control and authentication layers</li>
          <li>24/7 security monitoring</li>
          <li>Periodic security audits and assessments</li>
          <li>Secure backup and disaster recovery policies</li>
        </ul>
        <p>
          While we implement advanced security systems, no method of storage or
          transmission can guarantee absolute protection. By using our services,
          you acknowledge this inherent risk.
        </p>
      </section>

      {/* ---------------------------- SECTION 6 ---------------------------- */}
      <section>
        <h2>6. Data Retention Policy</h2>
        <p>
          Engineers World Pvt. Ltd. retains information only for as long as
          necessary to:
        </p>
        <ul>
          <li>Fulfill service requirements</li>
          <li>Satisfy legal or regulatory obligations</li>
          <li>Maintain internal records and auditing</li>
          <li>Resolve disputes and enforce agreements</li>
        </ul>
        <p>
          Users may request deletion of their data unless retention is required
          by law.
        </p>
      </section>

      {/* ---------------------------- SECTION 7 ---------------------------- */}
      <section>
        <h2>7. Sharing and Disclosure of Information</h2>
        <p>We may share data ONLY with:</p>
        <ul>
          <li>Authorized service providers</li>
          <li>Government or law enforcement when required</li>
          <li>Internal team members executing your project</li>
          <li>Payment gateways and financial institutions</li>
        </ul>
        <p>
          We do NOT sell, rent, trade, or expose your information to
          unauthorized third parties under any circumstances.
        </p>
      </section>

      {/* ---------------------------- SECTION 8 ---------------------------- */}
      <section>
        <h2>8. User Rights and Controls</h2>
        <p>You may request the following actions at any time:</p>
        <ul>
          <li>Access a copy of your personal information</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your information</li>
          <li>Withdraw consent for data processing</li>
          <li>Opt-out of promotional communications</li>
        </ul>
        <p>Requests can be made at: info@engineersworld.in</p>
      </section>

      {/* ---------------------------- SECTION 9 ---------------------------- */}
      <section>
        <h2>9. Third-Party Services and External Links</h2>
        <p>
          Our website may contain links to third-party websites. Engineers World
          Pvt. Ltd. does not control or endorse external websites, and is not
          responsible for their content or privacy practices.
        </p>
      </section>

      {/* ---------------------------- SECTION 10 ---------------------------- */}
      <section>
        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may modify or update this Policy at any time without prior notice.
          Continued use of our website or services constitutes acceptance of the
          revised Policy.
        </p>
      </section>

      {/* ---------------------------- SECTION 11 ---------------------------- */}
      <section>
        <h2>11. Contact and Grievance Redressal</h2>
        <p>
          If you have any questions, complaints, or concerns regarding this
          Privacy Policy or your data, you may contact:
        </p>
        <p>
          <strong>Data Protection Officer (DPO)</strong> <br />
          Akshay Kumar <br />
          Engineers World Pvt. Ltd. <br />
          Email: info@engineersworld.in <br />
          Phone: +91 7997700218 <br />
          Journalist Colony, Nampally, Rajanna Sircilla, Telangana, 505302
        </p>
      </section>
    </motion.div>
  )
}

export default PrivacyPolicy
