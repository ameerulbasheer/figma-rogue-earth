import { memo } from 'react'

export const Spinner = memo(function Spinner({ label = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-8">
      <div className="w-6 h-6 border-2 border-dark-grey border-t-transparent rounded-full animate-spin" />
      <span className="font-mono text-sm text-mid-grey">{label}</span>
    </div>
  )
})
