import { memo } from 'react'

// +/- counter pill used for Growth, Sync, Chits
export const Counter = memo(function Counter({ label, value, onChange, min = 0, disabled }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-mono text-xs text-dark-grey uppercase tracking-wide">{label}</span>
      <div className="flex items-center gap-2 border border-dark-grey px-2 py-1 rounded">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={disabled}
          className={`font-mono text-lg leading-none select-none ${disabled ? 'text-light-grey cursor-default' : 'text-dark-grey cursor-pointer'}`}
          aria-label={`Decrease ${label}`}
        >
          −
        </button>
        <span className="font-mono text-lg min-w-[1.5rem] text-center text-dark-grey">{value}</span>
        <button
          onClick={() => onChange(value + 1)}
          disabled={disabled}
          className={`font-mono text-lg leading-none select-none ${disabled ? 'text-light-grey cursor-default' : 'text-dark-grey cursor-pointer'}`}
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  )
})
