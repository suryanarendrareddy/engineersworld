import { SERVICES } from '../../data/services'
import ServicesCard from './ServicesCard'

export default function ServicesList({ hover, setHover }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {SERVICES.map((srv, i) => (
        <ServicesCard
          key={srv.title}
          service={srv}
          index={i}
          hover={hover}
          setHover={setHover}
        />
      ))}
    </div>
  )
}
