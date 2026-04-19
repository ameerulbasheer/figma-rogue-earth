import { SectionHeader } from '../common/SectionHeader'

export function GrowthMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Growth Moves</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        <p>Use Growth to 'level up' during play. Gain 1 Growth whenever the following occurs: Start of each session, Adding a new Necessity with Upkeep 1, Fulfilling a Necessity (Collect 10).</p>

        <GrowthMove
          cost="1 Growth"
          name="Heart of Hope"
          description="When an Adversary roll hits your Hope, unlock a Hope slot permanently and gain 1 Hope in order to turn the hit into a miss."
        />
        <GrowthMove
          cost="1 Growth"
          name="Courageous Spirit"
          description="When an Adversary hits your Courage, unlock a Courage slot permanently and gain 1 Courage in order to turn the hit into a miss."
        />
        <GrowthMove
          cost="1 Growth"
          name="Better Under Pressure"
          description="When you get anything less than a full success on an Action or Reaction roll using a learned Experience, permanently upgrade the Experience from learned to practiced in order to get a better result."
        />
        <GrowthMove
          cost="1 Growth"
          name="Figured You Out"
          description="When an Adversary roll hits you, permanently upgrade an Experience from learned to practiced and use it to negate damage immediately."
        />
      </div>
    </div>
  )
}

function GrowthMove({ cost, name, description }) {
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
