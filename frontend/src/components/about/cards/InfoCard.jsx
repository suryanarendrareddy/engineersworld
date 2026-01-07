import { memo } from 'react'
import { motion } from 'framer-motion'

export default memo(function InfoCard({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-md"
    >
      <h3 className="text-xl font-semibold text-emerald-300 mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </motion.div>
  )
})
