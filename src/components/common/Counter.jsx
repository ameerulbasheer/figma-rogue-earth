// counter pill used for Growth, Sync (stepper) and Chits (numeric input)
export function Counter({ label, value, onChange, min = 0, variant = 'stepper' }) {
  const handleNumericChange = (event) => {
    const parsed = Number(event.target.value)
    if (Number.isNaN(parsed)) return
    onChange(Math.max(min, parsed))
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-mono text-xs text-dark-grey uppercase tracking-wide">{label}</span>
      <div className="flex items-center gap-2 border border-dark-grey px-2 py-1 rounded">
        {variant === 'number' ? (
          <input
            type="number"
            min={min}
            value={value}
            onChange={handleNumericChange}
            className="w-16 text-center font-mono text-lg text-dark-grey bg-transparent outline-none"
            aria-label={`Set ${label}`}
          />
        ) : (
          <>
            <button
              onClick={() => onChange(Math.max(min, value - 1))}
              className="text-dark-grey font-mono text-lg leading-none select-none cursor-pointer"
              aria-label={`Decrease ${label}`}
            >
              −
            </button>
            <span className="font-mono text-lg min-w-[1.5rem] text-center text-dark-grey">{value}</span>
            <button
              onClick={() => onChange(value + 1)}
              className="text-dark-grey font-mono text-lg leading-none select-none cursor-pointer"
              aria-label={`Increase ${label}`}
            >
              +
            </button>
          </>
        )}
      </div>
    </div>
  )
}
