import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  // disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-brand">
        <Link to="/" className="logo-container">
          <img
            src={isDarkMode ? '/logo-dark.png' : '/logos.png'}
            alt="Engineers World"
            className="logo"
          />
          <span className="brand-name">Engineers World</span>
        </Link>
      </div>

      <div className="nav-controls">
        {/* Theme Toggle */}
        <motion.div
          className="theme-toggle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </motion.div>

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop + Mobile Links */}
        <motion.ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={() => setIsOpen(false)}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/careers" onClick={() => setIsOpen(false)}>
              Careers
            </Link>
          </li>
        </motion.ul>
      </div>

      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  )
}

export default Navbar
