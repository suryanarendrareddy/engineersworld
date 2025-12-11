import React from 'react'
import { motion } from 'framer-motion'

export default function RefundPolicy() {
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
      <article className="mx-auto max-w-4xl bg-gradient-to-br from-black/60 to-slate-900/60 ring-1 ring-white/6 rounded-2xl p-8 md:p-12 shadow-2xl print:shadow-none print:ring-0">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-300 mb-2">
            Refund Policy
          </h1>
          <p className="text-sm text-gray-400">
            Last Updated:{' '}
            <time dateTime={new Date().toISOString()}>{updatedAt}</time>
          </p>
        </header>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">1. Overview</h2>
          <p>
            Engineers World Pvt. Ltd. ("Engineers World", "we", "us", or "our")
            provides a variety of professional and digital services including
            System Protection, Website & Android development, Penetration
            Testing, Cyber Security Training, and Threat Intelligence. This
            Refund Policy outlines when refunds may be issued, the request
            procedure, and practices related to payments and cancellations.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">2. Scope</h2>
          <p>
            This Refund Policy applies to purchases and paid engagements for
            services purchased directly from Engineers World, including one-time
            services, retainer agreements, subscriptions, training fees, and
            development contracts. Contract-specific terms in executed
            agreements or Statements of Work (SOW) take precedence where
            applicable.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">3. General Principles</h2>
          <ul className="list-disc ml-6">
            <li>
              Refunds are considered on a case-by-case basis and at our
              discretion.
            </li>
            <li>
              We do not guarantee refunds except as stated in this Policy or a
              separate agreement.
            </li>
            <li>
              Eligibility depends on service type, work completed, and
              deliverables provided.
            </li>
            <li>
              Proof of purchase, transaction ID, and supporting documentation
              are required for any refund request.
            </li>
          </ul>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">4. Refund Eligibility</h2>
          <p>
            Refunds may be considered where the Client has complied with
            contractual obligations and provided required access:
          </p>
          <ul className="list-disc ml-6">
            <li>No work has commenced for the purchased service.</li>
            <li>Duplicate or erroneous payments that can be verified.</li>
            <li>
              Wrong service purchased and reported promptly before work begins.
            </li>
            <li>
              Mutual agreement to cancel before the first milestone is executed.
            </li>
          </ul>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">5. Non-Refundable Services</h2>
          <p>
            Certain services are non-refundable due to their immediate or
            irreversible nature:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Penetration testing or vulnerability assessments after
              scanning/testing has started.
            </li>
            <li>
              Threat intelligence reports and monitoring services after
              monitoring begins.
            </li>
            <li>
              Delivered or finalized security reports, audit results, or
              remediation guidance once shared.
            </li>
            <li>
              Completed development modules or deployed features after
              acceptance.
            </li>
            <li>
              Training sessions, workshops, or courses once attended or
              materials accessed.
            </li>
            <li>
              Subscription charges for retrospective periods already consumed.
            </li>
          </ul>
          <p className="mt-2">
            Partial deliverables may reduce refund amounts to reflect work
            completed.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            6. Project-Based Work (Website & App Development)
          </h2>
          <ul className="list-disc ml-6">
            <li>
              Pre-milestone cancellation: If cancelled before the first
              milestone and no billable work has begun, a full or partial refund
              may be issued after administrative deductions.
            </li>
            <li>
              Post-milestone cancellation: Completed and accepted milestones are
              non-refundable.
            </li>
            <li>
              Work-in-progress refunds are calculated after assessing hours,
              third-party costs, and produced deliverables.
            </li>
            <li>
              Partial transfer of deliverables (code, assets) may affect
              eligibility and amount.
            </li>
          </ul>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            7. Security Services (Penetration Testing & Threat Intelligence)
          </h2>
          <ul className="list-disc ml-6">
            <li>
              Engagements start only after written authorization; refunds are
              generally not available once work begins.
            </li>
            <li>
              Pre-engagement cancellations may receive refunds less preparatory
              expenses.
            </li>
            <li>
              Emergency incident response fees are typically non-refundable.
            </li>
            <li>
              Refunds are not provided for outcomes caused by third-party
              environments beyond our control.
            </li>
          </ul>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            8. Training, Workshops & Certification Programs
          </h2>
          <ul className="list-disc ml-6">
            <li>
              Cancellations ≥48 hours before a scheduled session may be eligible
              for a partial refund.
            </li>
            <li>No refunds for no-shows without prior notice.</li>
            <li>
              Accessing or downloading training materials generally voids refund
              eligibility.
            </li>
            <li>
              Group booking refunds follow terms in booking confirmations.
            </li>
          </ul>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            9. Subscriptions & Recurring Billing
          </h2>
          <ul className="list-disc ml-6">
            <li>
              Subscriptions renew automatically unless cancelled before the next
              billing cycle.
            </li>
            <li>
              Prorated refunds for partial subscription periods may be provided
              at our discretion.
            </li>
            <li>
              Cancellation prevents future renewals but may not entitle you to
              refund for the current period.
            </li>
          </ul>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            10. Payment Methods, Chargebacks & Disputes
          </h2>
          <p>
            Clients should request a refund from Engineers World before opening
            bank or card disputes. We may contest chargebacks and provide
            supporting documentation.
          </p>
          <ul className="list-disc ml-6">
            <li>
              Engineers World may provide logs, delivery records,
              communications, and acceptance confirmations to resolve disputes.
            </li>
          </ul>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            11. Refund Request Procedure
          </h2>
          <ol className="list-decimal ml-6">
            <li>
              Email <strong>info@engineersworld.in</strong> with subject "Refund
              Request".
            </li>
            <li>
              Include full name, company, contact details, invoice/transaction
              ID, purchase date, and reason for request.
            </li>
            <li>
              Attach supporting documents (proof of payment, screenshots,
              communications).
            </li>
            <li>
              Allow a reasonable evaluation period (typically 7–14 business
              days).
            </li>
          </ol>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">12. Processing Time</h2>
          <p>
            Approved refunds are processed to the original payment method (or
            alternate method if agreed). Processing usually takes 7–14 business
            days but may vary by bank or provider.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            13. Fees, Administrative Costs & Deductions
          </h2>
          <p>
            We may deduct reasonable administrative fees, third-party costs, or
            non-recoverable expenses from refundable amounts (e.g., payment
            gateway fees, licensing/hosting fees, time-based charges).
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            14. Partial Work & Partial Refunds
          </h2>
          <p>
            Partial refunds consider hours logged, deliverables handed over,
            third-party costs, and non-refundable expenses. All partial refunds
            are at our discretion unless contractually specified.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            15. Exceptions & Special Circumstances
          </h2>
          <p>
            Exceptional cases (e.g., demonstrable breach by Engineers World or
            mutual termination) may be handled on a case-by-case basis and
            documented in writing.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            16. Promotional, Trial, or Discounted Services
          </h2>
          <p>
            Promotional, trial, or deeply discounted services may have specific
            non-refundable terms which will be evaluated according to the
            original offer.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">
            17. Governing Law & Dispute Resolution
          </h2>
          <p>
            This Policy and disputes arising from refund matters are governed by
            the laws of India and subject to the courts in Telangana, unless
            otherwise agreed in writing.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">18. Modifications</h2>
          <p>
            We may modify this Refund Policy at any time. Changes will be posted
            on our website and become effective upon posting. Continued use
            after changes constitutes acceptance.
          </p>
        </section>

        <section className="prose prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold">19. Contact Information</h2>
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
          <h2 className="text-xl font-semibold">20. Acknowledgment</h2>
          <p>
            By purchasing or engaging our services, you acknowledge that you
            have read, understood, and agreed to this Refund Policy. Engineers
            World reserves the right to refuse refund requests that do not
            comply with this Policy or applicable agreements.
          </p>
        </section>
      </article>
    </motion.main>
  )
}
