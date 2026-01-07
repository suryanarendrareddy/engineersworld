import { motion } from 'framer-motion'

export const JobHeader = ({ title }) => (
  <motion.header
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    className="h-[45vh] flex items-center justify-center text-center bg-gradient-to-br from-black via-slate-900 to-cyan-700/40 px-6"
  >
    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent uppercase tracking-tight">
      {title}
    </h1>
  </motion.header>
)
