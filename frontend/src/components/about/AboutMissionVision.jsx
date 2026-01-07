import InfoCard from './cards/InfoCard'
import { MISSION, VISION } from '../../data/aboutData'

export default function AboutMissionVision() {
  return (
    <div className="grid gap-8 md:grid-cols-2 mb-20">
      <InfoCard title="Our Mission" text={MISSION} />
      <InfoCard title="Our Vision" text={VISION} />
    </div>
  )
}
