import { Checkbox } from '../common/Checkbox'

const MAX_SLOTS = 6

export function CourageTracker({ courage, onToggle }) {
  const { unlocked, filled } = courage

  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-xs text-dark-grey uppercase tracking-widest">Courage</span>
      <div className="flex gap-2 items-center">
        {Array.from({ length: MAX_SLOTS }).map((_, i) => {
          const variant = i < filled ? 'filled' : (i < unlocked || i < 2) ? 'empty' : 'locked'
          return (
            <Checkbox
              key={i}
              variant={variant}
              onClick={() => onToggle(i)}
              alert={variant === 'empty' && i === 0 && filled === 0}
            />
          )
        })}
      </div>
    </div>
  )
}
