import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 text-white bg-gradient-to-b from-[#05070a] via-[#040a11] to-[#020617] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-0 w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/20 blur-[140px] rounded-full" />

        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              x: [0, Math.sin(i) * 18],
              y: [0, Math.cos(i) * 18],
              scale: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4 + i * 0.12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 bg-cyan-400/70 rounded-full blur-[2px]"
            style={{
              top: `${(i * 9) % 100}%`,
              left: `${(i * 13) % 100}%`,
            }}
          />
        ))}
      </div>

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
                className={`text-2xl p-3 rounded-full bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110 ${s.hover}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <div className="h-[3px] w-16 bg-cyan-400 mt-2 rounded-full" />

          <ul className="mt-4 grid grid-cols-2 gap-y-3 text-gray-300 text-sm">
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
                  className="hover:text-cyan-400 transition-transform hover:translate-x-1 inline-block"
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
              <span className="text-cyan-300 font-medium">Office Address:</span>
              <br />
              Journalist Colony, Nampally, Rajanna Sircilla, Telangana - 505302
            </p>
            <p>
              <span className="text-cyan-300 font-medium">Registered Address:</span>
              <br />
              Venkampet Road, Rajanna Sircilla, Telangana - 505301
            </p>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto mt-12 border-t border-white/10" />

      <p className="relative text-center mt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Engineers World — Crafted with ❤️ & Cyber Excellence.
      </p>
    </footer>
  )
}
