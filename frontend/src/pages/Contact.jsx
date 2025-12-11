import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const loadingToast = toast.loading('Sending your message...')

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      )

      setStatus('success')
      toast.success('Message sent successfully 🎉', { id: loadingToast })

      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      toast.error('Message failed to send ❌', { id: loadingToast })
    }
  }

  const fade = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7 } },
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <motion.header
        variants={fade}
        initial="hidden"
        animate="show"
        className="relative overflow-hidden h-[32vh] sm:h-[40vh] md:h-[52vh]
        flex items-center justify-center text-center px-6
        bg-gradient-to-br from-black via-slate-900 to-cyan-700/40 mt-10"
      >
        {[...Array(32)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: [0.15, 0.8, 0.15],
              scale: [0.7, 1.1, 0.7],
              x: [0, Math.sin(i) * 40],
              y: [0, Math.cos(i) * 40],
            }}
            transition={{
              duration: 3 + i * 0.12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 bg-cyan-900/80 rounded-full blur-[2px]"
            style={{
              top: `${(i * 10) % 100}%`,
              left: `${(i * 13) % 100}%`,
            }}
          />
        ))}

        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-extrabold
            bg-gradient-to-r from-emerald-300 to-cyan-300
            bg-clip-text text-transparent"
          >
            Contact Us
          </motion.h1>

          <p className="mt-4 text-gray-300 text-sm sm:text-base px-3">
            We reply quickly and love working with new clients & ideas.
          </p>
        </div>
      </motion.header>

      {/* MAIN CONTENT */}
      <main
        className="max-w-6xl mx-auto px-4 sm:px-6 py-16
      grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10"
      >
        {/* LEFT CONTACT INFO */}
        <div className="space-y-6">
          {[
            { icon: <FaPhone />, title: 'Phone', value: '+91 79977 00218' },
            { icon: <FaEnvelope />, title: 'Email', value: 'info@engineersworld.in' },
            {
              icon: <FaMapMarkerAlt />,
              title: 'Office Address',
              value: 'Journalist Colony, Nampally, Telangana, 505302',
              title2: 'Registered Address',
              value2: 'Venkampet Road, Sircilla, Telangana, 505301',
            },
          ].map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="w-full p-4 sm:p-6 bg-white/5 backdrop-blur-xl
              rounded-xl border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="text-emerald-300 text-2xl">{info.icon}</div>

                <div>
                  <h3 className="font-bold">{info.title}</h3>
                  <p className="text-gray-400 text-sm">{info.value}</p>

                  {info.value2 && (
                    <div className="mt-3">
                      <p className="font-bold">{info.title2}</p>
                      <p className="text-gray-400 text-sm">{info.value2}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CONTACT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-white/5 backdrop-blur-xl
          p-6 sm:p-8 rounded-xl border border-white/10 w-full"
        >
          <h2 className="text-2xl font-semibold text-emerald-300 mb-6">Send a Message</h2>

          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-4">
            {['name', 'email'].map((field) => (
              <div key={field}>
                <label className="text-xs text-gray-300">{field.toUpperCase()}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 w-full max-w-full px-4 py-3 rounded-lg
                  bg-white/10 border border-white/10
                  focus:border-emerald-400 outline-none transition"
                />
              </div>
            ))}
          </div>

          {/* SUBJECT */}
          <div className="mt-4">
            <label className="text-xs text-gray-300">SUBJECT</label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 w-full max-w-full px-4 py-3 rounded-lg
              bg-white/10 border border-white/10
              focus:border-emerald-400 outline-none transition"
            />
          </div>

          {/* MESSAGE */}
          <div className="mt-4">
            <label className="text-xs text-gray-300">MESSAGE</label>
            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full max-w-full px-4 py-3 rounded-lg
              bg-white/10 border border-white/10
              focus:border-emerald-400 outline-none transition resize-none"
            />
          </div>

          {/* BUTTON */}
          <div className="mt-6 flex items-center gap-4">
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-emerald-400 text-black rounded-full font-semibold
              disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </div>
        </motion.form>
      </main>
    </div>
  )
}
