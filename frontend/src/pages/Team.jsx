import { memo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar } from 'react-icons/fa'

const TEAM = [
  {
    name: 'Mani Kumar',
    role: 'Chairman',
    image: '/chairman.jpg',
    bio: 'Driving vision, innovation, and long-term strategy at Engineers World.',
    skills: ['Leadership', 'Business Strategy', 'Creative Direction', 'Mentorship'],
  },
  {
    name: 'Akshay Kumar',
    role: 'Chief Executive Officer',
    image: '/CEO.jpg',
    bio: 'Visionary technologist with deep expertise in cybersecurity and scalable systems.',
    skills: ['Cybersecurity', 'Cloud Computing', 'Web Architecture', 'Leadership'],
  },
  {
    name: 'Mohammad Akheel',
    role: 'Co-Founder',
    image: '/cofounder.png',
    bio: 'Technology strategist specializing in networking, AI/ML and cloud platforms.',
    skills: ['Networking', 'AI/ML', 'Linux', 'Docker', 'Kubernetes'],
  },
  {
    name: 'Shivansh Bhardwaj',
    role: 'UI/UX Designer',
    image: '/uiuxdesigner.png',
    bio: 'Design-focused problem solver creating intuitive and impactful user experiences.',
    skills: ['UI Design', 'UX Research', 'Web Design', 'Data Analysis'],
  },
  {
    name: 'Juvvala Shiva Kesava Rao',
    role: 'Android Developer',
    image: '/androidDeveloper.jpg',
    bio: 'Mobile engineer building secure, scalable Android applications.',
    skills: ['Android', 'React', 'Spring Boot', 'MySQL'],
  },
  {
    name: 'Yeshwanth',
    role: 'Managing Director',
    image: '/marketing.jpg',
    bio: 'Operational leader aligning business strategy with technology execution.',
    skills: ['Management', 'Frontend', 'Cybersecurity', 'Strategy'],
  },
  {
    name: 'Karthik Boosa',
    role: 'Software Tester',
    image: '/softwaretester.jpg',
    bio: 'Quality-driven engineer ensuring reliability and performance across platforms.',
    skills: ['QA', 'Automation', 'Java', 'Android'],
  },
  {
    name: 'Sujith',
    role: 'Cyber Analyst',
    image: '/cyberAnalyst.jpg',
    bio: 'Security analyst specializing in threat detection and digital forensics.',
    skills: ['Penetration Testing', 'Digital Forensics', 'Cybersecurity', 'Analysis'],
  },
]

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <div className="min-h-screen bg-[#020617] pt-28 pb-20 text-white overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold
        bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
      >
        Our Leadership & Team
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base"
      >
        A multidisciplinary team shaping secure, scalable, and future-ready technology
      </motion.p>

      <div
        ref={ref}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16
        max-w-6xl mx-auto px-6"
      >
        {TEAM.map((member, index) => (
          <MemberCard key={member.name} member={member} index={index} inView={inView} />
        ))}
      </div>
    </div>
  )
}

const MemberCard = memo(function MemberCard({ member, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10
      rounded-3xl px-6 py-10 text-center
      shadow-[0_0_45px_rgba(0,255,255,0.12)]
      hover:border-cyan-400/40 transition"
    >
      <motion.div
        whileHover={{ scale: 1.06 }}
        className="mx-auto w-48 h-48 rounded-full overflow-hidden
        border-4 border-cyan-300/40
        shadow-[0_0_30px_rgba(0,255,255,0.45)]"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover scale-110"
          loading="lazy"
        />
      </motion.div>

      <h3 className="mt-6 text-2xl font-semibold text-cyan-300">{member.name}</h3>
      <p className="text-sm text-gray-400">{member.role}</p>

      <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-sm mx-auto">
        {member.bio}
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {member.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full
            bg-cyan-400/10 border border-cyan-300/30
            text-cyan-200 text-xs
            backdrop-blur-md"
          >
            <FaStar className="text-[10px]" />
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
})
