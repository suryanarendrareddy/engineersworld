import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import NavbarBrand from './NavbarBrand'
import NavbarLinks from './NavbarLinks'
import MobileMenu from './MobileMenu'
import { useNavbar } from './useNavbar'

export default function Navbar() {
  const { isOpen, setIsOpen, pathname } = useNavbar()

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6 }}
        className="
          fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl h-16 px-6
          flex items-center justify-between rounded-2xl z-[1000]
          bg-[#030b17]/70 backdrop-blur-2xl border border-cyan-400/20
        "
      >
        <NavbarBrand />
        <NavbarLinks pathname={pathname} />

        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden text-2xl text-cyan-300"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.nav>

      <MobileMenu isOpen={isOpen} pathname={pathname} />
    </>
  )
}
