import { memo } from 'react'
import { SectionHeader } from '../common/SectionHeader'
import data from '../../constants/rules/restMoves.json'

export const RestMoves = memo(function RestMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>{data.title}</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        {data.sections.map(s => (
          <div key={s.heading} className="border-l-2 border-dark-grey pl-3 mb-4">
            <div className="font-mono font-bold text-dark-grey mb-2">{s.heading}</div>
            {s.intro && <div className="text-xs text-mid-grey mb-2">{s.intro}</div>}
            {s.moves?.map(m => (
              <div key={m.name} className="mb-2">
                <div className="font-mono text-xs font-bold text-dark-grey mb-1">{m.name}</div>
                {m.desc && <div className="text-xs text-mid-grey">{m.desc}</div>}
                {m.options && (
                  <div className="text-xs text-mid-grey ml-2">
                    {m.options.map((opt, i) => (
                      <div key={i} className="mb-1">&bull; {opt}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
})
