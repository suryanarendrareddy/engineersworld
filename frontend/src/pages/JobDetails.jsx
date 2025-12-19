import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'


const jobs = [
  {
    slug: 'business-development-associate',
    title: 'Business Development Associate',
    description:
      'We are looking for a dynamic and motivated Business Development Associate to grow partnerships, communicate with clients, and expand company reach.',
    responsibilities: [
      'Identify new business opportunities',
      'Build long-term client relationships',
      'Create proposals and presentations',
      'Work closely with the management team',
    ],
    requirements: [
      'Strong communication & negotiation skills',
      'Basic understanding of sales & marketing',
      'Self-motivated and growth-oriented',
    ],
  },
  {
    slug: 'website-developer',
    title: 'Website Developer',
    description:
      'We need a skilled Web Developer to build modern, responsive, high-performance websites.',
    responsibilities: [
      'Develop responsive UI using React / TailwindCSS',
      'Optimize performance and SEO',
      'Debug and maintain web applications',
    ],
    requirements: ['Strong knowledge of React / TailwindCSS', 'Basic knowledge of APIs'],
  },
  {
    slug: 'cyber-security-analyst',
    title: 'Cyber Security Analyst',
    description:
      'We are hiring a Cyber Security Analyst to identify vulnerabilities and secure systems.',
    responsibilities: [
      'Monitor infrastructure for threats',
      'Perform penetration testing',
      'Incident response',
    ],
    requirements: [
      'Knowledge of networking & Linux',
      'Understanding of firewalls, IDS/IPS',
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

    if (!form.name || !form.email || !form.phone || !form.resume) {
      toast.error('All required fields must be filled')
      return
    }

    const formData = new FormData()
    formData.append('jobTitle', job.title)
    formData.append('jobSlug', job.slug)
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('phone', form.phone)
    formData.append('message', form.message)
    formData.append('resume', form.resume)

    const toastId = toast.loading('Submitting application...')

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs/apply`, {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message)

      toast.success('Application submitted successfully 🎉', { id: toastId })

      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
        resume: null,
      })
    } catch (err) {
      toast.error(err.message || 'Something went wrong', { id: toastId })
    }
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-20">
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[45vh] flex items-center justify-center text-center
        bg-gradient-to-br from-black via-slate-900 to-cyan-700/40"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
          {job.title}
        </h1>
      </motion.header>

      <main className="max-w-5xl mx-auto px-6 mt-14">
        <section>
          <h2 className="text-2xl font-bold text-emerald-300">Job Description</h2>
          <p className="mt-3 text-gray-300">{job.description}</p>

          <h3 className="mt-8 text-xl font-semibold text-emerald-300">
            Responsibilities
          </h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            {job.responsibilities.map((r, i) => (
              <li key={i}>• {r}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-emerald-300">Requirements</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            {job.requirements.map((r, i) => (
              <li key={i}>• {r}</li>
            ))}
          </ul>
        </section>

        <section className="mt-14 bg-white/5 p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Apply for this Position
          </h2>

          <p className="text-sm text-gray-400 mt-2 mb-8 max-w-2xl">
            Fill in your details below. Our hiring team will review your application
            carefully.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Full Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full rounded-lg bg-[#020617] border border-white/15 px-4 py-3.5 text-base text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Email Address *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg bg-[#020617] border border-white/15 px-4 py-3.5 text-base text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Phone Number *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full rounded-lg bg-[#020617] border border-white/15 px-4 py-3.5 text-base text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Upload Resume *</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="w-full rounded-lg bg-[#020617] border border-white/15 px-3 py-2.5 text-sm text-gray-300 file:mr-3 file:rounded-md file:border-0 file:bg-emerald-400 file:px-4 file:py-2 file:text-black file:font-semibold active:file:bg-emerald-300"
              />
              <span className="text-xs text-gray-500 mt-1">
                Accepted formats: PDF, DOC, DOCX
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Message (Optional)</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Briefly tell us why you’re a good fit"
                className="w-full rounded-lg bg-[#020617] border border-white/15 px-4 py-3.5 text-base text-white placeholder-gray-500 resize-none focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-10 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold text-base shadow-lg"
              >
                Submit Application
              </motion.button>
              <p className="text-xs text-gray-400 text-center">
                Your information is secure and will not be shared.
              </p>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
