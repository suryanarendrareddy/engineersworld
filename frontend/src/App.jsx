import { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './pages/ScrollToTop'
import { Toaster } from 'sonner'

// Lazy-loaded pages
const JobDetails = lazy(() => import('./pages/JobDetails'))
const InternshipDetails = lazy(() => import('./pages/InternshipDetails'))
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Products = lazy(() => import('./pages/Products'))
const About = lazy(() => import('./pages/About'))
const Team = lazy(() => import('./pages/Team'))
const Contact = lazy(() => import('./pages/Contact'))
const Careers = lazy(() => import('./pages/Careers'))
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Error404 = lazy(() => import('./components/Error404'))

const Loader = () => (
  <div className="flex items-center justify-center h-screen text-xl text-gray-400">
    Loading...
  </div>
)

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const hours = new Date().getHours()
    setIsDarkMode(hours < 6 || hours > 18)
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Toaster richColors position="top-right" />
      <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <main className="main-content">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/careers/:id" element={<JobDetails />} />
              <Route path='/internships/:id' element={<InternshipDetails />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
