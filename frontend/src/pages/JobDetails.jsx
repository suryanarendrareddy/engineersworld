import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

export default function JobDetails() {
  const { id } = useParams()

  const jobs = [
    {
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
      title: 'Website Developer',
      description:
        'We need a skilled Web Developer to build modern, responsive, high-performance websites and collaborate with the design & backend teams.',
      responsibilities: [
        'Develop responsive UI using React / TailwindCSS',
        'Optimize performance and SEO',
        'Debug and maintain web applications',
        'Work closely with designers',
      ],
      requirements: [
        'Strong knowledge of React / TailwindCSS',
        'Basic knowledge of APIs',
        'Good problem-solving skills',
      ],
    },
    {
      title: 'Cyber Security Analyst',
      description:
        'We are hiring a Cyber Security Analyst to identify vulnerabilities, monitor systems, and ensure a safe digital environment.',
      responsibilities: [
        'Monitor infrastructure for threats',
        'Perform penetration testing',
        'Document vulnerabilities and solutions',
        'Perform incident response',
      ],
      requirements: [
        'Knowledge of networking & Linux',
        'Understanding of firewalls, IDS/IPS',
        'Basic experience with security tools',
      ],
    },
  ]

  const job = jobs[id]

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null,
  })

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setForm({ ...form, resume: e.target.files[0] })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill all required fields')
      return
    }

    if (!form.resume) {
      toast.error('Please upload your resume (PDF/DOC)')
      return
    }

    toast.promise(new Promise((r) => setTimeout(r, 1500)), {
      loading: 'Submitting your application...',
      success: 'Application submitted successfully! 🎉',
      error: 'Something went wrong!',
    })

    setForm({
      name: '',
      email: '',
      phone: '',
      message: '',
      resume: null,
    })
  }

  if (!job) return <div className="text-white p-10">Invalid Job ID</div>

  const fade = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-20">
      {/* HEADER */}
      <motion.header
        variants={fade}
        initial="hidden"
        animate="visible"
        className="h-[40vh] md:h-[48vh] flex items-center justify-center text-center
        bg-gradient-to-br from-black via-slate-900 to-cyan-700/40 relative overflow-hidden"
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.2, 0.7],
              x: [0, Math.sin(i) * 40],
              y: [0, Math.cos(i) * 40],
            }}
            transition={{
              duration: 3 + i * 0.15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 rounded-full bg-cyan-500/60 blur-[2px]"
            style={{
              top: `${(i * 8) % 100}%`,
              left: `${(i * 11) % 100}%`,
            }}
          />
        ))}

        <h1
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r
        from-emerald-300 to-cyan-300 bg-clip-text text-transparent"
        >
          {job.title}
        </h1>
      </motion.header>

      {/* BODY */}
      <main className="max-w-5xl mx-auto px-6 mt-14">
        {/* JOB DESCRIPTION */}
        <motion.section variants={fade} initial="hidden" animate="visible">
          <h2 className="text-2xl font-bold text-emerald-300">Job Description</h2>
          <p className="mt-3 text-gray-300">{job.description}</p>

          <h3 className="mt-8 text-xl font-semibold text-emerald-300">
            Responsibilities
          </h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            {job.responsibilities.map((res, i) => (
              <li key={i}>• {res}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-emerald-300">Requirements</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            {job.requirements.map((req, i) => (
              <li key={i}>• {req}</li>
            ))}
          </ul>
        </motion.section>

        {/* FORM SECTION */}
        <motion.section
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-14 bg-white/5 p-10 rounded-2xl border border-white/10
          backdrop-blur-xl shadow-xl"
        >
          <h2
            className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300
          bg-clip-text text-transparent mb-8"
          >
            Apply Now
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-300 tracking-wide">Full Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
                  focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none text-sm
                  placeholder-gray-400 transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-300 tracking-wide">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
                  focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 outline-none text-sm
                  placeholder-gray-400 transition-all duration-300"
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-300 tracking-wide">Phone *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
                focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none text-sm
                placeholder-gray-400 transition-all duration-300"
              />
            </div>

            {/* RESUME UPLOAD */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-300 tracking-wide">
                Resume (PDF / DOC) *
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
                focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 outline-none
                text-sm transition-all duration-300 file:bg-white/20
                file:border-none file:px-3 file:py-1 file:rounded-md file:text-white"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-300 tracking-wide">Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Write something (optional)"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
                focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none
                text-sm placeholder-gray-400 transition-all duration-300 resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-emerald-400
              to-cyan-400 text-black font-semibold shadow-lg shadow-cyan-400/20 transition-all"
            >
              Submit Application
            </motion.button>
          </form>
        </motion.section>
      </main>
    </div>
  )
}
