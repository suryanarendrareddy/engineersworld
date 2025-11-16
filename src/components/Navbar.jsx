import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }, [isOpen])

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-brand">
        <Link to="/" className="logo-container">
          <img
            src={isDarkMode ? '/logo-dark.png' : '/logos.png'}
            alt="Engineers World Logo"
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

        {/* Mobile menu toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation drawer */}
        <motion.ul
          className={`nav-links ${isOpen ? 'active' : ''}`}
          initial={false}
        >
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={toggleMenu}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/careers" onClick={toggleMenu}>
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
