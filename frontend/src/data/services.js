import {
  FaShieldAlt,
  FaLaptopCode,
  FaMobile,
  FaServer,
  FaBrain,
  FaUserShield,
  FaBolt,
  FaCubes,
  FaChartLine,
} from 'react-icons/fa'

export const STEPS = [
  {
    icon: FaBolt,
    title: 'Planning',
    desc: 'Requirement analysis & goals.',
  },
  {
    icon: FaCubes,
    title: 'Design',
    desc: 'UI/UX & architecture.',
  },
  {
    icon: FaLaptopCode,
    title: 'Development',
    desc: 'Implementation.',
  },
  {
    icon: FaChartLine,
    title: 'Delivery',
    desc: 'Testing & support.',
  },
]

export const SERVICES = [
  {
    icon: FaShieldAlt,
    color: 'text-cyan-400',
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
    icon: FaLaptopCode,
    color: 'text-purple-400',
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
    icon: FaMobile,
    color: 'text-pink-400',
    title: 'Android App Development',
    description:
      'Scalable mobile apps with clean UI, animations & secure authentication.',
    points: [
      'Custom Apps',
      'API Integration',
      'High-Performance UI',
      'Secure Login',
    ],
  },
  {
    icon: FaServer,
    color: 'text-yellow-400',
    title: 'Penetration Testing',
    description:
      'Security auditing with OWASP tests & expert vulnerability reports.',
    points: [
      'OWASP Testing',
      'Vulnerability Scan',
      'Pentesting Reports',
      'Attack Simulation',
    ],
  },
  {
    icon: FaBrain,
    color: 'text-emerald-400',
    title: 'Cyber Security Training',
    description: 'Hands-on cybersecurity training with labs & real projects.',
    points: [
      'Beginner to Advanced',
      'Labs',
      'Simulations',
      'Industry Curriculum',
    ],
  },
  {
    icon: FaUserShield,
    color: 'text-red-400',
    title: 'Threat Intelligence',
    description: 'AI-powered threat monitoring & attack prediction.',
    points: [
      'Threat Prediction',
      'Monitoring',
      'Risk Analysis',
      'Incident Response',
    ],
  },
]
