import { SectionHeader } from '../common/SectionHeader'

export function GrowthMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Growth Moves</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        <p>
          Spend <strong>Growth</strong> after a session or at an Intermission to permanently improve your character.
        </p>
        <div className="border-l-2 border-dark-grey pl-3 flex flex-col gap-2">
          <GrowthMove cost="1" name="Unlock a Slot" text="Unlock one additional Hope or Courage slot (max 6 each)." />
          <GrowthMove cost="1" name="Deepen an Experience" text="Upgrade one Learned experience to Practiced, or increase its die value by 1 (max d6)." />
          <GrowthMove cost="2" name="New Experience" text="Add a new experience slot to your sheet." />
          <GrowthMove cost="2" name="Increase Sync Pool" text="The group's maximum Sync increases by 1 (requires group agreement)." />
          <GrowthMove cost="3" name="Rewrite a Virtue or Torment" text="Change the text of your Virtue or Torment to reflect how you have changed. The effect (Hope or Courage) may also change." />
          <GrowthMove cost="3" name="Resolve a Bond" text="Mark a relationship as fully resolved. Gain a permanent +1 forward when directly protecting or avenging that person." />
        </div>
        <p className="text-xs text-mid-grey italic">
          Growth is earned through fiction: mark it when you overcame a significant challenge, changed your perspective, or helped someone else grow.
        </p>
      </div>
    </div>
  )
}

function GrowthMove({ cost, name, text }) {
  return (
    <div>
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-xs border border-dark-grey px-1 rounded">{cost}G</span>
        <span className="font-mono font-bold text-sm">{name}</span>
      </div>
      <p className="text-xs mt-0.5">{text}</p>
    </div>
  )
}
