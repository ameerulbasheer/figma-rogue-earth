import { SectionHeader } from '../common/SectionHeader'

export function IntermissionMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Intermission Moves</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        <p>
          Between sessions or story arcs, the group enters an <strong>Intermission</strong>. Each character takes two Intermission moves. Necessities must be paid before moves are taken.
        </p>
        <div className="border-l-2 border-dark-grey pl-3 flex flex-col gap-2">
          <IntermissionMove name="Recover" text="Fill all empty Hope and Courage slots. Remove all conditions." />
          <IntermissionMove name="Gather Resources" text="Collect Chits up to your current Necessity collect targets. Describe how." />
          <IntermissionMove name="Pursue a Lead" text="Roll +HOPE. On 10+, you gain concrete information about a threat, opportunity, or person. On 7–9, you gain a rumour or partial truth. On 6−, a complication arises." />
          <IntermissionMove name="Strengthen a Bond" text="Write a new or deepen an existing bond with another character or NPC. If with a PC, both must agree." />
          <IntermissionMove name="Study" text="Mark an Experience as being actively studied. At the next Intermission it upgrades from Learned to Practiced for free." />
          <IntermissionMove name="Lay Low" text="Avoid attention. Take +1 forward to any move to avoid detection next session." />
          <IntermissionMove name="Spend Growth" text="Spend Growth points to take Growth moves." />
        </div>
        <p className="text-xs text-mid-grey italic">
          Necessity upkeep: subtract each necessity's Upkeep value from your stockpile. If a necessity drops to 0, the GM narrates a consequence at the start of the next session.
        </p>
      </div>
    </div>
  )
}

function IntermissionMove({ name, text }) {
  return (
    <div>
      <div className="font-mono font-bold text-sm">{name}</div>
      <p className="text-xs mt-0.5">{text}</p>
    </div>
  )
}
