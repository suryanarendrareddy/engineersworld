export const JobRequirements = ({ items }) => (
  <section>
    <h3 className="text-xl font-semibold text-emerald-300">Requirements</h3>
    <ul className="mt-3 space-y-2 text-gray-300">
      {items.map((r, i) => (
        <li key={i}>• {r}</li>
      ))}
    </ul>
  </section>
)
