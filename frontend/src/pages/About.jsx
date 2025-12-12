import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaUsers, FaRocket, FaChartLine } from 'react-icons/fa'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  const achievements = [
    {
      icon: <FaTrophy />,
      title: 'Excellence Award 2023',
      description: 'Best Cybersecurity Solution',
    },
    {
      icon: <FaUsers />,
      title: '1000+ Clients',
      description: 'Trusted by businesses worldwide',
    },
    {
      icon: <FaRocket />,
      title: '#StartupIndia',
      description: 'Recognized By Startup India',
    },
    {
      icon: <FaChartLine />,
      title: '95% Success Rate',
      description: 'In threat prevention',
    },
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <motion.header
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[38vh] md:h-[48vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#071426] to-[#020617]" />

        <div className="absolute w-[300px] h-[200px] bg-cyan-400/30 blur-[120px] rounded-full"></div>
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.1, 0.8],
              x: [0, Math.sin(i) * 45],
              y: [0, Math.cos(i) * 45],
            }}
            transition={{
              duration: 3.5 + i * 0.15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 bg-cyan-400/80 rounded-full blur-[2px]"
            style={{ top: `${(i * 7) % 100}%`, left: `${(i * 13) % 100}%` }}
          />
        ))}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400  bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.35)]"
        >
          About Engineers World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative mt-3 text-sm md:text-lg text-gray-300"
        >
          Leading Innovation in Technology
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="relative mt-2 text-emerald-200 text-xs md:text-sm tracking-wide"
        >
          Recognized By #StartupIndia
        </motion.p>
      </motion.header>

      <main className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-14">
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-300">Who We Are</h2>
          <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Engineers World, led by Mr Akshay Kumar, excels in creating user-friendly
            websites and innovative cybersecurity solutions. Our flagship product
            PhishShield uses advanced machine learning to protect against phishing
            attacks. We also offer internships and online learning to empower future tech
            leaders.
          </p>
        </motion.section>

        <div className="grid gap-6 md:grid-cols-2 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-emerald-300 mb-3">Our Mission</h3>
            <p className="text-gray-200 text-sm">
              To provide cutting-edge technological solutions while fostering education
              and innovation in the tech community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-emerald-300 mb-3">Our Vision</h3>
            <p className="text-gray-200 text-sm">
              To be the global leader in cybersecurity and technological innovation,
              creating a safer digital world for everyone.
            </p>
          </motion.div>
        </div>

        <section ref={ref} className="mb-16">
          <h2 className="text-2xl md:text-3xl text-center font-bold text-emerald-300 mb-8">
            Our Achievements
          </h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 transition"
              >
                <div className="flex items-center justify-center h-12 w-12 mx-auto rounded-lg bg-emerald-400/10 text-emerald-300 text-xl">
                  {item.icon}
                </div>

                <h4 className="mt-3 text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl text-emerald-300 font-bold text-center mb-8">
            Why Choose Us
          </h2>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">Expertise</h4>
              <p className="text-sm text-gray-300">
                Industry-leading professionals with years of experience
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">Innovation</h4>
              <p className="text-sm text-gray-300">
                Cutting-edge solutions using latest technologies
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">Support</h4>
              <p className="text-sm text-gray-300">24/7 dedicated customer support</p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
