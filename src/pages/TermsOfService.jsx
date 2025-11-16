import React from 'react'
import { motion } from 'framer-motion'
import './policies.css'

const TermsOfService = () => {
    const formatDate = (dateString) => {
      const date = new Date(dateString)
      const options = { day: '2-digit', month: 'short', year: 'numeric' }
      return date.toLocaleDateString('en-GB', options).replace(',', '')
    }

  return (
    <motion.div
      className="policy-container"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="policy-title">Terms of Service</h1>
      <p className="policy-updated">Last Updated: {formatDate(new Date())}</p>

      <section>
        <h2>1. Agreement</h2>
        <p>
          These Terms of Service ("Terms") govern your access to and use of the
          website, platforms, applications, services, and products
          (collectively, the "Services") provided by Engineers World Pvt. Ltd.
          ("Engineers World", "Company", "we", "us", or "our"). By accessing,
          browsing, or using the Services, you agree to be bound by these Terms.
          If you do not agree to these Terms, please do not use or access the
          Services.
        </p>
      </section>
      <section>
        <h2>2. Definitions</h2>
        <p>For the purposes of these Terms:</p>
        <ul>
          <li>
            <strong>"User"</strong> means an individual or entity who accesses
            or uses the Services.
          </li>
          <li>
            <strong>"Client"</strong> refers to a User that has entered into a
            paid contract for Services.
          </li>
          <li>
            <strong>"Deliverables"</strong> means any work product, code,
            reports, documents, or materials created and delivered by Engineers
            World.
          </li>
          <li>
            <strong>"Confidential Information"</strong> means proprietary,
            non-public business or technical information disclosed by a party to
            the other party.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Scope of Services</h2>
        <p>
          Engineers World provides a range of professional services including,
          but not limited to:
        </p>
        <ul>
          <li>System Protection (antivirus, firewalls, encryption)</li>
          <li>Website and Web Application Development</li>
          <li>Android Application Development</li>
          <li>Penetration Testing and Vulnerability Assessments</li>
          <li>Cybersecurity Training and Certification Programs</li>
          <li>Threat Intelligence and Monitoring</li>
        </ul>
        <p>
          Specific service scope, deliverables, timelines, and acceptance
          criteria will be set forth in project proposals, statements of work
          (SOW), or separate service agreements.
        </p>
      </section>

      <section>
        <h2>4. User Obligations</h2>
        <p>As a User, you agree to:</p>
        <ul>
          <li>
            Provide complete and accurate information required for the provision
            of Services;
          </li>
          <li>
            Obtain and maintain all necessary rights, permissions, and
            authorizations to provide Engineers World with access to relevant
            systems, data, or accounts;
          </li>
          <li>
            Comply with applicable laws, regulations, and third-party terms in
            connection with use of the Services;
          </li>
          <li>
            Not misuse the Services for any unlawful, abusive, or malicious
            activity;
          </li>
          <li>
            Cooperate in a timely manner with Engineers World in relation to
            project delivery and issue resolution.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Professional Conduct & Authorization</h2>
        <p>
          Security services such as penetration testing and vulnerability
          assessments shall only be undertaken upon explicit prior written
          authorization by the Client. Tests must be authorized by persons with
          the right to provide such authorization for the systems being tested.
          Unauthorized testing is prohibited and may be unlawful.
        </p>
        <p>
          Engineers World will act professionally and ethically in all
          assessments and will make reasonable efforts to minimize disruption to
          Client systems during authorized testing.
        </p>
      </section>

      <section>
        <h2>6. Pricing, Payment & Billing</h2>
        <p>
          Fees for Services will be as specified in proposals, SOWs, or
          invoices. Payment terms may include milestone payments, upfront
          deposits, or subscription billing as agreed in writing. All fees are
          exclusive of taxes unless expressly stated.
        </p>
        <p>
          Late payments may attract interest or suspension of Services.
          Engineers World reserves the right to suspend or terminate Services
          for non-payment after providing reasonable notice.
        </p>
      </section>

      <section>
        <h2>7. Change Requests & Scope Revisions</h2>
        <p>
          Any change to project scope or deliverables requested by the Client
          shall be documented as a change request. Engineers World will assess
          impact on timelines, costs, and resources and will provide a written
          amendment or revised SOW for Client approval prior to implementation.
        </p>
      </section>

      <section>
        <h2>8. Delivery, Acceptance & Revisions</h2>
        <p>
          Deliverables will be provided in the format and timeline agreed upon.
          The Client will have a defined period to review and accept or request
          reasonable revisions. Acceptance shall be deemed upon written
          confirmation or lapse of the review period without timely objection.
        </p>
      </section>
      <section>
        <h2>9. Intellectual Property</h2>
        <p>
          Subject to full payment of fees, Engineers World grants the Client
          ownership of final Deliverables specifically created for the Client.
          Engineers World retains ownership of pre-existing materials, general
          knowledge, methodologies, tools, templates, and frameworks used in
          providing the Services.
        </p>
        <p>
          Unless expressly transferred, copyright and other intellectual
          property rights for Engineers World's proprietary components remain
          with Engineers World.
        </p>
      </section>

      <section>
        <h2>10. Confidentiality</h2>
        <p>
          Each party agrees to maintain Confidential Information received from
          the other in strict confidence, to use it solely for the purposes of
          performing the Services, and to limit disclosure to employees or
          contractors who require access for such purposes and who are bound by
          confidentiality obligations.
        </p>
      </section>

      <section>
        <h2>11. Data Protection & Privacy</h2>
        <p>
          Engineers World will handle personal data in accordance with
          applicable data protection laws and the Company’s Privacy Policy. The
          Client shall ensure that it has lawful basis and necessary consents
          for Engineers World to process any personal data provided for the
          purpose of delivering Services.
        </p>
      </section>

      <section>
        <h2>12. Security Obligations</h2>
        <p>
          Engineers World implements reasonable technical and organizational
          measures to protect data and systems. The Client is responsible for
          maintaining security best practices for their infrastructure and for
          keeping credentials and access information confidential.
        </p>
      </section>

      <section>
        <h2>13. Warranties & Disclaimers</h2>
        <p>
          Engineers World warrants that it will perform Services in a
          professional manner consistent with industry standards. Except as
          expressly stated, all other warranties, whether express or implied,
          are disclaimed to the maximum extent permitted by law.
        </p>
        <p>
          Engineers World does not warrant that Services will be uninterrupted
          or that all vulnerabilities or security incidents will be prevented.
        </p>
      </section>

      <section>
        <h2>14. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Engineers World’s aggregate
          liability arising out of or related to these Terms shall not exceed
          the total fees paid by the Client to Engineers World for the specific
          Services giving rise to the claim.
        </p>
        <p>
          Engineers World shall not be liable for indirect, incidental, special,
          punitive, or consequential damages, including loss of profits, loss of
          business, or loss of data.
        </p>
      </section>
      <section>
        <h2>15. Indemnification</h2>
        <p>
          The Client agrees to indemnify and hold Engineers World harmless from
          claims, liabilities, damages, and expenses arising out of Client’s
          misuse of Services, breach of these Terms, or violation of applicable
          laws.
        </p>
      </section>

      <section>
        <h2>16. Third-Party Services & Integrations</h2>
        <p>
          Engineers World may integrate third-party services, software, or APIs
          as part of the Service delivery. Use of such third-party components is
          subject to the third party’s terms and privacy policies. Engineers
          World is not responsible for the performance, security, or
          availability of third-party services.
        </p>
      </section>

      <section>
        <h2>17. Subcontracting</h2>
        <p>
          Engineers World may engage third-party contractors or subcontractors
          to perform aspects of the Services. Engineers World remains
          responsible for such subcontractors’ compliance with these Terms and
          for the performance of Services.
        </p>
      </section>

      <section>
        <h2>18. Assignment</h2>
        <p>
          Neither party may assign or transfer rights or obligations under these
          Terms without the prior written consent of the other party, except
          that Engineers World may assign to an affiliate or in connection with
          a merger or sale of substantially all assets.
        </p>
      </section>

      <section>
        <h2>19. Termination</h2>
        <p>
          Either party may terminate these Terms upon material breach by the
          other party if such breach remains uncured for a specified period
          after written notice. Engineers World may suspend or terminate
          Services for non-payment or for Client’s violation of acceptable use
          policies.
        </p>
        <p>
          Upon termination, Clients remain responsible for payment of Services
          rendered up to the effective termination date and for return or secure
          disposal of confidential information as requested.
        </p>
      </section>

      <section>
        <h2>20. Force Majeure</h2>
        <p>
          Neither party will be liable for any failure or delay in performance
          caused by circumstances beyond their reasonable control, including
          acts of God, government restrictions, natural disasters, pandemic,
          labor disputes, or interruptions to telecommunications or internet
          services.
        </p>
      </section>

      <section>
        <h2>21. Notices</h2>
        <p>
          All notices or communications required under these Terms shall be in
          writing and delivered to the contact information provided by each
          party. Engineers World’s primary contact for notices is:
        </p>
        <p>
          Engineers World Pvt. Ltd. <br />
          Email: info@engineersworld.in <br />
          Phone: +91 7997700218
        </p>
      </section>

      <section>
        <h2>22. Governing Law & Dispute Resolution</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of India. Any disputes arising hereunder shall be subject to the
          exclusive jurisdiction of the courts located in Telangana, India,
          unless otherwise mutually agreed in writing.
        </p>
      </section>

      <section>
        <h2>23. Entire Agreement</h2>
        <p>
          These Terms, together with any SOW, proposal, or other written
          agreements entered into between the parties, constitute the entire
          agreement and supersede all prior agreements and understandings
          related to the Services.
        </p>
      </section>

      <section>
        <h2>24. Amendments</h2>
        <p>
          Engineers World reserves the right to amend or modify these Terms at
          any time. Material changes will be posted on the website and, where
          appropriate, communicated to Clients via email. Continued use of
          Services following any changes constitutes acceptance of the revised
          Terms.
        </p>
      </section>

      <section>
        <h2>25. Severability</h2>
        <p>
          If any provision of these Terms is found to be invalid or
          unenforceable, the remaining provisions shall remain in full force and
          effect.
        </p>
      </section>

      <section>
        <h2>26. Contact & Support</h2>
        <p>
          For questions, support, or additional information about these Terms,
          please contact:
        </p>
        <p>
          Engineers World Pvt. Ltd. <br />
          Email: info@engineersworld.in <br />
          Phone: +91 7997700218 <br />
          Address: Journalist Colony, Nampally, Rajanna Sircilla, Telangana,
          505302
        </p>
      </section>

      <section>
        <h2>27. Acknowledgment</h2>
        <p>
          By using Engineers World's Services, you acknowledge that you have
          read, understood, and agreed to be bound by these Terms of Service.
        </p>
      </section>
    </motion.div>
  )
}

export default TermsOfService
