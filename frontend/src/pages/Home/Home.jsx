import { useState } from 'react'
import HomeHero from './HomeHero'
import HomeServices from './HomeServices'
import HomeSecurity from './HomeSecurity'
import VideoModal from './VideoModal'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const [showVideo, setShowVideo] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <HomeHero onPlay={() => setShowVideo(true)} />
      <HomeServices />
      <div ref={ref}>
        <HomeSecurity animate={inView} />
      </div>
      {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}
    </div>
  )
}
