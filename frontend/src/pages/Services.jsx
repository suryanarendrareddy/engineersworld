import { useState } from 'react'
import ServicesHero from '../components/servicespage/ServicesHero'
import ServicesList from '../components/servicespage/ServicesList'
import HowWeWork from '../components/servicespage/HowWeWork'
import ServicesCTA from '../components/servicespage/ServicesCTA'

export default function Services() {
  const [hover, setHover] = useState(null)

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-20 overflow-x-hidden w-full">
      <ServicesHero />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent my-10 md:my-14" />

      <ServicesList hover={hover} setHover={setHover} />

      <HowWeWork />

      <ServicesCTA />
    </div>
  )
}
