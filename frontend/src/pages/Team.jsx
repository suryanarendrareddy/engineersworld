import TeamHeader from '../components/team/TeamHeader'
import TeamGrid from '../components/team/TeamGrid'

export default function Team() {
  return (
    <div className="min-h-screen bg-[#020617] pt-28 pb-20 text-white">
      <TeamHeader />
      <TeamGrid />
    </div>
  )
}
