import { FaCheckCircle } from 'react-icons/fa'

export default function ServicesCard({ service }) {
  const Icon = service.icon

  return (
    <div className="p-6 rounded-3xl bg-[#0d1530] border border-white/10">
      <Icon className={`${service.color} w-10 h-10 md:w-12 md:h-12`} />

      <h3 className="text-xl md:text-2xl font-bold mt-4">{service.title}</h3>

      <p className="text-gray-300 mt-2">{service.description}</p>

      <ul className="mt-4 space-y-2">
        {service.points.map((pt) => (
          <li key={pt} className="flex items-center gap-2 text-gray-300">
            <FaCheckCircle className="text-cyan-400" />
            {pt}
          </li>
        ))}
      </ul>
    </div>
  )
}
