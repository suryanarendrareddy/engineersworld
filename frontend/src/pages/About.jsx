import AboutHero from '../components/about/AboutHero'
import AboutIntro from '../components/about/AboutIntro'
import AboutMissionVision from '../components/about/AboutMissionVision'
import AboutAchievements from '../components/about/AboutAchievements'
import AboutValues from '../components/about/AboutValues'

export default function About() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <AboutHero />

      <main className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <AboutIntro />
        <AboutMissionVision />
        <AboutAchievements />
        <AboutValues />
      </main>
    </div>
  )
}
