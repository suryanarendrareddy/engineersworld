import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaShieldAlt,
  FaLaptopCode,
  FaMobile,
  FaServer,
  FaBrain,
  FaUserShield,
} from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaShieldAlt className="text-cyan-400 w-10 h-10" />,
      title: 'System Protection',
      description:
        'Advanced antivirus, firewall, and encryption systems to safeguard your infrastructure from modern threats.',
    },
    {
      icon: <FaLaptopCode className="text-purple-400 w-10 h-10" />,
      title: 'Website Development',
      description:
        'Modern, scalable, and visually stunning websites built with performance and user experience at the core.',
    },
    {
      icon: <FaMobile className="text-pink-400 w-10 h-10" />,
      title: 'Android App Development',
      description:
        'High-performance mobile applications customized to your business needs and workflow.',
    },
    {
      icon: <FaServer className="text-yellow-400 w-10 h-10" />,
      title: 'Penetration Testing',
      description:
        'Identify vulnerabilities with expert-grade testing and comprehensive security reports.',
    },
    {
      icon: <FaBrain className="text-emerald-400 w-10 h-10" />,
      title: 'Cyber Security Training',
      description:
        'Industry-level training programs for students and professionals to master cybersecurity fundamentals.',
    },
    {
      icon: <FaUserShield className="text-red-400 w-10 h-10" />,
      title: 'Threat Intelligence',
      description:
        'Real-time monitoring, attack pattern analysis, and proactive threat detection for businesses.',
    },
  ]

  const [hoverIndex, setHoverIndex] = useState(null)
  const [hoverEnabled, setHoverEnabled] = useState(false)

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setHoverEnabled(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-20">
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0f25] to-cyan-600/40" />
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.2, 0.7],
              x: [0, Math.sin(i) * 40],
              y: [0, Math.cos(i) * 40],
            }}
            transition={{
              duration: 3 + i * 0.15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 bg-cyan-400/80 rounded-full blur-[2px]"
            style={{
              top: `${(i * 8) % 100}%`,
              left: `${(i * 11) % 100}%`,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
            Our Services
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            End-to-End Cybersecurity & Development Solutions
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((srv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            animate={
              hoverIndex === i && hoverEnabled && !prefersReducedMotion
                ? { scale: 1.05, y: -6 }
                : { scale: 1, y: 0 }
            }
            className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl overflow-hidden relative"
          >
            <motion.div
              animate={
                hoverIndex === i && hoverEnabled && !prefersReducedMotion
                  ? { scale: 1.01 }
                  : { scale: 1 }
              }
              className="mb-6"
            >
              {srv.icon}
            </motion.div>

            <h3 className="text-xl font-bold text-white mb-2">{srv.title}</h3>
            <p className="text-gray-300 leading-relaxed">{srv.description}</p>

            <span className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
