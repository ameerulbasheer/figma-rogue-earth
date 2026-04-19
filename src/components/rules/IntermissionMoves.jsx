import { SectionHeader } from '../common/SectionHeader'

export function IntermissionMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Intermission Moves</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        <p>Intermission happens between sessions, during which you may perform one Intermission move.</p>

        <IntermissionMove
          name="Flashback"
          description="Discuss with the GM to write down a new learned Experience in an empty slot in order to expand on character background or foreshadow character development."
        />
        <IntermissionMove
          name="Reflect"
          description="Swap around your Experiences."
        />
        <IntermissionMove
          name="Extended Downtime"
          description="When your character has at least a few days of downtime, you can use this move. Choose two:"
          options={[
            "Procure supplies: Choose a starting pack of chits and necessities (see Character Creation).",
            "Take on responsibility: Add a new Necessity at Collect 10.",
            "Investigate and explore: Glean new information about your next venture."
          ]}
          effect="At the end of downtime, everyone's Hope and Courage are reset to half of their total Hope/Courage slots, and the GM gains +1 Hazard per player."
        />
      </div>
    </div>
  )
}

function IntermissionMove({ name, description, options, effect }) {
  return (
    <div className="border-l-2 border-dark-grey pl-3">
      <div className="font-mono font-bold text-dark-grey mb-1">{name}</div>
      <div className="text-xs text-mid-grey mb-2">{description}</div>
      {options && (
        <ul className="text-xs text-mid-grey mb-2 ml-2">
          {options.map((option, index) => (
            <li key={index} className="mb-1">• {option}</li>
          ))}
        </ul>
      )}
      {effect && <div className="text-xs text-mid-grey italic">{effect}</div>}
    </div>
  )
}
