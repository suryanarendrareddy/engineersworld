import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center
      bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white px-6"
    >
      {/* ERROR CODE */}
      <h1
        className="text-7xl md:text-8xl font-extrabold drop-shadow-[0_0_35px_rgba(0,255,255,0.35)]
        text-cyan-400 tracking-widest"
      >
        404
      </h1>

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-cyan-300">
        Page Not Found
      </h2>

      {/* MESSAGE */}
      <p className="mt-3 text-base md:text-lg max-w-md text-gray-300 opacity-90">
        The page you are looking for doesn't exist or may have been moved.
      </p>

      {/* BUTTON */}
      <Link
        to="/"
        className="mt-6 px-7 py-3 rounded-full font-semibold text-black bg-cyan-400
        hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.3)]
        transition-all duration-300 hover:-translate-y-1"
      >
        Go Back Home
      </Link>
    </div>
  )
}
