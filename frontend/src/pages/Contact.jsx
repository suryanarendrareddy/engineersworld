import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'sonner'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    const toastId = toast.loading('Sending your message...')

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData, {
        headers: { 'Content-Type': 'application/json' },
      })

      toast.success(data.message || 'Message sent successfully 🎉', {
        id: toastId,
      })

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setStatus('success')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Message failed ❌ Try again later', {
        id: toastId,
      })
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[38vh] flex items-center justify-center text-center bg-gradient-to-br from-black via-slate-900 to-cyan-800/30 px-6"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Tell us about your requirements and we’ll get back to you shortly.
          </p>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="space-y-5">
          {[
            { icon: <FaPhone />, title: 'Phone', value: '+91 79977 00218' },
            { icon: <FaEnvelope />, title: 'Email', value: 'info@engineersworld.in' },
            {
              icon: <FaMapMarkerAlt />,
              title: 'Office Address',
              value: 'Journalist Colony, Nampally, Telangana - 505302',
              title2: 'Registered Address',
              value2: 'Venkampet Road, Sircilla, Telangana - 505301',
            },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex gap-4">
                <div className="text-emerald-300 text-xl">{item.icon}</div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.value}</p>
                  {item.value2 && (
                    <div className="mt-2">
                      <p className="font-medium">{item.title2}</p>
                      <p className="text-gray-400 text-sm">{item.value2}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-white/5 p-8 sm:p-10 rounded-2xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-emerald-300">Send a Message</h2>
          <p className="text-gray-400 text-sm mt-1 mb-8">
            Fill the form below and our team will contact you shortly.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none"
            />
          </div>

          <div className="mt-5">
            <div className="p-2 text-xl rounded-lg bg-black/40 border border-white/10 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400">
              <PhoneInput
                defaultCountry="in"
                value={formData.phone}
                onChange={(value) => setFormData({ ...formData, phone: value || '' })}
                inputClassName="!bg-transparent !text-white !outline-none !border-none px-4 py-3 w-full"
                countrySelectorStyleProps={{
                  buttonClassName: '!bg-transparent !border-none !text-white px-3',
                }}
              />
            </div>
          </div>

          <div className="mt-5">
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject (optional)"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none"
            />
          </div>

          <div className="mt-5">
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 resize-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none"
            />
          </div>

          <div className="mt-8 flex items-center gap-4 flex-col">
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full px-10 py-3 bg-gradient-to-br from-emerald-300 to-cyan-500 text-black rounded-full font-semibold disabled:opacity-50 text-[16px]"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </motion.button>
            <span className="text-xs text-gray-400">We respect your privacy.</span>
          </div>
        </motion.form>
      </main>
    </div>
  )
}
