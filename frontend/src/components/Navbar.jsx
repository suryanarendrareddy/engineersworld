import { useState, useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.style.background = '#020617'
    document.body.style.color = '#fff'
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navLinks = useMemo(
    () => [
      ['Home', '/'],
      ['Services', '/services'],
      ['Products', '/products'],
      ['About', '/about'],
      ['Team', '/team'],
      ['Contact', '/contact'],
      ['Careers', '/careers'],
    ],
    []
  )

  return (
    <>
      {/* MAIN NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="
          fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl h-16 px-6
          flex items-center justify-between rounded-2xl z-[1000]
          bg-[#030b17]/70 backdrop-blur-2xl border border-cyan-400/20
          shadow-[0_0_25px_rgba(0,255,255,0.25)]"
      >
        {/* LOGO */}
        <motion.div whileHover={{ scale: 1.07 }}>
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src="/logo-dark.png"
              alt="logo"
              className="w-10 h-10 rounded-full"
              whileHover={{ rotate: 2, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
            <span className="font-semibold tracking-wide text-cyan-200 text-sm sm:text-base">
              Engineers World
            </span>
          </Link>
        </motion.div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map(([label, path]) => {
            const active = location.pathname === path
            return (
              <motion.li key={label} whileHover={{ y: -2, scale: 1.08 }}>
                <Link
                  to={path}
                  className={`
                    px-4 py-2 rounded-lg text-sm transition-all duration-300
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

        {/* MOBILE ICON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-cyan-300 hover:scale-110 transition"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.nav>

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
              shadow-[0_0_25px_rgba(0,255,255,0.25)]
            "
          >
            <div className="flex flex-col gap-5">
              {navLinks.map(([label, path]) => (
                <motion.div key={label} whileTap={{ scale: 0.96 }}>
                  <Link
                    to={path}
                    className={`
                      block text-center text-lg tracking-wide px-4 py-3 rounded-xl
                      ${
                        location.pathname === path
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
    </>
  )
}
