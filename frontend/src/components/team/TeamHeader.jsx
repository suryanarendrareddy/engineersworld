import { motion } from 'framer-motion'

export default function TeamHeader() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold
        bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
      >
        Our Leadership & Team
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base"
      >
        A multidisciplinary team shaping secure, scalable, future-ready
        technology
      </motion.p>
    </>
  )
}
