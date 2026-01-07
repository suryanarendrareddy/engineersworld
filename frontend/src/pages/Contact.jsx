import ContactHero from '../components/contact/ContactHero'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ContactHero />

      <main
        className="max-w-7xl mx-auto px-4 py-24
      grid grid-cols-1 lg:grid-cols-3 gap-16"
      >
        <ContactInfo />
        <ContactForm />
      </main>
    </div>
  )
}
