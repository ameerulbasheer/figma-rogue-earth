import { SectionHeader } from '../common/SectionHeader'

export function BasicMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Basic Moves</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        <Move
          name="Action Roll"
          description="When your character wants to undertake a challenging (not impossible) action that has narrative consequences, the GM will call for you to make an Action roll."
          mechanics="Before you roll, you can discuss with the GM if your character's Experience can apply to your Action roll. Then, roll 2d6 and calculate the Difference between dice values to determine the degree of success. The smaller the Difference, the better."
          outcomes={[
            { range: '0', text: '⚀⚀ – Full success, +1 Hope/Courage, +1 Sync, take another turn or spotlight an ally' },
            { range: '1', text: '⚀⚁ – Mixed success, +1 Sync' },
            { range: '2', text: '⚀⚂ – Fail forwards, (GM) +1 Hazard' },
            { range: '3-4', text: '⚀⚄ – Fail, (GM) +1 Hazard' },
            { range: '5', text: '⚀⚅ – Fail, (GM) +2 Hazard' }
          ]}
        />
        <Move
          name="Reaction Roll"
          description="You make a Reaction roll in response to certain triggers, like when your character's resolve is tested (see Test Resolve under Virtue and Torment)."
          mechanics="To resolve a Reaction roll, follow the same steps for an Action roll and calculate the Difference. The possible outcomes of a Reaction roll is determined by its trigger."
        />
        <Move
          name="Group Roll"
          description="The leader for the Group roll makes an Action roll, while everybody else makes a Reaction roll; the majority result will be the ultimate result of the Group roll."
          mechanics="In the case of a tie, take the worse result. If the leader of the Group roll is using an Experience, he can use it to improve the result of the other players' Reaction rolls (once for each player)."
          outcomes={[
            { range: '0', text: '⚀⚀ – Full success' },
            { range: '1', text: '⚀⚁ – Mixed success' },
            { range: '2', text: '⚀⚂ – Fail forwards' },
            { range: '3-5', text: '⚅ – Fail' }
          ]}
        />
      </div>
    </div>
  )
}

function Move({ name, description, mechanics, outcomes, extra }) {
  return (
    <div className="border-l-2 border-dark-grey pl-3">
      <div className="font-mono font-bold text-dark-grey">{name}</div>
      <div className="text-xs text-mid-grey mb-2">{description}</div>
      {mechanics && <div className="text-xs text-dark-grey mb-2 italic">{mechanics}</div>}
      {outcomes && (
        <ul className="flex flex-col gap-0.5 mb-2">
          {outcomes.map(r => (
            <li key={r.range} className="flex gap-2 text-xs">
              <span className="font-mono font-bold flex-shrink-0 w-16">Diff {r.range}</span>
              <span>{r.text}</span>
            </li>
          ))}
        </ul>
      )}
      {extra && <div className="text-xs text-mid-grey mt-1 italic">{extra}</div>}
    </div>
  )
}
