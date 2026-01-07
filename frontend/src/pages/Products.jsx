import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaShieldAlt, FaChartLine, FaBell, FaLock } from 'react-icons/fa'

export default function Products() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'Real-time Protection',
      description: 'Blocks phishing pages instantly.',
    },
    {
      icon: <FaChartLine />,
      title: 'Threat Intelligence',
      description: 'Detects global phishing trends.',
    },
    {
      icon: <FaBell />,
      title: 'Instant Alerts',
      description: 'Immediate alerts for suspicious activity.',
    },
    {
      icon: <FaLock />,
      title: 'Data Security',
      description: 'Protects sensitive information.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <section className="relative h-[26rem] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#081020] to-cyan-700/40" />

        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.1, 0.8],
              x: [0, Math.sin(i) * 45],
              y: [0, Math.cos(i) * 45],
            }}
            transition={{
              duration: 3.5 + i * 0.15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 bg-cyan-400/80 rounded-full blur-[2px]"
            style={{ top: `${(i * 7) % 100}%`, left: `${(i * 13) % 100}%` }}
          />
        ))}

        <motion.h1
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,255,255,0.4)]"
        >
          PhishShield
        </motion.h1>

        <div className="relative z-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-white"
          >
            Advanced phishing detection & prevention powered by real-time threat
            intelligence.
          </motion.p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Protect Your Digital Assets
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed text-lg">
              PhishShield neutralizes phishing threats using real-time detection, behavior
              analysis and machine learning.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <FaShieldAlt className="text-cyan-300 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold">Real-time blocking</h4>
                  <p className="text-gray-400 text-sm">
                    Malicious pages blocked instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <FaChartLine className="text-cyan-300 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold">Actionable insights</h4>
                  <p className="text-gray-400 text-sm">
                    Threat patterns identified early.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_45px_rgba(0,255,200,0.15)]"
          >
            <video
              className="w-full h-full object-cover"
              src="/phising service.mp4"
              controls
            />
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent mb-10">
          Key Features
        </h3>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl"
            >
              <div className="text-cyan-300 text-4xl mb-4">{f.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{f.title}</h4>
              <p className="text-sm text-gray-400">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
