import { memo } from 'react'
import { SectionHeader } from '../common/SectionHeader'
import moves from '../../constants/rules/growthMoves.json'

export const GrowthMoves = memo(function GrowthMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>{moves.title}</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        <p>{moves.intro}</p>
        {moves.moves.map(m => (
          <div key={m.name} className="border-l-2 border-dark-grey pl-3">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-mono text-xs border border-dark-grey px-1 rounded">{m.cost}</span>
              <span className="font-mono font-bold text-dark-grey">{m.name}</span>
            </div>
            <div className="text-xs text-mid-grey">{m.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
})
