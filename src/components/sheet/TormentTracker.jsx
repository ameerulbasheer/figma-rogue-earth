export function TormentTracker({ torment, onChange }) {
  const { text, effect, active } = torment

  return (
    <div className="flex flex-col gap-1 border border-dark-grey p-2 rounded">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-dark-grey uppercase tracking-widest">Torment</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onChange('effect', effect === 'HOPE' ? 'COURAGE' : 'HOPE')}
            className="font-mono text-xs border border-dark-grey px-1 rounded cursor-pointer"
          >
            [{effect}]
          </button>
          <button
            onClick={() => onChange('active', !active)}
            className={`w-3 h-3 rounded-full border border-dark-grey cursor-pointer ${active ? 'bg-dark-grey' : 'bg-transparent'}`}
            aria-label="Toggle active"
          />
        </div>
      </div>
      <input
        type="text"
        value={text}
        onChange={e => onChange('text', e.target.value)}
        placeholder="Torment condition…"
        className="font-body text-sm bg-transparent border-b border-dashed border-mid-grey w-full placeholder:text-light-grey"
      />
    </div>
  )
}
