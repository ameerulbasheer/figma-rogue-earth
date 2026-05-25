import { memo } from 'react'
import { SectionHeader } from '../common/SectionHeader'
import moves from '../../constants/rules/basicMoves.json'

export const BasicMoves = memo(function BasicMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>{moves.title}</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        {moves.moves.map(m => (
          <div key={m.name} className="border-l-2 border-dark-grey pl-3">
            <div className="font-mono font-bold text-dark-grey">{m.name}</div>
            <div className="text-xs text-mid-grey mb-2">{m.description}</div>
            {m.mechanics && <div className="text-xs text-dark-grey mb-2 italic">{m.mechanics}</div>}
            {m.outcomes && (
              <ul className="flex flex-col gap-0.5 mb-2">
                {m.outcomes.map(r => (
                  <li key={r.range} className="flex gap-2 text-xs">
                    <span className="font-mono font-bold flex-shrink-0 w-16">Diff {r.range}</span>
                    <span>{r.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
})
