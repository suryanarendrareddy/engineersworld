import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '../../data/navLinks'

export default function NavbarLinks({ pathname }) {
  return (
    <ul className="hidden md:flex items-center gap-5">
      {NAV_LINKS.map(([label, path]) => {
        const active = pathname === path

        return (
          <motion.li key={label} whileHover={{ y: -2, scale: 1.08 }}>
            <Link
              to={path}
              className={`
                px-4 py-2 rounded-lg text-md transition-all
                ${
                  active
                    ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,255,255,0.45)]'
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-white/5'
                }
              `}
            >
              {label}
            </Link>
          </motion.li>
        )
      })}
    </ul>
  )
}
