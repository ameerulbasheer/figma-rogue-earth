import { memo } from 'react'
import { Counter } from '../common/Counter'
import { SectionHeader } from '../common/SectionHeader'

export const CounterPills = memo(function CounterPills({ growth, sync, chits, onChange, readOnly }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Counters</SectionHeader>
      <div className="flex justify-around px-2 py-2">
        <Counter label="Growth" value={growth} onChange={v => onChange('growth', v)} disabled={readOnly} />
        <Counter label="Sync"   value={sync}   onChange={v => onChange('sync', v)} disabled={readOnly} />
        <Counter label="Chits"  value={chits}  onChange={v => onChange('chits', v)} disabled={readOnly} />
      </div>
    </div>
  )
})
