import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

export default function InternshipDetails() {
  const { slug } = useParams()

  const internships = [
    {
      slug: 'full-stack-development-intern',
      title: 'Full Stack Development Intern (Paid Internship)',
      description:
        'This paid internship is a structured training program focused on building real-world full stack development skills. Interns learn by working on practical projects under mentor guidance, similar to industry workflows.',

      learnings: [
        'Frontend development using React and Tailwind CSS',
        'Backend development with Node.js and Express',
        'MongoDB database design and integration',
        'REST API development and integration',
        'Git, GitHub, and collaborative workflows',
      ],

      highlights: [
        'Mentor-led live training',
        'Hands-on project-based learning',
        'Industry-level coding practices',
        'Internship certificate & project experience',
      ],

      eligibility: [
        'Basic knowledge of HTML, CSS, JavaScript',
        'Interest in full stack development',
        'Willingness to learn and practice regularly',
      ],
    },

    {
      slug: 'cybersecurity-intern',
      title: 'Cybersecurity Intern (Paid Internship)',
      description:
        'A hands-on paid internship designed to introduce interns to real-world cybersecurity concepts, tools, and practices used by security professionals.',

      learnings: [
        'Fundamentals of cybersecurity and threat models',
        'Vulnerability scanning and assessment',
        'Introduction to penetration testing',
        'Basic incident analysis and reporting',
      ],

      highlights: [
        'Exposure to real cybersecurity tools',
        'Practical security labs',
        'Guided learning from industry mentors',
        'Certificate upon completion',
      ],

      eligibility: [
        'Basic networking knowledge',
        'Linux fundamentals',
        'Strong interest in cybersecurity',
      ],
    },

    {
      slug: 'dsa-java-intern',
      title: 'Data Structures & Algorithms Intern (Java)',
      description:
        'This paid internship focuses on improving problem-solving skills through structured training in Data Structures and Algorithms using Java.',

      learnings: [
        'Core data structures (Arrays, Linked Lists, Trees, Graphs)',
        'Algorithmic problem solving',
        'Time & space complexity analysis',
        'Java-based implementation techniques',
      ],

      highlights: [
        'Daily coding practice',
        'Interview-oriented problem sets',
        'Mock assessments',
        'Strong foundation for placements',
      ],

      eligibility: [
        'Basic Java knowledge',
        'Logical thinking ability',
        'Interest in competitive programming',
      ],
    },

    {
      slug: 'cloud-computing-intern',
      title: 'Cloud Computing Intern (Paid Internship)',
      description:
        'A practical paid internship that introduces cloud fundamentals, deployment models, and real-world cloud workflows.',

      learnings: [
        'Cloud service models (IaaS, PaaS, SaaS)',
        'Application deployment basics',
        'Introduction to CI/CD pipelines',
        'Monitoring and cloud resource management',
      ],

      highlights: [
        'Hands-on cloud labs',
        'Real deployment scenarios',
        'Industry-relevant skills',
        'Internship certificate',
      ],

      eligibility: [
        'Basic computer networking',
        'Linux fundamentals',
        'Interest in cloud technologies',
      ],
    },
  ]

  const intern = internships.find((i) => i.slug === slug)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill all required fields')
      return
    }

    const toastId = toast.loading('Submitting registration...')

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/internships/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          internshipTitle: intern.title,
          internshipSlug: intern.slug,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message?.trim(),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Submission failed')
      }

      toast.success('Registration submitted successfully!', {
        id: toastId,
      })

      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (err) {
      toast.error(err.message || 'Something went wrong', {
        id: toastId,
      })
    }
  }


  if (!intern) {
    return <div className="text-white p-10">Invalid Internship</div>
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-20">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[45vh] flex items-center justify-center text-center
        bg-gradient-to-br from-black via-slate-900 to-cyan-700/40 px-4"
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r
        from-emerald-300 to-cyan-300 bg-clip-text text-transparent"
        >
          {intern.title}
        </h1>
      </motion.header>

      <main className="max-w-5xl mx-auto px-6 mt-14 space-y-14">
        <section>
          <h2 className="text-2xl font-bold text-emerald-300">Program Overview</h2>
          <p className="mt-3 text-gray-300">{intern.description}</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-emerald-300">What You Will Learn</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            {intern.learnings.map((l, i) => (
              <li key={i}>• {l}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-emerald-300">Training Highlights</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            {intern.highlights.map((h, i) => (
              <li key={i}>• {h}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-emerald-300">Eligibility</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            {intern.eligibility.map((e, i) => (
              <li key={i}>• {e}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-emerald-300 mb-2">
            Paid Internship Registration
          </h3>

          <p className="text-sm text-gray-400 mb-8">
            This is a paid training program. Our team will contact shortlisted candidates.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Full Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="rounded-lg bg-[#020617] border border-white/15 px-4 py-3
                text-white placeholder-gray-500 focus:outline-none
                focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Email Address *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="rounded-lg bg-[#020617] border border-white/15 px-4 py-3
                text-white placeholder-gray-500 focus:outline-none
                focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-sm text-gray-300">Phone Number *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="rounded-lg bg-[#020617] border border-white/15 px-4 py-3
                text-white placeholder-gray-500 focus:outline-none
                focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </div>

            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-sm text-gray-300">Message (optional)</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your interest in this training"
                className="rounded-lg bg-[#020617] border border-white/15 px-4 py-3
                text-white placeholder-gray-500 resize-none focus:outline-none
                focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div
              className="md:col-span-2 flex flex-col items-center gap-3 mt-6
                sm:flex-row sm:items-center sm:justify-start"
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-[20rem] px-10 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold shadow-lg text-center"
              >
                Register Now
              </motion.button>

              <span className="text-xs text-gray-400 text-center sm:text-left">
                Limited seats • Paid training program
              </span>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
