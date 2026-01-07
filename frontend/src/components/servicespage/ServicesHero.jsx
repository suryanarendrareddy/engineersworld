import { motion } from 'framer-motion'

export default function ServicesHero() {
  return (
    <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center text-center overflow-hidden px-4 w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-cyan-600/40" />

      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            x: [0, Math.sin(i) * 15],
            y: [0, Math.cos(i) * 15],
          }}
          transition={{
            duration: 2.5 + i * 0.1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-2 h-2 bg-cyan-400/70 rounded-full blur-[2px]"
          style={{
            top: `${(i * 7) % 100}%`,
            left: `${(i * 9) % 100}%`,
          }}
        />
      ))}

      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-gray-300 mt-3 text-base md:text-xl">
          End-to-end cybersecurity, development & enterprise solutions.
        </p>
      </div>
    </section>
  )
}
