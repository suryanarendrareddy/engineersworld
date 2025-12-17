import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

const MAINTENANCE_MODE = true

function MaintenanceOverlay() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-300">
          Under Maintenance
        </h1>

        <p className="mt-4 text-gray-100 text-lg leading-relaxed">
          Internship applications are temporarily unavailable while we upgrade our systems.
        </p>

        <p className="mt-2 text-gray-200 text-md">Please check back soon.</p>

        <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

        <p className="mt-6 text-sm text-gray-300">
          Engineers World © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}


export default function InternshipDetails() {
  const { id } = useParams()

  const internships = [
    {
      title: 'Full Stack Development Intern',
      description:
        'Work on real-world full stack applications using React, Node.js, MongoDB and modern tooling.',
      responsibilities: [
        'Build responsive frontend components',
        'Integrate REST APIs',
        'Work with backend & database',
        'Follow Git & agile workflow',
      ],
      requirements: [
        'Basic HTML, CSS, JavaScript',
        'React fundamentals',
        'Problem-solving mindset',
        'Willingness to learn',
      ],
    },
    {
      title: 'Cybersecurity Intern',
      description:
        'Hands-on exposure to cybersecurity tools, vulnerability analysis and incident reporting.',
      responsibilities: [
        'Assist in security audits',
        'Vulnerability scanning',
        'Learn penetration testing basics',
        'Prepare security reports',
      ],
      requirements: [
        'Basic networking knowledge',
        'Linux fundamentals',
        'Interest in cybersecurity',
        'Analytical thinking',
      ],
    },
    {
      title: 'Data Structures through Java',
      description:
        'Strengthen problem-solving skills by mastering DSA concepts using Java.',
      responsibilities: [
        'Solve DSA problems daily',
        'Learn algorithms & complexity',
        'Implement Java solutions',
        'Participate in mock tests',
      ],
      requirements: [
        'Basic Java knowledge',
        'Logical thinking',
        'Consistency & practice',
        'Interest in coding',
      ],
    },
    {
      title: 'Cloud Computing Intern',
      description:
        'Learn cloud fundamentals, deployment strategies and real-world workflows.',
      responsibilities: [
        'Understand cloud services',
        'Deploy sample applications',
        'Learn CI/CD basics',
        'Monitor cloud resources',
      ],
      requirements: [
        'Basic computer networking',
        'Interest in cloud platforms',
        'Linux fundamentals',
        'Curiosity to explore',
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

    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill all required fields')
      return
    }

    toast.promise(new Promise((res) => setTimeout(res, 1500)), {
      loading: 'Submitting your application...',
      success: 'Application submitted successfully!',
      error: 'Something went wrong!',
    })

    setForm({ name: '', email: '', phone: '', message: '' })
  }

  if (!intern) {
    return <div className="text-white p-10">Invalid Internship ID</div>
  }

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
    <div className="min-h-screen bg-[#020617] text-white pb-20 overflow-x-hidden">
      {MAINTENANCE_MODE && <MaintenanceOverlay />}

      <motion.header
        variants={fade}
        initial="hidden"
        animate="visible"
        className="relative h-[42vh] md:h-[48vh] flex items-center justify-center text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-cyan-700/40" />

        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent px-4">
          {intern.title}
        </h1>
      </motion.header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-14">
        <motion.section variants={fade} initial="hidden" animate="visible">
          <h2 className="text-2xl font-bold text-emerald-300">Internship Overview</h2>

          <p className="mt-3 text-gray-300">{intern.description}</p>

          <h3 className="mt-8 text-xl font-semibold text-emerald-300">
            Responsibilities
          </h3>

          <ul className="mt-2 space-y-2 text-gray-300">
            {intern.responsibilities.map((r, i) => (
              <li key={i}>• {r}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-emerald-300">Requirements</h3>

          <ul className="mt-2 space-y-2 text-gray-300">
            {intern.requirements.map((r, i) => (
              <li key={i}>• {r}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-14 bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-bold text-emerald-300 mb-6">Apply Now</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:border-emerald-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:border-emerald-400 outline-none"
              />
            </div>

            <input
              name="phone"
              placeholder="Phone *"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:border-emerald-400 outline-none"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Message (Optional)"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:border-emerald-400 outline-none resize-none"
            />

            <button
              disabled
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-emerald-400 text-black font-semibold opacity-60 cursor-not-allowed"
            >
              Submit Application
            </button>
          </form>
        </motion.section>
      </main>
    </div>
  )
}
