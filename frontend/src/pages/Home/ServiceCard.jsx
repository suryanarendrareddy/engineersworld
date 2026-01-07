import { memo } from 'react'

export default memo(function ServiceCard({ service }) {
  return (
    <div
      className="
      group rounded-2xl overflow-hidden
      bg-white/5 border border-white/10 backdrop-blur-lg
      transition-transform hover:-translate-y-2
    "
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition" />

        <ul
          className="
          absolute inset-0 flex flex-col justify-center items-center gap-2
          text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition px-4
        "
        >
          {service.points.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
      </div>

      <div className="p-5 text-center">
        <div
          className="
          w-14 h-14 mx-auto mb-3 flex items-center justify-center
          text-2xl text-cyan-300 bg-cyan-400/20 rounded-xl
        "
        >
          {service.Icon && <service.Icon />}
        </div>
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <p className="text-gray-300 mt-2 text-sm">{service.description}</p>
      </div>
    </div>
  )
})
