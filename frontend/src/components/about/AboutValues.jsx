import { VALUES } from '../../data/aboutData'
import ValueCard from './cards/ValueCard'

export default function AboutValues() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl text-emerald-300 font-bold text-center mb-10">
        Why Choose Us
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {VALUES.map((v) => (
          <ValueCard key={v.title} {...v} />
        ))}
      </div>
    </section>
  )
}
