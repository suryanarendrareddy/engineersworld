import { motion } from 'framer-motion'
import { SECURITY_FEATURES } from '../../data/home'

export default function HomeSecurity({ animate }) {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={animate ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            How to Secure from Cyber Attacks
          </h2>

          <div className="mt-6 space-y-4">
            {SECURITY_FEATURES.map((f) => (
              <div
                key={f.title}
                className="p-5 bg-white/5 border border-white/10 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-cyan-300">
                  {f.title}
                </h3>
                <p className="text-gray-300 mt-1 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={animate ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-xl bg-white/5 border border-white/10 p-6"
        >
          <img
            src="/PhishShield.png"
            alt="Security Illustration"
            className="w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}
