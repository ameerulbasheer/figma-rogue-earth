import { SectionHeader } from '../common/SectionHeader'

export function SyncMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Sync Moves</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        <p>
          Spend <strong>Sync</strong> when the group acts in unison. Sync is a shared resource — discuss as a table before spending it.
        </p>
        <div className="border-l-2 border-dark-grey pl-3 flex flex-col gap-2">
          <SyncMove
            cost="1 Sync"
            name="United Front"
            text="When the whole group acts together, treat any result of 6− as a 7–9 instead."
          />
          <SyncMove
            cost="1 Sync"
            name="Cover Me"
            text="One character takes all harm meant for the group this scene; they also take +1 forward to Act Under Pressure."
          />
          <SyncMove
            cost="2 Sync"
            name="Rally"
            text="Every character fills one Hope or Courage slot."
          />
          <SyncMove
            cost="2 Sync"
            name="Against All Odds"
            text="On a 6−, you may spend 2 Sync to treat the result as a 10+ instead. Narrate how against the odds the group succeeds."
          />
          <SyncMove
            cost="3 Sync"
            name="Moment of Truth"
            text="The group resolves a major threat or obstacle entirely through collective effort. The GM must honour this as a full success, but each character must describe what they sacrificed or risked."
          />
        </div>
        <p className="text-xs text-mid-grey italic">
          Sync is regained at the start of each session and through certain Growth moves.
        </p>
      </div>
    </div>
  )
}

function SyncMove({ cost, name, text }) {
  return (
    <div>
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-xs border border-dark-grey px-1 rounded">{cost}</span>
        <span className="font-mono font-bold text-sm">{name}</span>
      </div>
      <p className="text-xs mt-0.5">{text}</p>
    </div>
  )
}
