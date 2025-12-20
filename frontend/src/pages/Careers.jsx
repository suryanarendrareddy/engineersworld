import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Careers() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const positions = [
    {
      title: 'Business Development Associate',
      slug: 'business-development-associate',
      type: 'Full-time',
    },
    {
      title: 'Full Stack Web Development',
      slug: 'website-developer',
      type: 'Full-time',
    },
    {
      title: 'Cyber Security Analyst',
      slug: 'cyber-security-analyst',
      type: 'Full-time',
    },
  ]

  const internships = [
    {
      title: 'Full Stack Development Intern',
      slug: 'full-stack-development-intern',
      duration: '6 Months',
      stipend: 'Paid Internship',
    },
    {
      title: 'Cybersecurity Intern',
      slug: 'cybersecurity-intern',
      duration: '6 Months',
      stipend: 'Paid Internship',
    },
    {
      title: 'Data Structures & Algorithms (Java)',
      slug: 'dsa-java-intern',
      duration: '6 Months',
      stipend: 'Paid Internship',
    },
    {
      title: 'Cloud Computing Intern',
      slug: 'cloud-computing-intern',
      duration: '6 Months',
      stipend: 'Paid Internship',
    },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  const listContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 22, scale: 0.97, filter: 'blur(3px)' },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.55 },
    },
    hover: {
      y: -8,
      scale: 1.03,
      transition: { duration: 0.35 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-slate-900 text-white">
      {/* HEADER */}
      <motion.header
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative h-[42vh] md:h-[50vh] flex items-center justify-center text-center px-6
        bg-gradient-to-br from-black via-gray-900 to-teal-900 overflow-hidden"
      >
        <div className="max-w-4xl relative">
          <h1 className="text-3xl md:text-5xl font-extrabold text-emerald-300">
            Careers at Engineers World
          </h1>
          <p className="mt-4 text-gray-300 text-base md:text-lg">
            Explore full-time roles and paid internship training programs.
          </p>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-12 md:py-20">
        {/* JOB OPENINGS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-emerald-300 mb-6">
            <FaBriefcase />
            <span>Current Job Openings</span>
          </div>

          <motion.div
            variants={listContainer}
            initial="hidden"
            animate="show"
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {positions.map((pos) => (
              <motion.div
                key={pos.slug}
                variants={cardVariants}
                whileHover="hover"
                className="rounded-xl border border-white/10 bg-gradient-to-br
                from-black/60 to-slate-900/60 p-6 shadow-lg"
              >
                <h3 className="text-lg md:text-xl font-semibold">{pos.title}</h3>
                <p className="mt-2 text-sm text-green-300">{pos.type}</p>

                <Link
                  to={`/careers/${pos.slug}`}
                  className="inline-block mt-4 px-4 py-2 rounded-full
                  bg-emerald-400 text-black text-sm font-semibold"
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
            <span>Paid Internship / Training Programs</span>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {internships.map((intern) => (
              <motion.div
                key={intern.slug}
                variants={cardVariants}
                whileHover="hover"
                className="rounded-xl border border-white/10 bg-gradient-to-br
                from-black/60 to-slate-900/60 p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold">{intern.title}</h3>
                <p className="mt-2 text-sm text-gray-300">Duration: {intern.duration}</p>
                <p className="mt-1 text-sm text-green-300">{intern.stipend}</p>

                <Link
                  to={`/internships/${intern.slug}`}
                  className="inline-block mt-4 px-4 py-2 rounded-full
                  border border-white/20 text-sm hover:bg-white/10"
                >
                  View Program
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}
