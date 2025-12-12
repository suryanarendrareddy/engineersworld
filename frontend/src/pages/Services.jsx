import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaShieldAlt,
  FaLaptopCode,
  FaMobile,
  FaServer,
  FaBrain,
  FaUserShield,
  FaCheckCircle,
  FaBolt,
  FaChartLine,
  FaCubes,
} from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaShieldAlt className="text-cyan-400 w-10 h-10 md:w-12 md:h-12" />,
      title: 'System Protection',
      description:
        'Enterprise-grade security with firewall, encryption, real-time monitoring & zero-day protection.',
      points: [
        'Advanced Firewall Setup',
        'Multi-Layer Encryption',
        'Threat & Malware Protection',
        'Zero-Day Attack Defense',
      ],
    },
    {
      icon: <FaLaptopCode className="text-purple-400 w-10 h-10 md:w-12 md:h-12" />,
      title: 'Website Development',
      description:
        'Modern, responsive websites with high performance and user-focused design.',
      points: [
        'Custom UI/UX',
        'React Development',
        'Backend Integration',
        'SEO Optimization',
      ],
    },
    {
      icon: <FaMobile className="text-pink-400 w-10 h-10 md:w-12 md:h-12" />,
      title: 'Android App Development',
      description:
        'Scalable mobile applications with smooth animations & strong authentication.',
      points: [
        'Custom Android Apps',
        'API Integration',
        'High-Performance UI',
        'Secure Login Systems',
      ],
    },
    {
      icon: <FaServer className="text-yellow-400 w-10 h-10 md:w-12 md:h-12" />,
      title: 'Penetration Testing',
      description:
        'Full security auditing with OWASP tests & expert vulnerability reports.',
      points: [
        'OWASP Testing',
        'Vulnerability Scan',
        'Pentesting Reports',
        'Attack Simulation',
      ],
    },
    {
      icon: <FaBrain className="text-emerald-400 w-10 h-10 md:w-12 md:h-12" />,
      title: 'Cyber Security Training',
      description: 'Industry-level cybersecurity training with hands-on labs & projects.',
      points: [
        'Beginner to Advanced',
        'Hands-on Labs',
        'Attack Simulations',
        'Industry Curriculum',
      ],
    },
    {
      icon: <FaUserShield className="text-red-400 w-10 h-10 md:w-12 md:h-12" />,
      title: 'Threat Intelligence',
      description: 'AI-powered threat monitoring & attack prediction for businesses.',
      points: [
        'Threat Prediction',
        'Live Monitoring',
        'AI-Based Risk Analysis',
        'Incident Response',
      ],
    },
  ]

  const [hover, setHover] = useState(null)

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-20 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center text-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-cyan-600/40" />

        {/* Floating stars */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              x: [0, Math.sin(i) * 25],
              y: [0, Math.cos(i) * 25],
            }}
            transition={{
              duration: 3 + i * 0.1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400/70 rounded-full blur-[2px]"
            style={{
              top: `${(i * 7) % 100}%`,
              left: `${(i * 11) % 100}%`,
            }}
          />
        ))}

        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-gray-300 mt-3 text-base md:text-xl leading-relaxed">
            End-to-end cybersecurity, development & enterprise solutions.
          </p>
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent my-10 md:my-14" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((srv, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={hover === i ? { scale: 1.04, y: -4 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative w-full p-6 md:p-7 rounded-3xl bg-gradient-to-br from-[#050b18] to-[#0d1530] border border-white/10 shadow-xl"
          >
            {srv.icon}

            <h3 className="text-xl md:text-2xl font-bold mt-4">{srv.title}</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base">{srv.description}</p>

            <ul className="mt-4 space-y-2">
              {srv.points.map((pt, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-gray-300 text-sm md:text-base"
                >
                  <FaCheckCircle className="text-cyan-400 text-sm" /> {pt}
                </li>
              ))}
            </ul>

            {/* FIXED — NO OVERFLOW */}
            <span
              className="
                absolute
                bottom-0 right-0
                w-28 h-28 md:w-40 md:h-40
                bg-cyan-500/10 rounded-full
                blur-2xl md:blur-3xl
              "
            />
          </motion.div>
        ))}
      </div>

      {/* WORK PROCESS */}
      <section className="max-w-6xl mx-auto px-4 mt-20 md:mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-300">
          How We Work
        </h2>
        <p className="text-center text-gray-400 mt-2 text-sm md:text-base">
          A structured workflow to ensure consistent quality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10">
          {[
            {
              icon: <FaBolt className="text-2xl md:text-3xl" />,
              title: 'Planning',
              desc: 'Requirement analysis & goal setting.',
            },
            {
              icon: <FaCubes className="text-2xl md:text-3xl" />,
              title: 'Design',
              desc: 'Wireframe, UI/UX & architecture.',
            },
            {
              icon: <FaLaptopCode className="text-2xl md:text-3xl" />,
              title: 'Development',
              desc: 'Full-scale implementation.',
            },
            {
              icon: <FaChartLine className="text-2xl md:text-3xl" />,
              title: 'Delivery',
              desc: 'Testing, deployment & support.',
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: i * 0.12 }}
              className="bg-[#0b1120] p-6 rounded-2xl border border-white/10 text-center"
            >
              <div className="text-cyan-300">{step.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mt-3">{step.title}</h3>
              <p className="text-gray-400 mt-1 text-sm md:text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-4xl mx-auto px-4 mt-16 md:mt-20 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-cyan-600/20 to-blue-600/10 border border-cyan-400/30 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Have a Project in Mind?</h2>
        <p className="text-gray-300 mt-3 text-sm md:text-base">
          Let’s build something outstanding together.
        </p>

        <a
          href="/contact"
          className="inline-block mt-6 px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  )
}
