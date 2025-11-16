
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Team.css';

function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
      skills: [
        'Cybersecurity',
        'Cloud Computing',
        'Web Development',
        'Leadership',
      ],
    },
    {
      name: 'Mohammad Akheel',
      role: 'Co-Founder',
      image: '/cofounder.png',
      bio: 'Expert in Networking, Linux, and cloud technologies with advanced knowledge in AI/ML.',
      skills: ['Networking', 'Linux', 'Docker', 'Kubernetes', 'AI/ML'],
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
      skills: ['Android', 'React.js', 'Spring Boot', 'SQL'],
    },
    {
      name: 'Yeshwanth',
      role: 'Managing Director',
      image: '/marketing.jpg',
      bio: 'Technical leader with expertise in frontend development and cybersecurity.',
      skills: ['Frontend', 'Cybersecurity', 'Management', 'Strategy'],
    },
    {
      name: 'Karthik Boosa',
      role: 'Software Tester',
      image: '/softwaretester.png',
      bio: 'Quality assurance expert with skills in Java and Android development.',
      skills: ['Software Testing', 'Java', 'Android', 'QA'],
    },
    {
      name: 'Sujith',
      role: 'Cyber Security Analyst',
      image: '/cyberAnalyst.jpg',
      bio: 'Security expert proficient in digital forensics and penetration testing.',
      skills: ['Cybersecurity', 'Digital Forensics', 'Java', 'Pen Testing'],
    },
  ]

  return (
    <div className="team-page">
      <motion.div 
        className="team-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Meet Our Team</h1>
        <p>The innovative minds behind Engineers World</p>
      </motion.div>

      <motion.div
        ref={ref}
        className="team-grid"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
          >
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <div className="member-role">{member.role}</div>
              <p className="member-bio">{member.bio}</p>
              <ul className="skills-list">
                {member.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Team;