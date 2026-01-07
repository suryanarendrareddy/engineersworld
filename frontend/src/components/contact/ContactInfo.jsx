import { motion } from 'framer-motion'
import { CONTACT_INFO } from '../../data/contact'

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {CONTACT_INFO.map((item, i) => {
        const Icon = item.icon

        return (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="p-7 rounded-3xl bg-white/5
            border border-white/10 backdrop-blur-xl
            shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          >
            <div className="flex gap-5">
              <div
                className="w-12 h-12 flex items-center justify-center
              rounded-xl bg-emerald-400/10 text-emerald-300 text-xl"
              >
                <Icon />
              </div>

              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.value}</p>

                {item.extraValue && (
                  <div className="mt-3">
                    <p className="font-semibold text-sm">{item.extraTitle}</p>
                    <p className="text-gray-400 text-sm">{item.extraValue}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
