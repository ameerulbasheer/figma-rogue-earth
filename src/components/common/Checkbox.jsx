// Checkbox used for Hope/Courage trackers
// variant: 'filled' | 'empty' | 'locked'
export function Checkbox({ variant = 'empty', onClick, size = 'md', alert = false }) {
  const sizeClass = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'

  if (variant === 'filled') {
    return (
      <button
        onClick={onClick}
        className={`${sizeClass} rounded-full bg-dark-grey flex-shrink-0 cursor-pointer`}
        aria-label="Filled slot"
      />
    )
  }

  if (variant === 'locked') {
    return (
      <button
        onClick={onClick}
        className={`${sizeClass} border-2 border-dashed border-dark-grey rounded-full flex-shrink-0 cursor-pointer`}
        aria-label="Locked slot"
      />
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${sizeClass} border-2 border-dark-grey rounded-full flex-shrink-0 cursor-pointer flex items-center justify-center`}
      aria-label="Empty slot"
    >
      {alert && <span className="text-[8px] font-bold text-dark-grey leading-none">!</span>}
    </button>
  )
}
