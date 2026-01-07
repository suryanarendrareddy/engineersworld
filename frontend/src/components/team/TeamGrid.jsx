import { useInView } from 'react-intersection-observer'
import MemberCard from './MemberCard'
import { TEAM } from '../../data/team'

export default function TeamGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <div
      ref={ref}
      className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16
      max-w-6xl mx-auto px-6"
    >
      {TEAM.map((member, index) => (
        <MemberCard
          key={member.name}
          member={member}
          index={index}
          inView={inView}
        />
      ))}
    </div>
  )
}
