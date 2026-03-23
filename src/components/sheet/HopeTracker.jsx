import { Checkbox } from '../common/Checkbox'

const MAX_SLOTS = 6

export function HopeTracker({ hope, onToggle }) {
  const { unlocked, filled } = hope

  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-xs text-dark-grey uppercase tracking-widest">Hope</span>
      <div className="flex gap-2 items-center">
        {Array.from({ length: MAX_SLOTS }).map((_, i) => {
          const variant = i < filled ? 'filled' : i < unlocked ? 'empty' : 'locked'
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
