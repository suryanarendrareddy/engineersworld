import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaShieldAlt, FaClock, FaUserTie, FaRocket } from 'react-icons/fa'

export default function Home() {
  const [openVideo, setOpenVideo] = useState(false)

  const aiImages = [
    'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200',
    'https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1200',
  ]

  const services = [
    {
      icon: <FaShieldAlt />,
      title: '24/7 Protection',
      image: aiImages[0],
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
      image: aiImages[1],
      description: 'Rapid action against security threats and breaches',
      points: [
        'Immediate detection',
        'Rapid incident response',
        'Quick recovery flow',
        'Minimal downtime',
      ],
    },
    {
      icon: <FaUserTie />,
      title: 'Expert Team',
      image: aiImages[2],
      description: 'Cybersecurity professionals at your service',
      points: [
        'Certified experts',
        'Dedicated support team',
        'Regular training',
        'Industry specialists',
      ],
    },
    {
      icon: <FaRocket />,
      title: 'Advanced Solutions',
      image: aiImages[3],
      description: 'Neon AI-powered cybersecurity tools and systems',
      points: [
        'AI threat detection',
        'ML-based anomaly tracking',
        'Latest security protocols',
        'Advanced encryption',
      ],
    },
  ]

  return (
    <div className="min-h-screen w-full bg-[#020617] text-white overflow-hidden">
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="md:hidden absolute inset-0 bg-[url('/video-poster-mobile.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-black/50" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.7, 1.2, 0.7],
                x: [0, Math.sin(i) * 60],
                y: [0, Math.cos(i) * 60],
              }}
              transition={{
                duration: 4 + i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-2 h-2 bg-cyan-400/80 rounded-full blur-[2px]"
              style={{
                top: `${(i * 7) % 100}%`,
                left: `${(i * 11) % 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-20 max-w-4xl text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 text-transparent bg-clip-text"
          >
            Protecting Businesses with Intelligent Security
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto"
          >
            PhishShield and Engineers World combine ML-driven detection, expert response,
            and continuous monitoring to keep your organisation safe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 flex justify-center gap-4"
          >
            <a className="px-6 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/40 hover:bg-cyan-500/30 transition">
              Get Started
            </a>

            <button
              onClick={() => setOpenVideo(true)}
              className="px-6 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition flex items-center gap-2"
            >
              <FaPlay /> Watch Video
            </button>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text">
          Why Choose Us
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-xl"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={srv.image} className="h-full w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="p-5 text-center">
                <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center text-3xl bg-cyan-400/20 text-cyan-300 rounded-xl">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-semibold">{srv.title}</h3>
                <p className="text-gray-300 mt-2">{srv.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-14 px-6 max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              How to Secure from Cyber Attacks
            </h2>
            <p className="text-gray-300 max-w-2xl">
              We combine threat intelligence, automated detection, and expert response to
              reduce risk, shorten incident response time, and protect your critical
              assets.
            </p>

            {[
              [
                'Advanced Threat Intelligence',
                'Predict & block global cyberattacks using AI',
              ],
              [
                'AI & Machine Learning',
                'Identify malware, phishing, and anomalies instantly',
              ],
              [
                'Multi-Layered Security',
                'Firewalls, IDS/IPS, VPNs and encrypted communication',
              ],
            ].map(([t, d], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg"
              >
                <h3 className="text-lg font-semibold text-cyan-300">{t}</h3>
                <p className="text-gray-300 mt-1">{d}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-xl"
          >
            <img src="/PhishShield.png" className="w-full object-contain" />
          </motion.div>
        </div>
      </section>

      {openVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl rounded-xl overflow-hidden border border-white/20 bg-black">
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute right-4 top-4 z-30 text-xl bg-white/10 p-2 rounded-full"
            >
              ✕
            </button>
            <video className="w-full h-full" controls autoPlay>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  )
}
