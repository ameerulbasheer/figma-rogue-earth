import { memo } from 'react'
import { SectionHeader } from '../common/SectionHeader'

export const InventoryPanel = memo(function InventoryPanel({ inventory, onChange, readOnly }) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <SectionHeader>Inventory</SectionHeader>
      <textarea
        value={inventory}
        onChange={e => onChange(e.target.value)}
        placeholder="List your items…"
        readOnly={readOnly}
        className="flex-1 resize-none font-body text-sm text-dark-grey p-2 border border-dashed border-mid-grey placeholder:text-light-grey min-h-[120px]"
      />
    </div>
  )
})
