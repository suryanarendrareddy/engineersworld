import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

export default function InternshipDetails() {
  const { id } = useParams()

  const internships = [
    {
      title: 'Web Development Intern',
      description:
        'Gain hands-on experience in real-world web development. Work with React, Tailwind, APIs, and production-level environments.',
      responsibilities: [
        'Build responsive UI components',
        'Collaborate with backend/API team',
        'Test and debug UI layouts',
        'Follow Git workflow and industry practices',
      ],
      requirements: [
        'Basic HTML, CSS, JS knowledge',
        'React understanding is a bonus',
        'Teamwork & communication skills',
        'Fast learner and adaptive mindset',
      ],
    },
    {
      title: 'Cybersecurity Intern',
      description:
        'Work on real-time cybersecurity tasks including threat monitoring, vulnerability scanning, and incident documentation.',
      responsibilities: [
        'Assist in security audits',
        'Perform vulnerability scanning',
        'Learn digital forensics basics',
        'Document reports & findings',
      ],
      requirements: [
        'Basic Linux & networking knowledge',
        'Interest in security tools',
        'Analytical and logical thinking',
        'Strong willingness to learn',
      ],
    },
  ]

  const intern = internships[id]

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill all required fields')
      return
    }

    // Fake submit using toast.promise
    toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
      loading: 'Submitting your application...',
      success: 'Application submitted successfully!',
      error: 'Something went wrong!',
    })

    setForm({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  if (!intern) return <div className="text-white p-10">Invalid Internship ID</div>

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
          {intern.title}
        </h1>
      </motion.header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-6 mt-14">
        {/* DESCRIPTION */}
        <motion.section variants={fade} initial="hidden" animate="visible">
          <h2 className="text-2xl font-bold text-emerald-300">Internship Overview</h2>
          <p className="mt-3 text-gray-300">{intern.description}</p>

          <h3 className="mt-8 text-xl font-semibold text-emerald-300">
            Responsibilities
          </h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            {intern.responsibilities.map((res, i) => (
              <li key={i}>• {res}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-emerald-300">Requirements</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            {intern.requirements.map((req, i) => (
              <li key={i}>• {req}</li>
            ))}
          </ul>
        </motion.section>

        {/* APPLY FORM */}
        <motion.section
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-14 bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-bold text-emerald-300 mb-6">Apply Now</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-300">Full Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10
                  focus:border-emerald-400 outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-gray-300">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10
                  focus:border-emerald-400 outline-none"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="text-xs text-gray-300">Phone *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10
                focus:border-emerald-400 outline-none"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-xs text-gray-300">Message (Optional)</label>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10
                focus:border-emerald-400 outline-none resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-3 rounded-full bg-emerald-400 text-black font-semibold"
            >
              Submit Application
            </motion.button>
          </form>
        </motion.section>
      </main>
    </div>
  )
}

