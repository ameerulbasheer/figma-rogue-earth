import { SectionHeader } from '../common/SectionHeader'

export function SyncMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Sync Moves</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        <p>Gain 1 Sync whenever you succeed (Difference 0-1) on an Action roll.</p>

        <SyncMove
          cost="2 Sync"
          name="Help"
          description="When an ally makes an Action roll, you can use this move to roll an additional d6. You must substitute one of their Action roll dice with it"
        />
        <SyncMove
          cost="2 Sync"
          name="Practiced Defence"
          description="During an Adversary roll (against you or an ally), you may invoke a relevant practiced Experience to negate one adversary dice that matches the dice value of the Experience in order to negate the hit."
        />
        <SyncMove
          cost="2 Sync"
          name="Try Something Else"
          description="When you get anything less than a full success on an Action or Reaction roll using an Experience, you can use a different practiced Experience instead in order to get a better result."
        />
        <SyncMove
          cost="3 Sync"
          name="I'll Take Over"
          description="Take over as leader of a Group roll before the final results are resolved."
        />
        <SyncMove
          cost="5 Sync split between players, once per session"
          name="Tag Team"
          description="On your own turn, you may start a Tag Team with an ally. Roll 4d6 together and select two dice to use for a shared Action roll. Apply the result twice (once for each player)."
        />
        <SyncMove
          cost="10 Sync split between players"
          name="Not Done Yet"
          description="When an ally has no Hope or Courage left, you can initiate this move. Divide 8 Hope and 8 Courage between all players involved."
        />
      </div>
    </div>
  )
}

function SyncMove({ cost, name, description }) {
  return (
    <div className="border-l-2 border-dark-grey pl-3">
      <div className="flex items-baseline gap-2 mb-1">
        <span className="font-mono text-xs border border-dark-grey px-1 rounded">{cost}</span>
        <span className="font-mono font-bold text-dark-grey">{name}</span>
      </div>
      <div className="text-xs text-mid-grey">{description}</div>
    </div>
  )
}
