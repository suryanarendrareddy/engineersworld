export default function FooterContact() {
  return (
    <section className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
      <h3 className="text-xl font-semibold">Contact Info</h3>
      <div className="w-16 h-[3px] bg-cyan-400 rounded-full mt-2" />

      <div className="mt-4 space-y-3 text-sm text-gray-300">
        <p>
          <span className="text-cyan-300 font-medium">Email:</span>{' '}
          <a href="mailto:info@engineersworld.in" className="hover:underline">
            info@engineersworld.in
          </a>
        </p>

        <p>
          <span className="text-cyan-300 font-medium">Phone:</span>{' '}
          <a href="tel:+917997700218" className="hover:underline">
            +91 7997700218
          </a>
        </p>

        <p>
          <span className="text-cyan-300 font-medium">Office Address:</span>
          <br />
          Journalist Colony, Nampally, Rajanna Sircilla, Telangana - 505302
        </p>

        <p>
          <span className="text-cyan-300 font-medium">Registered Address:</span>
          <br />
          Venkampet Road, Rajanna Sircilla, Telangana - 505301
        </p>
      </div>
    </section>
  )
}
