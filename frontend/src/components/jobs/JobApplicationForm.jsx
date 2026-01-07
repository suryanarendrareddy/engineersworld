import { motion } from 'framer-motion'
import { Input } from '../ui/Input'

export default function JobApplicationForm({
  form,
  submitting,
  isOpen,
  onChange,
  onSubmit,
}) {
  return (
    <section className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/15 p-10">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
        Apply for this Position
      </h2>

      {!isOpen && (
        <div className="mt-6 border border-yellow-400/10 px-4 py-3">
          <p className="text-yellow-300">
            Applications are currently closed. Reopening on{' '}
            <strong>June 1</strong>
          </p>
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={onSubmit}>
        <Input
          name="name"
          value={form.name}
          onChange={onChange}
          disabled={!isOpen}
          placeholder="Full Name"
        />

        <Input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          disabled={!isOpen}
          placeholder="Email"
        />

        <Input
          name="phone"
          type="text"
          value={form.phone}
          onChange={onChange}
          disabled={!isOpen}
          placeholder="Phone number including country code"
        />
        <Input
          type="file"
          name="resume"
          onChange={onChange}
          disabled={!isOpen}
        />

        <textarea
          name="message"
          rows={3}
          value={form.message}
          onChange={onChange}
          disabled={!isOpen}
          placeholder="Why should we hire you?"
          className="w-full px-4 py-3 rounded bg-black/40 border border-white/20 disabled:opacity-50"
        />

        <motion.button
          type="submit"
          disabled={!isOpen || submitting}
          whileHover={isOpen && !submitting ? { scale: 1.04 } : {}}
          whileTap={isOpen && !submitting ? { scale: 0.96 } : {}}
          className="w-full py-4 rounded-full font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 text-black disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {!isOpen
            ? 'Applications Closed'
            : submitting
            ? 'Submitting...'
            : 'Submit Application'}
        </motion.button>
      </form>
    </section>
  )
}
