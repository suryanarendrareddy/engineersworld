import { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import { Toaster } from 'sonner'

const Home = lazy(() => import('./pages/Home/Home'))
const Services = lazy(() => import('./pages/Services'))
const Products = lazy(() => import('./pages/Products'))
const About = lazy(() => import('./pages/About'))
const Team = lazy(() => import('./pages/Team'))
const Contact = lazy(() => import('./pages/Contact'))
const Careers = lazy(() => import('./pages/Careers'))
const JobDetails = lazy(() => import("./pages/jobs/JobDetails"))
const InternshipDetails = lazy(() => import('./pages/InternshipDetails'))
const RefundPolicy = lazy(() => import('./components/policies/Refund'))
const TermsOfService = lazy(() => import('./components/policies/Terms'))
const PrivacyPolicy = lazy(() => import('./components/policies/LegalPrivacy'))
const Error404 = lazy(() => import('./components/ui/Error404'))

const Loader = () => (
  <div className="flex items-center justify-center h-screen text-gray-400">
    Loading...
  </div>
)

function App() {
  

  return (
    <Router>
      <ScrollToTop />
      <Toaster richColors position="top-right" />

      <div>
        <Navbar />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:slug" element={<JobDetails />} />
            <Route path="/internships/:slug" element={<InternshipDetails />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  )
}

export default App
