import { memo } from 'react'

export default memo(function ValueCard({ title, text }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-300">{text}</p>
    </div>
  )
})
