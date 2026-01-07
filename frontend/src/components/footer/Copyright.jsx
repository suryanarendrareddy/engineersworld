import { Link } from 'react-router-dom'

export default function Copyright() {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <nav
        className="flex gap-4 text-xs text-gray-300"
        aria-label="Footer legal links"
      >
        <Link to="/refund-policy" className="hover:underline">
          Refund Policy
        </Link>
        <Link to="/terms-of-service" className="hover:underline">
          Terms of Service
        </Link>
        <Link to="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
      </nav>

      <p className="m-2 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Engineers World — Crafted with ❤️ & Cyber
        Excellence.
      </p>
    </div>
  )
}
