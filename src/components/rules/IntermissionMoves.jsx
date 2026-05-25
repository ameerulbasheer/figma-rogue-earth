import { memo } from 'react'
import { SectionHeader } from '../common/SectionHeader'
import moves from '../../constants/rules/intermissionMoves.json'

export const IntermissionMoves = memo(function IntermissionMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>{moves.title}</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        <p>{moves.intro}</p>
        {moves.moves.map(m => (
          <div key={m.name} className="border-l-2 border-dark-grey pl-3">
            <div className="font-mono font-bold text-dark-grey mb-1">{m.name}</div>
            <div className="text-xs text-mid-grey mb-2">{m.description}</div>
            {m.options && (
              <ul className="text-xs text-mid-grey mb-2 ml-2">
                {m.options.map((opt, i) => (
                  <li key={i} className="mb-1">&bull; {opt}</li>
                ))}
              </ul>
            )}
            {m.effect && <div className="text-xs text-mid-grey italic">{m.effect}</div>}
          </div>
        ))}
      </div>
    </div>
  )
})
