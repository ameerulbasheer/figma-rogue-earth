import { memo } from 'react'
import { SectionHeader } from '../common/SectionHeader'
import { HopeTracker } from './HopeTracker'
import { CourageTracker } from './CourageTracker'
import { VirtueTracker } from './VirtueTracker'
import { TormentTracker } from './TormentTracker'

export const ResolveSection = memo(function ResolveSection({ resolve, virtue, torment, onResolveToggle, onVirtueChange, onTormentChange, readOnly }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Resolve</SectionHeader>
      <div className="px-2 flex flex-col gap-3">
        <HopeTracker
          hope={resolve.hope}
          onToggle={i => onResolveToggle('hope', i)}
          disabled={readOnly}
        />
        <CourageTracker
          courage={resolve.courage}
          onToggle={i => onResolveToggle('courage', i)}
          disabled={readOnly}
        />
        <div className="grid grid-cols-2 gap-2 mt-1">
          <VirtueTracker virtue={virtue} onChange={onVirtueChange} readOnly={readOnly} />
          <TormentTracker torment={torment} onChange={onTormentChange} readOnly={readOnly} />
        </div>
      </div>
    </div>
  )
})
