import { memo, useEffect } from 'react'

export const Toast = memo(function Toast({ message, type = 'error', onDismiss, duration = 5000 }) {
  useEffect(() => {
    if (!duration) return
    const id = setTimeout(onDismiss, duration)
    return () => clearTimeout(id)
  }, [duration, onDismiss])

  const bg = type === 'error' ? 'bg-red-600' : type === 'success' ? 'bg-green-700' : 'bg-dark-grey'

  return (
    <div className="fixed bottom-20 md:bottom-4 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className={`${bg} text-white font-mono text-xs px-4 py-2 rounded shadow-lg flex items-center gap-3`}>
        <span>{message}</span>
        <button onClick={onDismiss} className="text-white/70 hover:text-white cursor-pointer leading-none text-lg">
          &times;
        </button>
      </div>
    </div>
  )
})
