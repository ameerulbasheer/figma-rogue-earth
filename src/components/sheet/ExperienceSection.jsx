import { memo } from 'react'
import { SectionHeader } from '../common/SectionHeader'
import { ExperienceTracker } from './ExperienceTracker'

export const ExperienceSection = memo(function ExperienceSection({ experiences, onChange, readOnly }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Experiences</SectionHeader>
      <div className="px-2 flex flex-col gap-2">
        {experiences.map((exp, i) => (
            <ExperienceTracker
              key={i}
              index={i}
              experience={exp}
              readOnly={readOnly}
              onChange={(field, value) => {
                const next = experiences.map((e, j) => j === i ? { ...e, [field]: value } : e)
                onChange(next)
              }}
            />
        ))}
      </div>
    </div>
  )
})
