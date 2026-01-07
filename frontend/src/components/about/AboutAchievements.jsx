import { useInView } from 'react-intersection-observer'
import { ACHIEVEMENTS } from '../../data/aboutData'
import AchievementCard from './cards/AchievementCard'

export default function AboutAchievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section ref={ref} className="mb-20">
      <h2 className="text-2xl md:text-3xl text-center font-bold text-emerald-300 mb-10">
        Our Achievements
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((a, i) => (
          <AchievementCard
            key={a.title}
            {...a}
            visible={inView}
            delay={i * 0.12}
          />
        ))}
      </div>
    </section>
  )
}
