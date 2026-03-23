import { SectionHeader } from '../common/SectionHeader'

export function RestMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Rest Moves</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        <p>
          When the group takes a short break from danger, each character may take one Rest move. Describe what your character does to rest.
        </p>
        <div className="border-l-2 border-dark-grey pl-3 flex flex-col gap-2">
          <RestMove name="Catch Your Breath" text="Fill one empty Hope or Courage slot." />
          <RestMove name="Tend to a Wound" text="Remove one condition, stress, or complication." />
          <RestMove name="Share a Moment" text="Describe a quiet, personal moment with another character. Both characters gain +1 Sync (up to max)." />
          <RestMove name="Reflect" text="Deactivate your Virtue or Torment if it was active. Optionally, describe what you realised or felt." />
          <RestMove name="Prepare" text="Spend a Chit to take +1 forward to your next roll, describing how you prepare." />
        </div>
        <p className="text-xs text-mid-grey italic">
          A rest requires narrative space — you cannot rest if you are in immediate danger.
        </p>
      </div>
    </div>
  )
}

function RestMove({ name, text }) {
  return (
    <div>
      <div className="font-mono font-bold text-sm">{name}</div>
      <p className="text-xs mt-0.5">{text}</p>
    </div>
  )
}
