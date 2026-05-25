import { memo } from 'react'

// Checkbox used for Hope/Courage trackers
// variant: 'filled' | 'empty' | 'locked'
export const Checkbox = memo(function Checkbox({ variant = 'empty', onClick, size = 'md', alert = false, disabled }) {
  const sizeClass = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'

  const cursor = disabled ? 'cursor-default' : 'cursor-pointer'

  if (variant === 'filled') {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${sizeClass} rounded-full ${disabled ? 'bg-light-grey' : 'bg-dark-grey'} flex-shrink-0 ${cursor}`}
        aria-label="Filled slot"
      />
    )
  }

  if (variant === 'locked') {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${sizeClass} border-2 border-dashed ${disabled ? 'border-light-grey' : 'border-dark-grey'} rounded-full flex-shrink-0 ${cursor}`}
        aria-label="Locked slot"
      />
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${sizeClass} border-2 ${disabled ? 'border-light-grey' : 'border-dark-grey'} rounded-full flex-shrink-0 ${cursor} flex items-center justify-center`}
      aria-label="Empty slot"
    >
      {alert && <span className="text-[8px] font-bold text-dark-grey leading-none">!</span>}
    </button>
  )
})
