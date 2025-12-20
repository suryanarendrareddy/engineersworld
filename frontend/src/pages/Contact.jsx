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
    mobile: '',
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

    await new Promise((r) => setTimeout(r, 300))

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      )

      toast.success(data.message || 'Message sent successfully 🎉', {
        id: toastId,
      })

      setFormData({
        name: '',
        email: '',
        mobile: '',
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
      {/* HERO */}
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[42vh] flex items-center justify-center text-center
        bg-gradient-to-br from-black via-slate-900 to-cyan-900/30 px-6"
      >
        <div className="max-w-2xl">
          <h1
            className="text-4xl md:text-5xl font-extrabold
            bg-gradient-to-r from-emerald-300 to-cyan-300
            bg-clip-text text-transparent"
          >
            Contact Us
          </h1>
          <p className="mt-4 text-gray-400 text-base md:text-lg">
            Have a question or project in mind? Share your details and our team will get
            back to you within 24 hours.
          </p>
        </div>
      </motion.header>

      {/* CONTENT */}
      <main
        className="max-w-7xl mx-auto px-4 py-24
        grid grid-cols-1 lg:grid-cols-3 gap-16"
      >
        {/* CONTACT INFO */}
        <div className="space-y-8">
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
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="p-7 rounded-3xl bg-white/5
              border border-white/10 backdrop-blur-xl
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="flex gap-5">
                <div
                  className="w-12 h-12 flex items-center justify-center
                  rounded-xl bg-emerald-400/10 text-emerald-300 text-xl"
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.value}</p>
                  {item.value2 && (
                    <div className="mt-3">
                      <p className="font-semibold text-sm">{item.title2}</p>
                      <p className="text-gray-400 text-sm">{item.value2}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2
          bg-gradient-to-br from-white/10 via-white/5 to-white/10
          backdrop-blur-xl p-6 md:p-12 rounded-2xl
          border border-white/15
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-300">
            Send Us a Message
          </h2>
          <p className="text-gray-400 mt-2 mb-10 text-sm md:text-base">
            Please fill out the form below and our team will contact you shortly.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* NAME */}
            <div>
              <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={3}
                placeholder="Enter your full name"
                className="w-full px-5 py-3 rounded-lg bg-black/40
                border border-white/15 text-white
                focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400
                autofill:bg-black/40 autofill:text-white
                autofill:shadow-[0_0_0px_1000px_rgba(0,0,0,0.4)_inset] autofill:caret-white"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full px-5 py-3 rounded-lg bg-black/40
                border border-white/15 text-white
                focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400
                autofill:bg-black/40 autofill:text-white
                autofill:shadow-[0_0_0px_1000px_rgba(0,0,0,0.4)_inset] autofill:caret-white"
              />
            </div>
          </div>

          {/* PHONE */}
          <div className="mt-8">
            <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div
              className="flex items-center rounded-lg bg-black/40
              border border-white/15 p-2
              focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400"
            >
              <PhoneInput
                defaultCountry="in"
                value={formData.mobile}
                onChange={(v) => setFormData((p) => ({ ...p, mobile: v || '' }))}
                inputStyle={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  width: '100%',
                  padding: '14px 16px',
                }}
                countrySelectorStyleProps={{
                  buttonStyle: {
                    background: 'transparent',
                    border: 'none',
                    color: '#d1d5db',
                    paddingLeft: '12px',
                    paddingRight: '10px',
                  },
                }}
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Please include the country code (e.g. +91)
            </p>
          </div>

          {/* SUBJECT */}
          <div className="mt-8">
            <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2">
              Subject <span className="text-gray-500">(optional)</span>
            </label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
              className="w-full px-5 py-3 rounded-lg bg-black/40
              border border-white/15 text-white
              focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          {/* MESSAGE */}
          <div className="mt-8">
            <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full px-5 py-4 rounded-lg bg-black/40
              border border-white/15 text-white resize-none
              focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          {/* SUBMIT */}
          <div className="mt-14 flex flex-col gap-5">
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={status !== 'sending' ? { scale: 1.05 } : {}}
              whileTap={status !== 'sending' ? { scale: 0.96 } : {}}
              className="w-full py-3 rounded-full text-lg font-semibold
              bg-gradient-to-r from-emerald-400 to-cyan-400
              text-black shadow-2xl disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending…' : 'Submit Message'}
            </motion.button>

            <p className="text-xs text-gray-400 text-center">
              Your information is kept confidential and will never be shared.
            </p>
          </div>
        </motion.form>
      </main>
    </div>
  )
}
