import { memo } from 'react'

// Dark grey header bar with white monospace text
export const SectionHeader = memo(function SectionHeader({ children }) {
  return (
    <div className="bg-dark-grey px-3 py-1">
      <span className="font-mono text-white text-sm uppercase tracking-widest">{children}</span>
    </div>
  )
})
