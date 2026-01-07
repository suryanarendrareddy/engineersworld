import { socials } from '../../data/footerData'

export default function FooterSocials() {
  return (
    <section className="p-6 rounded-xl bg-white/5 border border-white/10 background-blur-xl">
      <h3 className="text-xl font-semibold">Connect With Us</h3>
      <div className="w-16 h-[3px] bg-cyan-400 rounded-full mt-2" />
      <p className="mt-3 text-sm text-gray-400">
        Follow us for updates, insights and announcements
      </p>

      <div className="flex gap-3 mt-5">
        {socials.map(({ link, Icon, hover }, i) => (
          <a
            href={link}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 text-2xl rounded-full bg-white/10 border border-white/10 transition-all hover:scale-105 ${hover}`}
          >
            {Icon && <Icon />}
          </a>
        ))}
      </div>
    </section>
  )
}
