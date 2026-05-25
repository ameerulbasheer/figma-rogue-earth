import { memo } from 'react'

export const VirtueTracker = memo(function VirtueTracker({ virtue, onChange, readOnly }) {
  const { text, effect, active } = virtue

  return (
    <div className="flex flex-col gap-1 border border-dark-grey p-2 rounded">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-dark-grey uppercase tracking-widest">Virtue</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onChange('effect', effect === 'HOPE' ? 'COURAGE' : 'HOPE')}
            disabled={readOnly}
            className={`font-mono text-xs border ${readOnly ? 'border-light-grey text-light-grey cursor-default' : 'border-dark-grey cursor-pointer'} px-1 rounded`}
          >
            [{effect}]
          </button>
          <button
            onClick={() => onChange('active', !active)}
            disabled={readOnly}
            className={`w-3 h-3 rounded-full border ${readOnly ? 'border-light-grey cursor-default' : 'border-dark-grey cursor-pointer'} ${active ? (readOnly ? 'bg-light-grey' : 'bg-dark-grey') : 'bg-transparent'}`}
            aria-label="Toggle active"
          />
        </div>
      </div>
      <input
        type="text"
        value={text}
        onChange={e => onChange('text', e.target.value)}
        placeholder="Virtue condition…"
        readOnly={readOnly}
        className="font-body text-sm bg-transparent border-b border-dashed border-mid-grey w-full placeholder:text-light-grey"
      />
    </div>
  )
})
