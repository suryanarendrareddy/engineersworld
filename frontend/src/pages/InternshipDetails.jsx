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
        'HTML, CSS, JavaScript fundamentals',
        'React & Tailwind CSS for frontend development',
        'Node.js & Express.js for backend development',
        'MongoDB & REST API integration',
        'Authentication, authorization & middleware',
        'Git & GitHub collaborative workflows',
      ],
      highlights: [
        'Hands-on real-world projects',
        'Industry-level coding practices',
        'Mentor guidance & code reviews',
        'Deployment & production basics',
        'Internship completion certificate',
      ],
      eligibility: [
        'Basic HTML, CSS, JavaScript knowledge',
        'Strong interest in full-stack development',
        'Willingness to learn and practice daily',
      ],
    },

    {
      slug: 'cybersecurity-intern',
      title: 'Cybersecurity Intern (Paid Internship)',
      description:
        'Hands-on cybersecurity internship covering real-world security tools, concepts, and guided practical labs to understand and defend against modern cyber threats.',
      learnings: [
        'Cybersecurity fundamentals & threat models',
        'Networking basics (TCP/IP, DNS, HTTP/HTTPS)',
        'Linux fundamentals for security',
        'Vulnerability assessment techniques',
        'Introduction to penetration testing',
        'Security tools and incident response basics',
      ],
      highlights: [
        'Practical security labs',
        'Real-world attack & defense scenarios',
        'Mentor-led guidance',
        'Industry exposure to security practices',
        'Completion certificate',
      ],
      eligibility: [
        'Basic networking knowledge',
        'Linux fundamentals',
        'Interest in cybersecurity & ethical hacking',
      ],
    },

    {
      slug: 'dsa-java-intern',
      title: 'Data Structures & Algorithms (Java) Intern (Paid Internship)',
      description:
        'A focused internship program designed to build strong problem-solving skills using Data Structures and Algorithms with Java, preparing candidates for technical interviews and real-world software development.',
      learnings: [
        'Java programming fundamentals',
        'Time & space complexity analysis',
        'Arrays, Strings, Recursion',
        'Linked Lists, Stacks, Queues',
        'Trees, Binary Search Trees, Heaps',
        'Graphs & Graph traversal algorithms',
        'Sorting & searching algorithms',
        'Problem-solving and coding interview patterns',
      ],
      highlights: [
        'Daily DSA problem-solving practice',
        'Interview-oriented approach',
        'Mentor explanations for each concept',
        'Optimized coding techniques',
        'Internship completion certificate',
      ],
      eligibility: [
        'Basic Java knowledge',
        'Interest in problem-solving',
        'Students preparing for placements or interviews',
      ],
    },

    {
      slug: 'cloud-computing-intern',
      title: 'Cloud Computing Intern (Paid Internship)',
      description:
        'A practical cloud computing internship focused on understanding cloud concepts, services, and deployment models used by modern organizations.',
      learnings: [
        'Cloud computing fundamentals',
        'Cloud service models (IaaS, PaaS, SaaS)',
        'Virtual machines & storage concepts',
        'Cloud networking basics',
        'Introduction to AWS / Azure / GCP services',
        'Deployment and scalability basics',
        'Cloud security fundamentals',
      ],
      highlights: [
        'Hands-on cloud labs',
        'Real-world deployment scenarios',
        'Understanding cloud infrastructure',
        'Mentor-led sessions',
        'Internship completion certificate',
      ],
      eligibility: [
        'Basic computer networking knowledge',
        'Interest in cloud technologies',
        'Willingness to learn infrastructure concepts',
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

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error('Please fill all required fields')
      return
    }

    setIsSubmitting(true)
    const toastId = toast.loading('Submitting application...')

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/internships/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          internshipTitle: intern.title,
          internshipSlug: intern.slug,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.replace(/\s+/g, ''),
          message: form.message.trim(),
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Request failed')

      toast.success(data.message || 'Application submitted successfully!', {
        id: toastId,
      })

      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      toast.error(err.message || 'Server error', { id: toastId })
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
      
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          h-[45vh] md:h-[45vh]
          flex items-center justify-center text-center
          bg-gradient-to-br from-black via-slate-900 to-cyan-700/40
          px-4
        "
      >
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
          {intern.title}
        </h1>
      </motion.header>

      <main className="max-w-5xl mx-auto px-4 md:px-6 mt-10 md:mt-16 space-y-12 md:space-y-16">
        <InfoSection title="Program Overview" content={intern.description} />
        <ListSection title="What You Will Learn" items={intern.learnings} />
        <ListSection title="Training Highlights" items={intern.highlights} />
        <ListSection title="Eligibility" items={intern.eligibility} />

        {/* FORM */}
        <section
          className="
            bg-gradient-to-br from-white/10 via-white/5 to-white/10
            backdrop-blur-xl p-6 md:p-10 rounded-3xl
            border border-white/15 shadow-2xl
          "
        >
          <h3 className="text-2xl font-bold text-emerald-300">Internship Registration</h3>

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
              className={`
                w-full py-4 rounded-full text-lg font-semibold shadow-xl
                ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-black'
                }
              `}
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


function FloatingInput({ label, name, type = 'text', value, onChange, required }) {
  const inputId = `input-${name}`

  return (
    <div className="relative">
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="
          peer w-full px-4 pt-5 pb-2 rounded-lg
          bg-black/40 text-white
          border border-white/15
          focus:outline-none focus:border-emerald-400
          focus:ring-1 focus:ring-emerald-400
        "
      />

      <label
        htmlFor={inputId}
        className="
          absolute left-4 top-3 text-sm text-gray-400
          transition-all duration-200
          bg-[#020617] px-1
          peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-300
          peer-not-placeholder-shown:-top-2
          peer-not-placeholder-shown:text-xs
          peer-not-placeholder-shown:text-emerald-300
        "
      >
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
    </div>
  )
}

function FloatingTextarea({ label, name, value, onChange, required }) {
  const inputId = `input-${name}`

  return (
    <div className="relative">
      <textarea
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows="4"
        placeholder=" "
        className="
          peer w-full px-4 pt-6 pb-2 rounded-xl
          bg-[#020617]/80 text-white resize-none
          border border-white/20
          focus:outline-none focus:border-cyan-400
          focus:ring-1 focus:ring-cyan-400
        "
      />

      <label
        htmlFor={inputId}
        className="
          absolute left-4 top-4 text-sm text-gray-400
          transition-all duration-200
          bg-[#020617] px-1
          peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400
          peer-not-placeholder-shown:-top-2
          peer-not-placeholder-shown:text-xs
          peer-not-placeholder-shown:text-cyan-400
        "
      >
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
    </div>
  )
}






