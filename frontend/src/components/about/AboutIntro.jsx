import { motion } from 'framer-motion'

export default function AboutIntro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-300">
        Who We Are
      </h2>

      <p className="mt-5 text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
        Engineers World, led by Mr Akshay Kumar, delivers high-quality software,
        cybersecurity products and industry-aligned training programs. Our
        flagship solution, PhishShield, leverages intelligent threat analysis to
        protect users from phishing attacks while our learning initiatives
        empower the next generation of technology professionals.
      </p>
    </motion.section>
  )
}
