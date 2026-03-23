import { SectionHeader } from '../common/SectionHeader'
import { ExperienceTracker } from './ExperienceTracker'

export function ExperienceSection({ experiences, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Experiences</SectionHeader>
      <div className="px-2 flex flex-col gap-2">
        {experiences.map((exp, i) => (
          <ExperienceTracker
            key={i}
            index={i}
            experience={exp}
            onChange={(field, value) => {
              const next = experiences.map((e, j) => j === i ? { ...e, [field]: value } : e)
              onChange(next)
            }}
          />
        ))}
      </div>
    </div>
  )
}
