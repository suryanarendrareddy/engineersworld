import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../../data/navLinks'

export default function MobileMenu({ isOpen, pathname }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ type: 'spring', stiffness: 120, damping: 15 }}
          className="
            fixed top-20 left-1/2 -translate-x-1/2 w-[92%] max-w-md
            bg-[#030b17]/95 backdrop-blur-2xl border border-cyan-400/20
            rounded-2xl p-8 z-[999]
          "
        >
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map(([label, path]) => (
              <motion.div key={label} whileTap={{ scale: 0.96 }}>
                <Link
                  to={path}
                  className={`
                    block text-center text-lg px-4 py-3 rounded-xl
                    ${
                      pathname === path
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                        : 'text-gray-300 hover:text-cyan-300 hover:bg-white/5'
                    }
                  `}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
