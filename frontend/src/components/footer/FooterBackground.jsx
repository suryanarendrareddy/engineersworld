import { motion } from 'framer-motion'

export default function FooterBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-24 left-0 w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/20 blur-[140px] rounded-full" />

      {[...Array(30)].map((_, i) => (
        <motion.span
          key={i}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            transform: `translate(${Math.sin(i) * 16}px, ${
              Math.cos(i) * 16
            }px)`,
          }}
          transition={{
            duration: 5 + i * 0.1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-2 h-2 bg-cyan-400/70 rounded-full blur-[2px]"
          style={{
            top: `${(i * 11) % 100}%`,
            left: `${(i * 17) % 100}%`,
          }}
        />
      ))}
    </div>
  )
}
