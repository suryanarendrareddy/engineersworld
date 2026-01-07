import { Link } from 'react-router-dom'
import { quickLinks } from '../../data/footerData'

export default function FooterQuickLinks() {
  return (
    <section className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
      <h3 className="font-semibold text-xl">Quick Links</h3>

      <div className="w-16 h-[3px] bg-cyan-400 rounded-full mt-2" />

      <ul className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-gray-300">
        {quickLinks.map(([label, path]) => (
          <li key={label}>
            <Link
              to={path}
              className="inline-block transition hover:text-cyan-400 hover:translate-x-1"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
