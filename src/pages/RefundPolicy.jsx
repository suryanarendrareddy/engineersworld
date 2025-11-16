import React from 'react'
import { motion } from 'framer-motion'
import './policies.css'

const RefundPolicy = () => {
  return (
    <motion.div
      className="policy-container"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="policy-title">Refund Policy</h1>
      <p className="policy-updated">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <section>
        <h2>1. Overview</h2>
        <p>
          Engineers World Pvt. Ltd. ("Engineers World", "we", "us", or "our")
          provides a variety of professional and digital services including
          System Protection, Website Development, Android Development,
          Penetration Testing, Cyber Security Training, and Threat Intelligence.
          This Refund Policy outlines the circumstances under which refunds may
          be issued, the procedure to request refunds, and our general practices
          related to payments and cancellations. Due to the specialized and
          often irreversible nature of digital and security services, refunds
          are limited and governed by the terms below.
        </p>
      </section>

      <section>
        <h2>2. Scope</h2>
        <p>
          This Refund Policy applies to all purchases and paid engagements for
          services purchased directly from Engineers World, including one-time
          services, retainer agreements, subscription services, training fees,
          and development contracts. Separate contract-specific refund terms in
          executed agreements or Statements of Work (SOW) will take precedence
          where applicable.
        </p>
      </section>

      <section>
        <h2>3. General Principles</h2>
        <ul>
          <li>
            Refunds are considered on a case-by-case basis and at our
            discretion.
          </li>
          <li>
            We do not guarantee refunds except as stated in this Policy or in a
            separate agreement.
          </li>
          <li>
            Refund eligibility often depends on service type, work completed,
            and whether deliverables were provided.
          </li>
          <li>
            Proof of purchase, transaction ID, and supporting documentation are
            required for any refund request.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Refund Eligibility</h2>
        <p>
          Refunds may be considered in the following circumstances provided the
          Client has complied with contractual obligations and provided required
          information and access:
        </p>
        <ul>
          <li>
            The service has not yet commenced and no work has been performed.
          </li>
          <li>
            An accidental, duplicate, or erroneous payment can be verified.
          </li>
          <li>
            The Client purchased the wrong service and the mistake is reported
            promptly prior to any work beginning.
          </li>
          <li>
            The Client and Engineers World mutually agree to cancel the project
            before the first milestone is executed.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Non-Refundable Services</h2>
        <p>
          Certain services are non-refundable due to their immediate,
          consumable, or irreversible nature. Refunds are not available for:
        </p>
        <ul>
          <li>
            Penetration testing or vulnerability assessments once scanning or
            testing has started.
          </li>
          <li>
            Threat intelligence reports and monitoring services after the
            monitoring period starts.
          </li>
          <li>
            Delivered or finalized security reports, audit results, or
            remediation guidance once shared.
          </li>
          <li>
            Completed development modules, deployed features, or code delivered
            post-acceptance.
          </li>
          <li>
            Training sessions, workshop seats, or courses once the session has
            been attended or materials accessed.
          </li>
          <li>
            Subscription charges for retrospective periods already consumed.
          </li>
        </ul>
        <p>
          If partial deliverables have been provided, refunds may be reduced to
          reflect the work completed, at Engineers World's discretion.
        </p>
      </section>

      <section>
        <h2>6. Project-Based Work (Website & App Development)</h2>
        <p>
          Development projects are typically structured with milestones. The
          following rules generally apply:
        </p>
        <ul>
          <li>
            Pre-milestone cancellation: If the Client cancels before the first
            milestone and Engineers World has not begun billable work, a full or
            partial refund may be issued after deducting reasonable
            administrative costs.
          </li>
          <li>
            Post-milestone cancellation: Once a milestone is completed and
            accepted, that portion of the project fee is non-refundable.
          </li>
          <li>
            Work-in-progress: Refund amounts for in-progress work will be
            calculated after assessing hours spent, third-party costs, and
            deliverables produced.
          </li>
          <li>
            Custom deliverables: Deliverables that have been partially
            transferred to the Client (code, designs, assets) may affect refund
            eligibility and amount.
          </li>
        </ul>
      </section>

      <section>
        <h2>
          7. Security Services (Penetration Testing & Threat Intelligence)
        </h2>
        <p>
          Security services involve specialized human expertise and sensitive
          operations:
        </p>
        <ul>
          <li>
            Authorization requirement: Security engagements commence only after
            written authorization from the Client. Once the engagement begins,
            refunds are generally not available.
          </li>
          <li>
            Pre-engagement cancellations: If the Client withdraws authorization
            before work starts, a refund may be granted less any preparatory
            expenses.
          </li>
          <li>
            Emergency or incident response: Fees for urgent incident response or
            forensic work are typically non-refundable due to immediate
            allocation of resources.
          </li>
          <li>
            Third-party dependencies: Refunds are not provided for delays or
            outcomes caused by third-party environments beyond Engineers World's
            control.
          </li>
        </ul>
      </section>

      <section>
        <h2>8. Training, Workshops & Certification Programs</h2>
        <p>
          Training offerings may include in-person sessions, online courses, or
          live workshops:
        </p>
        <ul>
          <li>
            Cancellation policy: Cancellations made at least 48 hours prior to
            the scheduled session may be eligible for a partial refund.
          </li>
          <li>
            No-shows: No refunds will be provided for participants who do not
            attend a scheduled session without prior notice.
          </li>
          <li>
            Access to materials: If training materials or recordings are
            accessed or downloaded, refunds will generally be denied.
          </li>
          <li>
            Group bookings: Refunds for group or corporate bookings are subject
            to the terms agreed in the booking confirmation.
          </li>
        </ul>
      </section>
      <section>
        <h2>9. Subscriptions & Recurring Billing</h2>
        <p>For subscription-based services, the following provisions apply:</p>
        <ul>
          <li>
            Billing cycle: Subscriptions renew automatically unless cancelled
            prior to the next billing cycle.
          </li>
          <li>
            Prorated refunds: Refunds for partially used subscription periods
            may be prorated at Engineers World's discretion and depending on the
            subscription terms.
          </li>
          <li>
            Cancellation: To cancel a subscription, contact support or follow
            the account cancellation flow in your dashboard. Cancellation
            prevents future renewals but does not always entitle you to a refund
            for the current billing period.
          </li>
        </ul>
      </section>

      <section>
        <h2>10. Payment Methods, Chargebacks & Disputes</h2>
        <p>
          Payments are processed through authorized payment gateways. Clients
          are responsible for initiating a refund request with Engineers World
          first before opening a bank or card charge dispute. Repeated or
          unjustified chargeback disputes may lead to suspension of services and
          recovery of fees through legal channels.
        </p>
        <ul>
          <li>
            Chargebacks: If a bank or card issuer initiates a chargeback,
            Engineers World reserves the right to contest the dispute and
            provide supporting documentation.
          </li>
          <li>
            Evidence: Engineers World may provide logs, delivery records,
            communications, and acceptance confirmations to resolve disputes.
          </li>
        </ul>
      </section>
      <section>
        <h2>11. Refund Request Procedure</h2>
        <p>To request a refund, the Client must:</p>
        <ol>
          <li>
            Send an email to <strong>info@engineersworld.in</strong> with
            subject line “Refund Request”.
          </li>
          <li>
            Include the Client's full name, company, contact details, invoice or
            transaction ID, date of purchase, and description of the reason for
            the request.
          </li>
          <li>
            Attach supporting documents such as proof of payment, screenshots,
            or relevant project communications.
          </li>
          <li>
            Allow Engineers World a reasonable evaluation period to assess the
            request (typically 7-14 business days).
          </li>
        </ol>
        <p>
          Engineers World will respond with confirmation of receipt and may
          request additional details. Approval or denial of refunds will be
          communicated in writing.
        </p>
      </section>

      <section>
        <h2>12. Processing Time</h2>
        <p>
          If a refund is approved, Engineers World will process the refund to
          the original payment method or, where agreed, an alternative method.
          Processing typically takes 7–14 business days, but actual posting time
          may vary depending on banks or payment providers.
        </p>
      </section>

      <section>
        <h2>13. Fees, Administrative Costs & Deductions</h2>
        <p>
          Engineers World may deduct reasonable administrative fees, third-party
          costs, or non-recoverable expenses incurred prior to cancellation from
          the refundable amount. Examples include:
        </p>
        <ul>
          <li>Payment gateway transaction fees</li>
          <li>Third-party licensing or hosting fees already paid</li>
          <li>Time-based charges for hours already worked</li>
        </ul>
      </section>

      <section>
        <h2>14. Partial Work & Partial Refunds</h2>
        <p>
          For engagements where some work has been completed, Engineers World
          may consider partial refunds. Calculation of partial refunds will
          consider:
        </p>
        <ul>
          <li>Hours logged and resources consumed</li>
          <li>Deliverables already handed over</li>
          <li>Third-party costs already incurred</li>
          <li>Any non-refundable expenses</li>
        </ul>
        <p>
          All partial refunds are at Engineers World's discretion unless
          governed by a specific contract clause.
        </p>
      </section>

      <section>
        <h2>15. Exceptions & Special Circumstances</h2>
        <p>
          In exceptional cases (such as demonstrable breach by Engineers World,
          mutual agreement to terminate, or extraordinary circumstances),
          Engineers World may consider refunds beyond the standard policy. Such
          resolutions will be handled on a case-by-case basis and documented in
          writing.
        </p>
      </section>

      <section>
        <h2>16. Promotional, Trial, or Discounted Services</h2>
        <p>
          Promotional or deeply discounted services, trial offers, or free
          consultations may have specific non-refundable terms. Refund
          entitlements for promotional services will be evaluated according to
          the original offer terms.
        </p>
      </section>
      <section>
        <h2>17. Governing Law & Dispute Resolution</h2>
        <p>
          This Refund Policy and any disputes arising out of refund matters
          shall be governed by the laws of India. Any disputes shall be subject
          to the exclusive jurisdiction of courts located in Telangana, India,
          unless otherwise mutually agreed to in writing.
        </p>
      </section>

      <section>
        <h2>18. Modifications to this Policy</h2>
        <p>
          Engineers World reserves the right to modify this Refund Policy at any
          time. Changes will be posted on our website and will be effective
          immediately upon posting. Continued use of our services after any
          changes constitutes acceptance of the revised policy.
        </p>
      </section>

      <section>
        <h2>19. Contact Information</h2>
        <p>
          If you have questions, want to request a refund, or need assistance
          related to payments, please contact:
        </p>
        <p>
          Engineers World Pvt. Ltd. <br />
          Email: <strong>info@engineersworld.in</strong> <br />
          Phone: <strong>+91 7997700218</strong> <br />
          Address: Journalist Colony, Nampally, Rajanna Sircilla, Telangana,
          505302
        </p>
      </section>
      <section>
        <h2>20. Acknowledgment</h2>
        <p>
          By purchasing or engaging our services, you acknowledge that you have
          read, understood, and agreed to the terms of this Refund Policy.
          Engineers World reserves the right to refuse any refund request that
          does not comply with the terms set forth in this Policy or in the
          applicable service agreement.
        </p>
      </section>
    </motion.div>
  )
}

export default RefundPolicy
