import { motion } from 'framer-motion'

export default function PolicyRenderer({ policy }) {
  const updatedAt =
    policy.lastUpdated === 'auto'
      ? new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })
      : policy.lastUpdated

  return (
    <motion.main
      className="mt-10 min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-900 text-gray-100 py-12 px-4"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <article className="mx-auto max-w-4xl bg-black/60 ring-1 ring-white/10 rounded-2xl p-8 md:p-12">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-300">
            {policy.title}
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Last updated: <time>{updatedAt}</time>
          </p>
        </header>

        {policy.sections.map((section) => (
          <section
            key={section.id}
            className="prose prose-invert max-w-none mb-6"
          >
            <h2 className="text-xl font-semibold">{section.heading}</h2>

            {section.content &&
              section.content.map((p, i) => <p key={i}>{p}</p>)}

            {section.list && (
              <ul className="list-disc ml-6">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {policy.contact && (
          <section className="prose prose-invert max-w-none mt-8">
            <h2 className="text-xl font-semibold">Contact</h2>
            <address className="not-italic">
              {policy.contact.company}
              <br />
              Email:{' '}
              <a
                href={`mailto:${policy.contact.email}`}
                className="text-emerald-300 hover:underline"
              >
                {policy.contact.email}
              </a>
              <br />
              Phone:{' '}
              <a
                href={`tel:${policy.contact.phone.replace(/\s/g, '')}`}
                className="text-emerald-300 hover:underline"
              >
                {policy.contact.phone}
              </a>
              <br />
              {policy.contact.address}
            </address>
          </section>
        )}
      </article>
    </motion.main>
  )
}
