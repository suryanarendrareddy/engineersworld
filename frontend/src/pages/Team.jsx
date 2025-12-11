import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar } from 'react-icons/fa'

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  const teamMembers = [
    {
      name: 'Mani Kumar',
      role: 'Chairman',
      image: '/chairman.jpg',
      bio: 'The Chairman of Engineers World, plays a pivotal role in shaping our vision and driving innovation.',
      skills: [
        'Motivational Speaker',
        'Creative Head',
        'Business Developer',
        'Leadership',
      ],
    },
    {
      name: 'Akshay Kumar',
      role: 'Chief Executive Officer (CEO)',
      image: '/CEO.jpg',
      bio: 'A visionary leader with profound expertise in cybersecurity, cloud computing, and web development.',
      skills: ['Cybersecurity', 'Cloud Computing', 'Web Development', 'Leadership'],
    },
    {
      name: 'Mohammad Akheel',
      role: 'Co-Founder',
      image: '/cofounder.png',
      bio: 'Expert in Networking, Linux, and cloud technologies with advanced knowledge in AI/ML.',
      skills: ['Networking', 'AI/ML', 'Linux', 'Docker', 'Kubernetes'],
    },
    {
      name: 'Shivansh Bhardwaj',
      role: 'UI/UX Designer',
      image: '/uiuxdesigner.png',
      bio: 'Creative designer with expertise in user experience and data analysis.',
      skills: ['UI Design', 'UX Design', 'Data Analysis', 'Web Design'],
    },
    {
      name: 'Juvvala Shiva Kesava Rao',
      role: 'Android Developer',
      image: '/androidDeveloper.jpg',
      bio: 'Skilled in mobile app development with expertise in React.js and Spring Boot.',
      skills: ['Android', 'React.js', 'Spring Boot', 'MySQL'],
    },
    {
      name: 'Yeshwanth',
      role: 'Managing Director',
      image: '/marketing.jpg',
      bio: 'Technical leader with expertise in frontend development and cybersecurity.',
      skills: ['Frontend', 'Management', 'Cybersecurity', 'Strategy'],
    },
    {
      name: 'Karthik Boosa',
      role: 'Software Tester',
      image: '/softwaretester.jpg',
      bio: 'Quality assurance expert with skills in Java and Android development.',
      skills: ['Software Testing', 'QA', 'Java', 'Android'],
    },
    {
      name: 'Sujith',
      role: 'Cyber Analyst',
      image: '/cyberAnalyst.jpg',
      bio: 'Security expert proficient in digital forensics and penetration testing.',
      skills: ['Digital Forensics', 'Pen Testing', 'Java', 'Cybersecurity'],
    },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <div className="min-h-screen bg-[#020617] pt-28 pb-20 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r
        from-cyan-300 to-blue-400 bg-clip-text text-transparent"
      >
        Meet Our Team
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mt-3"
      >
        The brilliant minds building the future of Engineers World
      </motion.p>

      <div
        ref={ref}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto px-6"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl py-8 px-4
            shadow-[0_0_40px_rgba(0,255,255,0.1)] hover:border-cyan-400/40 transition-all"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.06 }}
                className="relative w-50 h-50 rounded-full overflow-hidden border-4
                border-cyan-300/40 shadow-[0_0_25px_rgba(0,255,255,0.4)]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover ${index === 0 || index === 6 ? 'scale-140' : 'scale-110'
                    }`}
                />
              </motion.div>

              <h3 className="text-2xl mt-5 font-semibold text-cyan-300">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed max-w-sm">
                {member.bio}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {member.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-300/30 text-cyan-200 text-xs backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.25)]"
                  >
                    <FaStar className="text-[10px]" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
