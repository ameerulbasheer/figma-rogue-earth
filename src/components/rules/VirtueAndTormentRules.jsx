import { memo } from 'react'
import { SectionHeader } from '../common/SectionHeader'
import data from '../../constants/rules/virtueTorment.json'

export const VirtueAndTormentRules = memo(function VirtueAndTormentRules() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>{data.title}</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        {data.sections.map(s => (
          <div key={s.heading} className="border-l-2 border-dark-grey pl-3">
            <div className="font-mono font-bold text-dark-grey mb-2">{s.heading}</div>
            <div className="text-xs text-mid-grey mb-2">{s.body}</div>
            {s.outcomes && (
              <ul className="flex flex-col gap-0.5 mb-3">
                {s.outcomes.map(o => (
                  <li key={o.range} className="flex gap-2 text-xs">
                    <span className="font-mono font-bold flex-shrink-0 w-12">{o.range}</span>
                    <span>{o.text}</span>
                  </li>
                ))}
              </ul>
            )}
            {s.subsections?.map(sub => (
              <div key={sub.heading} className="mb-2">
                <div className="font-mono text-xs font-bold text-dark-grey mb-1">{sub.heading}</div>
                <div className="text-xs text-mid-grey">{sub.text}</div>
              </div>
            ))}
            {s.footer && <div className="text-xs text-mid-grey italic">{s.footer}</div>}
          </div>
        ))}
      </div>
    </div>
  )
})
