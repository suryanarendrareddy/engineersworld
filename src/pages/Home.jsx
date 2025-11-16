
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { FaShieldAlt, FaClock, FaUserTie, FaRocket } from 'react-icons/fa';
import './Home.css';

function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <FaShieldAlt />,
      title: "24/7 Protection",
      image: "/247.jpg",
      description: "Round-the-clock security monitoring and threat detection",
      points: [
        "Real-time threat monitoring",
        "Instant alert system",
        "Automated response protocols",
        "24/7 expert support"
      ]
    },
    {
      icon: <FaClock />,
      title: "Quick Response",
      image: "/net.png",
      description: "Swift action against security threats and breaches",
      points: [
        "Immediate threat detection",
        "Rapid incident response",
        "Quick recovery solutions",
        "Minimal downtime"
      ]
    },
    {
      icon: <FaUserTie />,
      title: "Expert Team",
      image: "/experts.avif",
      description: "Highly skilled cybersecurity professionals at your service",
      points: [
        "Certified security experts",
        "Dedicated support team",
        "Regular training updates",
        "Industry specialists"
      ]
    },
    {
      icon: <FaRocket />,
      title: "Advanced Solutions",
      image: "/growth.jpg",
      description: "Cutting-edge security technologies and methodologies",
      points: [
        "AI-powered security",
        "Machine learning integration",
        "Latest security protocols",
        "Advanced encryption"
      ]
    }
  ];

  const securityFeatures = [
    {
      title: "Advanced Threat Intelligence",
      description: "Analyze global threat data to predict, detect, and respond to potential cyberattacks in real time."
    },
    {
      title: "AI & Machine Learning",
      description: "Use AI to identify patterns and anomalies, detecting malware, phishing attempts, and zero-day attacks."
    },
    {
      title: "Multi-Layered Security",
      description: "Firewalls, intrusion detection/prevention systems (IDS/IPS), and VPNs secure communication channels."
    }
    // ... add more features as needed
  ];

  return (
    <div className="home">
      <section className="hero-video">
        
        <video className="video-player" autoPlay loop muted preload='auto' playsInline>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </section>

      <section className="services-section" ref={ref}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us
        </motion.h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.5 }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <ul>
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="security-section">
        <div className="security-content">
          <motion.div
            className="security-text"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 3.0 }}
          >
            <h2>How to Secure from Cyber Attacks</h2>
            <div className="security-features">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="security-feature"
                  initial={{ x: -30, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 2.0 }}
                >
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="security-image"
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 5.0}}
          >
            <img src="/PhishShield.png" alt="Cybersecurity" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;