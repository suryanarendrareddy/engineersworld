import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

const jobs = [
  {
    slug: 'business-development-associate',
    title: 'Business Development Associate',
    description:
      'We are looking for a dynamic and motivated Business Development Associate to build partnerships, communicate with clients, and drive company growth.',
    responsibilities: [
      'Identify and pursue new business opportunities',
      'Build and maintain long-term client relationships',
      'Prepare proposals, presentations, and reports',
      'Collaborate closely with leadership and strategy teams',
    ],
    requirements: [
      'Excellent communication and negotiation skills',
      'Basic understanding of sales and marketing',
      'Self-driven with a growth-oriented mindset',
    ],
  },
  {
    slug: 'website-developer',
    title: 'Full Stack web Development',
    description:
      'We are seeking a skilled Website Developer to build modern, responsive, and high-performance web applications.',
    responsibilities: [
      'Develop responsive user interfaces using React and Tailwind CSS',
      'Optimize applications for performance and SEO',
      'Debug, maintain, and improve existing applications',
    ],
    requirements: [
      'Strong experience with React and Tailwind CSS',
      'Basic understanding of REST APIs',
    ],
  },
  {
    slug: 'cyber-security-analyst',
    title: 'Cyber Security Analyst',
    description:
      'We are hiring a Cyber Security Analyst to identify vulnerabilities and help secure our infrastructure.',
    responsibilities: [
      'Monitor systems and networks for security threats',
      'Conduct vulnerability assessments and penetration testing',
      'Assist in incident response and reporting',
    ],
    requirements: [
      'Knowledge of networking and Linux',
      'Understanding of firewalls, IDS, and IPS',
    ],
  },
]

export default function JobDetails() {
  const { slug } = useParams()
  const job = jobs.find((j) => j.slug === slug)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null,
  })

  const [submitting, setSubmitting] = useState(false)

  if (!job) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        Job not found
      </div>
    )
  }

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setForm({ ...form, resume: e.target.files[0] })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting) return

    const name = form.name.trim()
    const email = form.email.trim()
    const phone = form.phone.replace(/\s+/g, '')
    const message = form.message.trim()
    const resume = form.resume

    if (!name || !email || !phone || !message || !resume) {
      toast.error('All fields are required')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    if (!/^\+?[0-9]{8,15}$/.test(phone)) {
      toast.error('Enter a valid phone number with country code (e.g. +91XXXXXXXXXX)')
      return
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]

    if (!allowedTypes.includes(resume.type)) {
      toast.error('Resume must be PDF, DOC, or DOCX')
      return
    }

    const maxSize = 5 * 1024 * 1024
    if (resume.size > maxSize) {
      toast.error('Resume file size must be under 5MB')
      return
    }

    setSubmitting(true)
    const toastId = toast.loading('Submitting application...')

    try {
      const formData = new FormData()
      formData.append('jobTitle', job.title)
      formData.append('jobSlug', job.slug)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('phone', phone)
      formData.append('message', message)
      formData.append('resume', resume)

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs/apply`, {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Submission failed')
      }

      toast.success(data.message || 'Application submitted successfully 🎉', {
        id: toastId,
      })

      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
        resume: null,
      })
    } catch (err) {
      toast.error(err.message || 'Something went wrong', { id: toastId })
    } finally {
      setSubmitting(false)
    }
  }




  return (
    <div className="min-h-screen bg-[#020617] text-white pb-24">
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[45vh] flex items-center justify-center text-center
        bg-gradient-to-br from-black via-slate-900 to-cyan-700/40 px-6"
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold
          bg-gradient-to-r from-emerald-300 to-cyan-300
          bg-clip-text text-transparent"
        >
          {job.title}
        </h1>
      </motion.header>

      <main className="max-w-5xl mx-auto px-6 mt-16 space-y-16">
        {/* JOB INFO */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-emerald-300">Job Overview</h2>
            <p className="mt-3 text-gray-300 leading-relaxed">{job.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-emerald-300">
              Key Responsibilities
            </h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              {job.responsibilities.map((r, i) => (
                <li key={i}>• {r}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-emerald-300">Requirements</h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              {job.requirements.map((r, i) => (
                <li key={i}>• {r}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* APPLICATION FORM */}
        <section
          className="bg-gradient-to-br from-white/10 via-white/5 to-white/10
          backdrop-blur-xl rounded-2xl border border-white/15
          p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <h2
            className="text-2xl md:text-3xl font-bold
            bg-gradient-to-r from-emerald-300 to-cyan-300
            bg-clip-text text-transparent"
          >
            Apply for this Position
          </h2>

          <p className="mt-3 mb-10 text-gray-400 max-w-2xl">
            Please complete the form below. Our hiring team will carefully review your
            application and contact shortlisted candidates.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-5 py-3 rounded-lg bg-black/40
                border border-white/15 text-white
                focus:outline-none focus:border-emerald-400
                focus:ring-1 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full px-5 py-3 rounded-lg bg-black/40
                border border-white/15 text-white
                focus:outline-none focus:border-cyan-400
                focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Enter Mobile Number with country code"
                className="w-full px-5 py-3 rounded-lg bg-black/40
                border border-white/15 text-white
                focus:outline-none focus:border-emerald-400
                focus:ring-1 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Upload Resume <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-black/40 border border-white/15
                px-3 py-2.5 text-sm text-gray-300
                file:mr-4 file:rounded-md file:border-0
                file:bg-emerald-400 file:px-5 file:py-2
                file:text-black file:font-semibold
                active:file:bg-emerald-300"
              />
              <p className="mt-1 text-xs text-gray-500">
                Accepted formats: PDF, DOC, DOCX (Max 10MB)
              </p>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Why should we hire you for this role?{' '}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Briefly tell us why you’re a good fit for this role"
                className="w-full px-5 py-3 rounded-lg bg-black/40
                border border-white/15 text-white resize-none
                focus:outline-none focus:border-cyan-400
                focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div className="pt-6 flex flex-col gap-3">
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={!submitting ? { scale: 1.04 } : {}}
                whileTap={!submitting ? { scale: 0.96 } : {}}
                className="w-full py-4 rounded-full font-semibold text-base
                bg-gradient-to-r from-emerald-400 to-cyan-400
                text-black shadow-xl disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Submit Application'}
              </motion.button>

              <p className="text-xs text-gray-400 text-center">
                Your information will be kept confidential.
              </p>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
