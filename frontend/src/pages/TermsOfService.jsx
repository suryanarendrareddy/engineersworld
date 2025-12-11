import React from 'react'
import { motion } from 'framer-motion'

export default function TermsOfService() {
  const formatDate = (d = new Date()) =>
    new Date(d)
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
      .replace(',', '')

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-900 text-gray-100 py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <article className="mx-auto max-w-4xl bg-gradient-to-br from-black/60 to-slate-900/60 ring-1 ring-white/6 rounded-2xl p-8 md:p-12 shadow-2xl print:shadow-none print:ring-0">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-300 mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-400">
            Last Updated:{' '}
            <time dateTime={new Date().toISOString()}>{formatDate()}</time>
          </p>
        </header>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">1. Agreement</h2>
          <p>
            These Terms of Service ("Terms") govern your access to and use of
            the website, platforms, applications, services, and products
            (collectively, the "Services") provided by Engineers World Pvt. Ltd.
            ("Engineers World", "Company", "we", "us", or "our"). By accessing
            or using the Services you agree to be bound by these Terms.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">2. Definitions</h2>
          <p>For the purposes of these Terms:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>"User"</strong> means an individual or entity who accesses
              or uses the Services.
            </li>
            <li>
              <strong>"Client"</strong> refers to a User that has entered into a
              paid contract for Services.
            </li>
            <li>
              <strong>"Deliverables"</strong> means work product, code, reports,
              documents, or materials created and delivered by Engineers World.
            </li>
            <li>
              <strong>"Confidential Information"</strong> means proprietary,
              non-public business or technical information disclosed by a party
              to the other.
            </li>
          </ul>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">3. Scope of Services</h2>
          <p>
            Engineers World provides professional services including System
            Protection, Website & Android development, Penetration Testing,
            Cybersecurity Training, Threat Intelligence and related services.
            Specific scope and timelines will be in proposals, SOWs, or separate
            agreements.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">4. User Obligations</h2>
          <p>As a User you agree to:</p>
          <ul className="list-disc ml-6">
            <li>Provide accurate information required for Services.</li>
            <li>
              Obtain permissions and rights for access to systems/data provided
              to Engineers World.
            </li>
            <li>Comply with applicable laws and third-party terms.</li>
            <li>Not misuse the Services for unlawful or malicious activity.</li>
            <li>
              Cooperate in a timely manner for project delivery and issue
              resolution.
            </li>
          </ul>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            5. Professional Conduct & Authorization
          </h2>
          <p>
            Security services (e.g., penetration testing) require explicit
            written authorization by the Client. Unauthorized testing is
            prohibited. Engineers World acts ethically and will minimize
            disruption during authorized testing.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            6. Pricing, Payment & Billing
          </h2>
          <p>
            Fees are as specified in proposals, SOWs, or invoices. Payment terms
            may include milestones, deposits, or subscriptions. Late payments
            may incur interest or service suspension.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            7. Change Requests & Scope Revisions
          </h2>
          <p>
            Client-requested scope changes are documented as change requests;
            Engineers World will assess impact and provide a revised SOW for
            approval before implementation.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            8. Delivery, Acceptance & Revisions
          </h2>
          <p>
            Deliverables are provided per agreed format/timeline. Client has a
            period to review and accept or request revisions; acceptance may be
            deemed on written confirmation or lapse of the review period.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">9. Intellectual Property</h2>
          <p>
            Upon full payment, Engineers World grants the Client ownership of
            final Deliverables created for the Client. Engineers World retains
            ownership of pre-existing materials, methodologies, tools,
            templates, and proprietary components.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">10. Confidentiality</h2>
          <p>
            Each party will keep Confidential Information private and limit
            disclosure to those who need access and are bound by confidentiality
            obligations.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            11. Data Protection & Privacy
          </h2>
          <p>
            Engineers World will handle personal data per applicable laws and
            its Privacy Policy. Clients must ensure lawful basis and consents
            for data provided.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">12. Security Obligations</h2>
          <p>
            Engineers World implements reasonable measures to protect data.
            Clients must maintain best-practice security and protect
            credentials.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            13. Warranties & Disclaimers
          </h2>
          <p>
            Engineers World warrants services will be performed professionally
            and consistent with industry standards; other warranties are
            disclaimed to the extent permitted by law. No warranty of
            uninterrupted service or full prevention of incidents is provided.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">14. Limitation of Liability</h2>
          <p>
            Engineers World's aggregate liability is limited to the fees paid
            for the specific Services giving rise to a claim. Indirect,
            consequential, punitive damages are excluded to the extent permitted
            by law.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">15. Indemnification</h2>
          <p>
            The Client will indemnify Engineers World from claims and losses
            arising from Client misuse of Services, breach of Terms, or legal
            violations.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            16. Third-Party Services & Integrations
          </h2>
          <p>
            Third-party components used are subject to those providers' terms
            and privacy policies; Engineers World is not liable for their
            performance or availability.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">17. Subcontracting</h2>
          <p>
            Engineers World may engage subcontractors and remains responsible
            for their compliance and performance.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">18. Assignment</h2>
          <p>
            Neither party may assign rights without prior written consent;
            Engineers World may assign in connection with a merger or sale.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">19. Termination</h2>
          <p>
            Either party may terminate for material breach if uncured after
            notice. Clients owe payment for Services rendered before termination
            and must return or securely dispose of confidential info.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">20. Force Majeure</h2>
          <p>
            Neither party is liable for delays caused by events beyond
            reasonable control (acts of God, government action, pandemics,
            outages, etc.).
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">21. Notices</h2>
          <p>
            Notices must be in writing and delivered to provided contact
            information. Engineers World's primary contact: Engineers World Pvt.
            Ltd., info@engineersworld.in, +91 79977 00218.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            22. Governing Law & Dispute Resolution
          </h2>
          <p>
            These Terms are governed by Indian law and exclusive courts in
            Telangana, India, unless otherwise agreed in writing.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">23. Entire Agreement</h2>
          <p>
            These Terms, together with any SOW, proposal, or written agreements,
            form the entire agreement between the parties.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">24. Amendments</h2>
          <p>
            We may amend these Terms; material changes will be posted and
            communicated where appropriate. Continued use implies acceptance.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">25. Severability</h2>
          <p>
            If any provision is invalid or unenforceable, remaining provisions
            remain in effect.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">26. Contact & Support</h2>
          <address className="not-italic">
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
            Address: Journalist Colony, Nampally, Rajanna Sircilla, Telangana,
            505302
          </address>
        </section>

        <section className="prose prose-invert max-w-none">
          <h2 className="text-xl font-semibold">27. Acknowledgment</h2>
          <p>
            By using Engineers World's Services, you acknowledge that you have
            read, understood and agreed to these Terms of Service.
          </p>
        </section>
      </article>
    </motion.main>
  )
}
