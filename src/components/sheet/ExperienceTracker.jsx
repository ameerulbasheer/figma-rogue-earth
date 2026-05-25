import { memo } from 'react'

// Single experience slot
const DICE_FACES = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

export const ExperienceTracker = memo(function ExperienceTracker({ index, experience, onChange, readOnly }) {
  const { name, type } = experience
  const isPracticed = type === 'practiced'

  function toggleType() {
    onChange('type', isPracticed ? 'learned' : 'practiced')
  }

  return (
    <div className="flex items-center gap-2 border-b border-dashed border-light-grey pb-1">
      <span
        className={`text-xl leading-none flex-shrink-0 select-none ${isPracticed ? 'text-dark-grey' : 'text-mid-grey'}`}
        aria-label={`Dice face ${index + 1}`}
      >
        {DICE_FACES[index]}
      </span>
      <input
        type="text"
        value={name}
        onChange={e => onChange('name', e.target.value)}
        placeholder="Experience name…"
        readOnly={readOnly}
        className="flex-1 font-body text-sm bg-transparent text-dark-grey placeholder:text-light-grey"
      />
      <button
        onClick={toggleType}
        disabled={readOnly}
        className={`text-lg leading-none flex-shrink-0 select-none ${
          readOnly ? 'cursor-default' : 'cursor-pointer'
        } ${isPracticed ? 'text-dark-grey' : 'text-light-grey'}`}
        title="Toggle learned/practiced"
        aria-label={isPracticed ? 'Practiced' : 'Learned'}
      >
        {isPracticed ? '★' : '☆'}
      </button>
    </div>
  )
})
