import { memo } from 'react'
import { motion } from 'framer-motion'

export default memo(function AchievementCard({
  icon: Icon,
  title,
  description,
  delay,
  visible,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10"
    >
      <div className="flex items-center justify-center h-12 w-12 mx-auto rounded-xl bg-emerald-400/10 text-emerald-300 text-xl">
        <Icon />
      </div>
      <h4 className="mt-4 text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
    </motion.div>
  )
})
