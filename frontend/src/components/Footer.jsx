import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const socials = [
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
]

const quickLinks = [
  ['Careers', '/careers'],
  ['Contact Us', '/contact'],
  ['About Us', '/about'],
  ['Our Team', '/team'],
  ['Services', '/services'],
  ['Products', '/products'],
]

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 bg-gradient-to-b from-[#05070a] via-[#040a11] to-[#020617] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-0 w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/20 blur-[140px] rounded-full" />

        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              transform: `translate(${Math.sin(i) * 16}px, ${Math.cos(i) * 16}px)`,
            }}
            transition={{
              duration: 5 + i * 0.1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 bg-cyan-400/70 rounded-full blur-[2px]"
            style={{
              top: `${(i * 11) % 100}%`,
              left: `${(i * 17) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        <section className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h3 className="text-xl font-semibold">Connect With Us</h3>
          <div className="w-16 h-[3px] bg-cyan-400 rounded-full mt-2" />
          <p className="mt-3 text-sm text-gray-400">
            Follow us for updates, insights and announcements.
          </p>

          <div className="flex gap-4 mt-5">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="social link"
                className={`p-3 text-2xl rounded-full bg-white/10 border border-white/10 transition-all hover:scale-110 ${s.hover}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <div className="w-16 h-[3px] bg-cyan-400 rounded-full mt-2" />

          <ul className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-gray-300">
            {quickLinks.map(([label, path]) => (
              <li key={label}>
                <Link
                  to={path}
                  className="inline-block transition hover:text-cyan-400 hover:translate-x-1"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h3 className="text-xl font-semibold">Company</h3>
          <div className="w-16 h-[3px] bg-cyan-400 rounded-full mt-2" />

          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li>Engineers World — Cybersecurity & IT Solutions</li>
            <li>Trusted by 1000+ clients</li>
            <li>Recognized by Startup India</li>
            <li>Internships & Training Programs</li>
          </ul>
        </section>

        <section className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <div className="w-16 h-[3px] bg-cyan-400 rounded-full mt-2" />

          <div className="mt-4 space-y-3 text-sm text-gray-300">
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
        </section>
      </div>

      <div className="relative max-w-7xl mx-auto mt-12 border-t border-white/10" />

      <p className="relative mt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Engineers World — Crafted with ❤️ & Cyber Excellence.
      </p>
    </footer>
  )
}
