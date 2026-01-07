export default function VideoModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
      <div className="relative w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-xl"
        >
          ✕
        </button>
        <video controls autoPlay className="w-full rounded-xl">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
