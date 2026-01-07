import { memo } from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

export default memo(function MemberCard({ member, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10
      rounded-3xl p-10 text-center hover:border-cyan-400/40 transition"
    >
      <motion.div
        whileHover={{ scale: 1.06 }}
        className="mx-auto w-48 h-48 rounded-full overflow-hidden
        border-4 border-cyan-300/40"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover scale-125"
          loading="lazy"
        />
      </motion.div>

      <h3 className="mt-6 text-2xl font-semibold text-cyan-300">
        {member.name}
      </h3>
      <p className="text-sm text-gray-400">{member.role}</p>

      <p className="mt-4 text-gray-300 text-sm max-w-sm mx-auto">
        {member.bio}
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {member.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full
            bg-cyan-400/10 border border-cyan-300/30 text-cyan-200 text-xs"
          >
            <FaStar className="text-[10px]" />
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
})
