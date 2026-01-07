import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import { fadeUp } from './animations'

export default function HomeHero({ onPlay }) {
  return (
    <section className="relative h-[64vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r
          from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Protecting Businesses from Cyber Threats
        </motion.h1>

        <p className="mt-4 text-gray-300 text-lg">
          Intelligent detection, rapid response, and expert cybersecurity
          solutions.
        </p>

        <div className="mt-6 flex justify-center md:hidden">
          <button
            onClick={onPlay}
            className="flex items-center gap-2 px-6 py-3 rounded-full
            bg-cyan-400/20 border border-cyan-400/40 text-cyan-300"
          >
            <FaPlay /> Watch Video
          </button>
        </div>
      </div>
    </section>
  )
}
