import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaShieldAlt, FaClock, FaUserTie, FaRocket, FaPlay } from 'react-icons/fa'

const SERVICES = [
  {
    icon: <FaShieldAlt />,
    title: '24/7 Protection',
    image: '/247.jpg',
    description: 'Round-the-clock security monitoring and threat detection',
    points: [
      'Real-time threat monitoring',
      'Instant alert system',
      'Automated response protocols',
      '24/7 expert support',
    ],
  },
  {
    icon: <FaClock />,
    title: 'Quick Response',
    image: '/net.png',
    description: 'Swift action against security threats and breaches',
    points: [
      'Immediate threat detection',
      'Rapid incident response',
      'Quick recovery solutions',
      'Minimal downtime',
    ],
  },
  {
    icon: <FaUserTie />,
    title: 'Expert Team',
    image: '/experts.avif',
    description: 'Highly skilled cybersecurity professionals',
    points: [
      'Certified security experts',
      'Dedicated support team',
      'Regular training updates',
      'Industry specialists',
    ],
  },
  {
    icon: <FaRocket />,
    title: 'Advanced Solutions',
    image: '/growth.jpg',
    description: 'Cutting-edge security technologies',
    points: [
      'AI-powered security',
      'Machine learning integration',
      'Latest security protocols',
      'Advanced encryption',
    ],
  },
]

const SECURITY_FEATURES = [
  {
    title: 'Advanced Threat Intelligence',
    description:
      'Analyze global threat data to predict, detect, and respond to cyberattacks in real time.',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Detect malware, phishing attempts and zero-day attacks using intelligent models.',
  },
  {
    title: 'Multi-Layered Security',
    description: 'Firewalls, IDS/IPS, VPNs and encrypted communication channels.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function Home() {
  const [showVideo, setShowVideo] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <section className="relative h-[64vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r
            from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Protecting Businesses from Cyber Threats
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-300 text-lg"
          >
            Intelligent detection, rapid response, and expert cybersecurity solutions.
          </motion.p>

          <div className="mt-6 flex justify-center md:hidden">
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-full
              bg-cyan-400/20 border border-cyan-400/40 text-cyan-300"
            >
              <FaPlay /> Watch Video
            </button>
          </div>
        </div>
      </section>

      <section ref={ref} className="py-16 md:py-20 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-12
          bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {SERVICES.map((srv) => (
            <ServiceCard key={srv.title} service={srv} inView={inView} />
          ))}
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              How to Secure from Cyber Attacks
            </h2>

            <div className="mt-6 space-y-4">
              {SECURITY_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="p-5 bg-white/5 border border-white/10 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-cyan-300">{f.title}</h3>
                  <p className="text-gray-300 mt-1 text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-xl bg-white/5 border border-white/10 p-6"
          >
            <img
              src="/PhishShield.png"
              alt="Security Illustration"
              loading="lazy"
              className="w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-xl"
            >
              ✕
            </button>
            <video controls autoPlay className="w-full rounded-xl">
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  )
}
const ServiceCard = memo(function ServiceCard({ service }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden
      bg-white/5 border border-white/10 backdrop-blur-lg shadow-xl
      transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition" />

        <ul
          className="absolute inset-0 flex flex-col justify-center items-center gap-2
          text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition px-4 text-center"
        >
          {service.points.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
      </div>

      <div className="p-5 text-center">
        <div
          className="w-14 h-14 mx-auto mb-3 flex items-center justify-center
          text-2xl text-cyan-300 bg-cyan-400/20 rounded-xl"
        >
          {service.icon}
        </div>
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <p className="text-gray-300 mt-2 text-sm">{service.description}</p>
      </div>
    </div>
  )
})
