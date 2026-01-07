import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HOME_SERVICES } from '../../data/home'
import ServiceCard from './ServiceCard'

export default function HomeServices() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section ref={ref} className="py-16 max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-3xl md:text-4xl font-bold text-center mb-12
        bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent"
      >
        Why Choose Us
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {HOME_SERVICES.map((srv) => (
          <ServiceCard key={srv.title} service={srv} />
        ))}
      </div>
    </section>
  )
}
