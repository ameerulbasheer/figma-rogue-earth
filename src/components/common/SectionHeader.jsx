// Dark grey header bar with white monospace text
export function SectionHeader({ children, className = '' }) {
  return (
    <div className={`bg-dark-grey px-3 py-1 ${className}`}>
      <span className="font-mono text-white text-sm uppercase tracking-widest">{children}</span>
    </div>
  )
}
