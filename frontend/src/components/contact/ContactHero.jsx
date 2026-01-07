import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
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
          Have a question or project in mind? Share your details and our team
          will get back to you within 24 hours.
        </p>
      </div>
    </motion.header>
  )
}
