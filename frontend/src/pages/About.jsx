import { memo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaUsers, FaRocket, FaChartLine } from 'react-icons/fa'

const ACHIEVEMENTS = [
  {
    icon: <FaTrophy />,
    title: 'Excellence Award 2023',
    description: 'Recognized for outstanding cybersecurity innovation',
  },
  {
    icon: <FaUsers />,
    title: '1000+ Clients',
    description: 'Trusted by startups and enterprises globally',
  },
  {
    icon: <FaRocket />,
    title: '#StartupIndia',
    description: 'Officially recognized by Startup India',
  },
  {
    icon: <FaChartLine />,
    title: '95% Success Rate',
    description: 'Proven effectiveness in threat prevention',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative h-[40vh] md:h-[50vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#071426] to-[#020617]" />
        <span className="absolute w-[320px] h-[220px] bg-cyan-400/25 blur-[140px] rounded-full" />

        {[...Array(36)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.25, 0.8, 0.25],
              x: [0, Math.sin(i) * 40],
              y: [0, Math.cos(i) * 40],
            }}
            transition={{
              duration: 3 + i * 0.14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 bg-cyan-400/80 rounded-full blur-[2px]"
            style={{ top: `${(i * 7) % 100}%`, left: `${(i * 11) % 100}%` }}
          />
        ))}

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative text-4xl md:text-6xl font-extrabold
          bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400
          bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,255,255,0.4)]"
        >
          About Engineers World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="relative mt-4 text-gray-300 text-sm md:text-lg max-w-2xl"
        >
          Building secure, scalable and future-ready technology solutions
        </motion.p>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="relative mt-2 text-emerald-300 text-xs md:text-sm tracking-wide"
        >
          Recognized by #StartupIndia
        </motion.span>
      </motion.header>

      <main className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-300">Who We Are</h2>
          <p className="mt-5 text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Engineers World, led by Mr Akshay Kumar, delivers high-quality software,
            cybersecurity products and industry-aligned training programs. Our flagship
            solution, PhishShield, leverages intelligent threat analysis to protect users
            from phishing attacks while our learning initiatives empower the next
            generation of technology professionals.
          </p>
        </motion.section>

        <div className="grid gap-8 md:grid-cols-2 mb-20">
          <InfoCard
            title="Our Mission"
            text="To deliver secure, innovative technology solutions while nurturing technical
            talent through real-world learning experiences."
          />
          <InfoCard
            title="Our Vision"
            text="To become a globally trusted leader in cybersecurity and digital innovation,
            creating a safer and smarter digital ecosystem."
          />
        </div>

        <section ref={ref} className="mb-20">
          <h2 className="text-2xl md:text-3xl text-center font-bold text-emerald-300 mb-10">
            Our Achievements
          </h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {ACHIEVEMENTS.map((item, i) => (
              <AchievementCard
                key={item.title}
                item={item}
                visible={inView}
                delay={i * 0.12}
              />
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl text-emerald-300 font-bold text-center mb-10">
            Why Choose Us
          </h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            <ValueCard
              title="Expertise"
              text="Highly skilled professionals with real-world industry experience"
            />
            <ValueCard
              title="Innovation"
              text="Modern, scalable solutions built with cutting-edge technologies"
            />
            <ValueCard
              title="Support"
              text="Reliable assistance and long-term partnership mindset"
            />
          </div>
        </motion.section>
      </main>
    </div>
  )
}

const InfoCard = memo(function InfoCard({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-md"
    >
      <h3 className="text-xl font-semibold text-emerald-300 mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </motion.div>
  )
})

const AchievementCard = memo(function AchievementCard({ item, visible, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center
      hover:bg-white/10 transition"
    >
      <div
        className="flex items-center justify-center h-12 w-12 mx-auto rounded-xl
      bg-emerald-400/10 text-emerald-300 text-xl"
      >
        {item.icon}
      </div>
      <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
      <p className="text-sm text-gray-400 mt-1">{item.description}</p>
    </motion.div>
  )
})

const ValueCard = memo(function ValueCard({ title, text }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-300">{text}</p>
    </div>
  )
})
