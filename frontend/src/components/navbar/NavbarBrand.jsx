import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NavbarBrand() {
  return (
    <motion.div whileHover={{ scale: 1.07 }}>
      <Link to="/" className="flex items-center gap-3">
        <motion.img
          src="/logo-dark.png"
          alt="logo"
          className="w-10 h-10 rounded-full"
          whileHover={{ rotate: 2, scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 200 }}
        />
        <span className="font-semibold tracking-wide text-cyan-200 text-sm md:text-xl">
          Engineers World
        </span>
      </Link>
    </motion.div>
  )
}
