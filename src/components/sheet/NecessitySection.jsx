import { SectionHeader } from '../common/SectionHeader'
import { NecessityTracker } from './NecessityTracker'

const DEFAULT_COUNT = 2

// Column widths — must match NecessityTracker
// mode: w-16 | amt: w-8 | qty: w-14 | remove: w-4

export function NecessitySection({ necessities, onChange }) {
  function addRow() {
    onChange([...necessities, { name: '', upkeep: 0, collect: null, qty: 0 }])
  }

  function removeRow(i) {
    onChange(necessities.filter((_, j) => j !== i))
  }

  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Necessities</SectionHeader>
      <div className="px-2 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <span className="flex-1" />
          <span className="w-16 flex-shrink-0 font-mono text-[10px] text-mid-grey text-center">mode</span>
          <span className="w-8 flex-shrink-0 font-mono text-[10px] text-mid-grey text-center">amt</span>
          <span className="w-14 flex-shrink-0 font-mono text-[10px] text-mid-grey text-center">qty</span>
          <span className="w-4 flex-shrink-0" />
        </div>
        {necessities.map((nec, i) => (
          <NecessityTracker
            key={i}
            necessity={nec}
            onChange={(field, value) => {
              const next = necessities.map((n, j) => j === i ? { ...n, [field]: value } : n)
              onChange(next)
            }}
            onRemove={i >= DEFAULT_COUNT ? () => removeRow(i) : null}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={addRow}
        className="self-start ml-2 font-mono text-xs text-mid-grey hover:text-dark-grey cursor-pointer"
        title="Add necessity"
      >
        + add
      </button>
    </div>
  )
}
