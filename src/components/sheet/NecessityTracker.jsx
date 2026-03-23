// Single necessity row.
// Column widths — must match NecessitySection header
// mode: w-16 | amt: w-8 | qty: w-14 | remove: w-4

export function NecessityTracker({ necessity, onChange, onRemove }) {
  const { name, upkeep, collect, qty } = necessity
  const isCollectMode = collect !== null

  function toggleMode() {
    onChange('collect', isCollectMode ? null : 3)
  }

  return (
    <div className="flex gap-2 items-center border-b border-dashed border-light-grey pb-1">
      <input
        type="text"
        value={name}
        onChange={e => onChange('name', e.target.value)}
        placeholder="Necessity…"
        className="flex-1 min-w-0 font-body text-sm bg-transparent text-dark-grey placeholder:text-light-grey"
      />
      <button
        type="button"
        onClick={toggleMode}
        className="w-16 flex-shrink-0 font-mono text-xs border border-dark-grey px-1 rounded cursor-pointer text-center"
        title="Toggle Upkeep/Collect mode"
      >
        {isCollectMode ? 'COLLECT' : 'UPKEEP'}
      </button>
      {isCollectMode ? (
        <input
          type="number"
          value={collect}
          onChange={e => onChange('collect', Number(e.target.value))}
          className="w-8 flex-shrink-0 font-mono text-xs text-center border-b border-dashed border-mid-grey bg-transparent text-dark-grey"
          min={0}
        />
      ) : (
        <input
          type="number"
          value={upkeep}
          onChange={e => onChange('upkeep', Number(e.target.value))}
          className="w-8 flex-shrink-0 font-mono text-xs text-center border-b border-dashed border-mid-grey bg-transparent text-dark-grey"
          min={0}
        />
      )}
      <div className="w-14 flex-shrink-0 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onChange('qty', Math.max(0, qty - 1))}
          className="font-mono text-xs text-dark-grey leading-none cursor-pointer"
        >
          −
        </button>
        <span className="font-mono text-sm text-center text-dark-grey">{qty}</span>
        <button
          type="button"
          onClick={() => onChange('qty', qty + 1)}
          className="font-mono text-xs text-dark-grey leading-none cursor-pointer"
        >
          +
        </button>
      </div>
      <div className="w-4 flex-shrink-0 flex justify-center">
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="font-mono text-xs text-mid-grey hover:text-dark-grey leading-none cursor-pointer"
            title="Remove"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}
