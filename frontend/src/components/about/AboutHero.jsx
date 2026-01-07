import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="relative h-[40vh] md:h-[50vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#071426] to-[#020617]" />
      <span className="absolute w-[320px] h-[220px] bg-cyan-400/25 blur-[140px] rounded-full" />

      {[...Array(36)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.25, 0.8, 0.25],
            x: [0, Math.sin(i) * 40],
            y: [0, Math.cos(i) * 40],
          }}
          transition={{
            duration: 3 + i * 0.14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-2 h-2 bg-cyan-400/80 rounded-full blur-[2px]"
          style={{
            top: `${(i * 7) % 100}%`,
            left: `${(i * 11) % 100}%`,
          }}
        />
      ))}

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative text-4xl md:text-6xl font-extrabold
        bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400
        bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,255,255,0.4)]"
      >
        About Engineers World
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="relative mt-4 text-gray-300 text-sm md:text-lg max-w-2xl"
      >
        Building secure, scalable and future-ready technology solutions
      </motion.p>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="relative mt-2 text-emerald-300 text-xs md:text-sm tracking-wide"
      >
        Recognized by #StartupIndia
      </motion.span>
    </motion.header>
  )
}
