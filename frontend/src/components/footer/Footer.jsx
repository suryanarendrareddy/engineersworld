import FooterBackground from './FooterBackground'
import FooterSocials from './FooterSocials'
import FooterQuickLinks from './FooterQuickLinks'
import FooterCompany from './FooterCompany'
import FooterContact from './FooterContact'
import Copyright from './Copyright'

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 bg-linear-to-br from-[#020617] via-[#040a16] to-[#020617] text-white overflow-hidden">
      <FooterBackground />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        <FooterSocials />
        <FooterQuickLinks />
        <FooterCompany />
        <FooterContact />
      </div>

      <div className="relative max-w-7xl mx-auto mt-12 border-t border-white/10" />

      <Copyright />
    </footer>
  )
}
