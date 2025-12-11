import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Careers() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const positions = [
    { title: 'Business Development Associate', type: 'Full-time' },
    { title: 'Website Developer', type: 'Full-time' },
    { title: 'Cyber Security Analyst', type: 'Full-time' },
  ]

  const internships = [
    { title: 'Web Development Intern', duration: '3 months', stipend: 'Paid internship' },
    { title: 'Cybersecurity Intern', duration: '6 months', stipend: 'Paid internship' },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
  }

  const listContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }

  const cardAnim = {
    hidden: { opacity: 0, y: 22, scale: 0.97, filter: 'blur(3px)' },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.55 },
    },
  }

  const cardHover = {
    hover: {
      y: -8,
      scale: 1.03,
      transition: { duration: 0.35 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-slate-900 text-white">
      <motion.header
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="h-[42vh] md:h-[50vh] flex items-center justify-center text-center px-6
                   bg-gradient-to-br from-black via-gray-900 to-teal-900"
      >
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
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
            className="absolute w-2 h-2 bg-cyan-900/80 rounded-full blur-[2px]"
            style={{
              top: `${(i * 8) % 100}%`,
              left: `${(i * 11) % 100}%`,
            }}
          />
        ))}
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-emerald-300">
            Join Our Team
          </h1>
          <p className="mt-4 text-gray-300 text-base md:text-lg">
            Build your career with Engineers World — learn, ship, and scale.
          </p>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-20">
        {/* JOB OPENINGS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-14"
        >
          <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-emerald-300 mb-6">
            <FaBriefcase />
            <span>Current Openings</span>
          </div>

          <motion.div
            variants={listContainer}
            initial="hidden"
            animate="show"
            className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {positions.map((pos, idx) => (
              <motion.div
                key={idx}
                variants={cardAnim}
                initial="hidden"
                animate="show"
                whileHover="hover"
                variants={cardHover}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-black/60 to-slate-900/60 p-6 shadow-lg"
              >
                <h3 className="text-lg md:text-xl font-semibold">{pos.title}</h3>
                <p className="mt-2 text-sm text-green-300">{pos.type}</p>

                <Link
                  to={`/careers/${idx}`}
                  className="inline-block mt-4 px-4 py-2 rounded-full bg-emerald-400 text-black text-sm font-semibold"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section ref={ref} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-emerald-300 mb-6">
            <FaGraduationCap />
            <span>Internship Opportunities</span>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {internships.map((intern, idx) => (
              <motion.div
                key={idx}
                variants={cardAnim}
                initial="hidden"
                animate="show"
                whileHover="hover"
                variants={cardHover}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-black/60 to-slate-900/60 p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold">{intern.title}</h3>
                <p className="mt-2 text-sm text-gray-300">Duration: {intern.duration}</p>
                <p className="mt-1 text-sm text-green-300">{intern.stipend}</p>

                <Link
                  to={`/internships/${idx}`}
                  className="inline-block mt-4 px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white/10"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}
