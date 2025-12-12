import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10 text-white
      bg-gradient-to-b from-[#0b1220] via-[#0a1a2f] to-[#020617]"
    >

      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-10 left-0 w-[320px] h-[320px] bg-cyan-500/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-purple-600/20 blur-[150px] rounded-full" />
      </div>
      {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.2, 0.7],
              x: [0, Math.sin(i) * 40],
              y: [0, Math.cos(i) * 40],
            }}
            transition={{
              duration: 3 + i * 0.15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 bg-gray-900/80 rounded-full blur-[2px]"
            style={{
              top: `${(i * 8) % 100}%`,
              left: `${(i * 11) % 100}%`,
            }}
          />
        ))}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6">

        <div className="p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold">Connect With Us</h3>
          <div className="h-[3px] w-16 bg-cyan-400 mt-2 rounded-full" />

          <p className="text-gray-400 text-sm mt-3">
            Follow us for insights, updates and announcements.
          </p>

          <div className="flex gap-4 mt-5">
            {[
              {
                icon: <FaLinkedin />,
                link: 'https://www.linkedin.com/company/engineer-s-world/',
                hover: 'hover:text-cyan-400',
              },
              {
                icon: <FaInstagram />,
                link: 'https://www.instagram.com/engineer_s__world/',
                hover: 'hover:text-pink-400',
              },
              {
                icon: <FaYoutube />,
                link: 'https://youtube.com/@engineersworld-ew',
                hover: 'hover:text-red-500',
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl p-3 rounded-full bg-white/10 border border-white/10
                backdrop-blur-md transition-all duration-300 hover:scale-110 ${s.hover}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <div className="h-[3px] w-16 bg-cyan-400 mt-2 rounded-full" />

          <ul className="space-y-3 mt-4 text-gray-300 grid grid-cols-2">
            {[
              ['Careers', '/careers'],
              ['Contact Us', '/contact'],
              ['About Us', '/about'],
              ['Our Team', '/team'],
              ['Services', '/services'],
              ['Products', '/products'],
            ].map(([label, path]) => (
              <li key={label}>
                <Link
                  to={path}
                  className="hover:text-cyan-400 hover:translate-x-1 inline-block transition-all duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold">Company</h3>
          <div className="h-[3px] w-16 bg-cyan-400 mt-2 rounded-full" />

          <ul className="mt-4 space-y-3 text-gray-300 text-sm">
            <li>Engineers World — Cybersecurity & IT Solutions</li>
            <li>Trusted by 1000+ clients</li>
            <li>Recognized by Startup India</li>
            <li>Internships & Training Programs</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <div className="h-[3px] w-16 bg-cyan-400 mt-2 rounded-full" />

          <div className="mt-4 space-y-3 text-gray-300 text-sm">
            <p>
              <span className="text-cyan-300 font-medium">Email:</span>{' '}
              <a href="mailto:info@engineersworld.in" className="hover:underline">
                info@engineersworld.in
              </a>
            </p>

            <p>
              <span className="text-cyan-300 font-medium">Phone:</span>{' '}
              <a href="tel:+917997700218" className="hover:underline">
                +91 7997700218
              </a>
            </p>

            <p>
              <span className="text-cyan-300 font-medium">Office:</span>
              <br />
              Journalist Colony, Nampally, Telangana
            </p>

            <p>
              <span className="text-cyan-300 font-medium">Registered Address:</span>
              <br />
              Venkampet Road, Sircilla, Telangana
            </p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="relative max-w-7xl mx-auto mt-12 border-t border-white/10"></div>

      {/* COPYRIGHT */}
      <p className="relative text-center mt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Engineers World — Crafted with ❤️ & Cyber Excellence.
      </p>
    </footer>
  )
}
