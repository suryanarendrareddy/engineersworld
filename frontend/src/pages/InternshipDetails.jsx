import { useParams } from 'react-router-dom'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

export default function InternshipDetails() {
  const { slug } = useParams()

  const internships = [
    {
      slug: 'full-stack-development-intern',
      title: 'Full Stack Development Intern (Paid Internship)',
      description:
        'A structured, mentor-led paid internship focused on building real-world full-stack development skills through hands-on projects and guided learning.',
      learnings: [
        'React & Tailwind CSS',
        'Node.js & Express',
        'MongoDB & REST APIs',
        'Git & GitHub workflows',
      ],
      highlights: [
        'Hands-on real-world projects',
        'Industry-level coding practices',
        'Mentor guidance',
        'Internship certificate',
      ],
      eligibility: [
        'Basic HTML, CSS, JavaScript',
        'Strong interest in full-stack development',
      ],
    },
    {
      slug: 'cybersecurity-intern',
      title: 'Cybersecurity Intern (Paid Internship)',
      description:
        'Hands-on cybersecurity internship covering real-world security tools, concepts, and guided practical labs.',
      learnings: [
        'Cybersecurity fundamentals',
        'Vulnerability assessment',
        'Basic penetration testing',
      ],
      highlights: [
        'Practical security labs',
        'Mentor support',
        'Completion certificate',
      ],
      eligibility: ['Basic networking', 'Linux fundamentals'],
    },
  ]

  const intern = internships.find((i) => i.slug === slug)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error('Please fill all required fields')
      return
    }

    setIsSubmitting(true)
    const toastId = toast.loading('Submitting application...')

    try {
      await new Promise((r) => setTimeout(r, 800))
      toast.success('Application submitted successfully!', { id: toastId })
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      toast.error('Server error', { id: toastId })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!intern) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        Invalid Internship
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-24">
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[32vh] md:h-[45vh] flex items-center justify-center text-center
        bg-gradient-to-br from-black via-slate-900 to-cyan-700/40 px-4"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r
        from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
          {intern.title}
        </h1>
      </motion.header>

      <main className="max-w-5xl mx-auto px-4 md:px-6 mt-12 space-y-16">
        <InfoSection title="Program Overview" content={intern.description} />
        <ListSection title="What You Will Learn" items={intern.learnings} />
        <ListSection title="Training Highlights" items={intern.highlights} />
        <ListSection title="Eligibility" items={intern.eligibility} />

        {/* FORM */}
        <section className="bg-gradient-to-br from-white/10 via-white/5 to-white/10
        backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-white/15 shadow-2xl">
          <h3 className="text-2xl font-bold text-emerald-300">
            Internship Registration
          </h3>

          <p className="text-sm text-gray-400 mt-2 mb-8">
            Limited seats • Paid training + internship program
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FloatingInput
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <FloatingInput
              label="Email Address"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <FloatingInput
              label="Phone Number (with country code)"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <FloatingTextarea
              label="Why are you interested in this training + internship program?"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              className={`w-full py-4 rounded-full text-lg font-semibold shadow-xl
                ${isSubmitting
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-black'
                }`}
            >
              {isSubmitting ? 'Submitting…' : 'Register Now'}
            </motion.button>

            <p className="text-xs text-gray-400 text-center">
              Your information is secure and will not be shared.
            </p>
          </form>
        </section>
      </main>
    </div>
  )
}

/* ---------- SECTIONS ---------- */

function InfoSection({ title, content }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-emerald-300">{title}</h2>
      <p className="mt-3 text-gray-300 leading-relaxed">{content}</p>
    </section>
  )
}

function ListSection({ title, items }) {
  return (
    <section>
      <h3 className="text-xl font-semibold text-emerald-300">{title}</h3>
      <ul className="mt-3 space-y-2 text-gray-300">
        {items.map((i, idx) => (
          <li key={idx}>• {i}</li>
        ))}
      </ul>
    </section>
  )
}

/* ---------- FLOATING INPUT ---------- */

function FloatingInput({ label, name, type = 'text', value, onChange, required }) {
  const id = `input-${name}`
  const active = value.length > 0

  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-black/40 text-white
        border border-white/15 focus:outline-none
        focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
      />

      <label
        htmlFor={id}
        className={`absolute left-4 px-1 bg-[#020617] transition-all
        ${active
            ? '-top-2 text-xs text-emerald-300'
            : 'top-3 text-sm text-gray-400'
          }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  )
}

/* ---------- FLOATING TEXTAREA ---------- */

function FloatingTextarea({ label, name, value, onChange, required }) {
  const id = `textarea-${name}`
  const active = value.length > 0

  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows="4"
        required={required}
        className="w-full px-4 pt-6 pb-3 rounded-xl bg-[#020617]/80
        text-white resize-none border border-white/20
        focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
      />

      <label
        htmlFor={id}
        className={`absolute left-4 px-1 bg-[#020617] transition-all
        ${active
            ? '-top-2 text-xs text-cyan-300'
            : 'top-3 text-sm text-gray-400'
          }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  )
}
