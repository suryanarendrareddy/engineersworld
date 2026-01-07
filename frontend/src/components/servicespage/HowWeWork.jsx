import { motion } from 'framer-motion'
import { STEPS } from '../../data/services'

export default function HowWeWork() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-300">
        How We Work
      </h2>
      <p className="text-center text-gray-400 mt-2">
        A structured workflow to ensure consistent quality.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {STEPS.map((s, i) => {
          const Icon = s.icon

          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="bg-[#0b1120] p-6 rounded-2xl border border-white/10 text-center"
            >
              <div className="text-cyan-300 text-3xl mb-2">
                <Icon />
              </div>

              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{s.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
