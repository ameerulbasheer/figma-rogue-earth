import { SectionHeader } from '../common/SectionHeader'

export function VirtueAndTormentRules() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Virtue & Torment</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        <div className="border-l-2 border-dark-grey pl-3">
          <div className="font-mono font-bold text-dark-grey mb-2">Test Resolve</div>
          <div className="text-xs text-mid-grey mb-2">When you Test Resolve, make a Reaction roll.</div>
          <ul className="flex flex-col gap-0.5 mb-3">
            <li className="flex gap-2 text-xs">
              <span className="font-mono font-bold flex-shrink-0 w-12">Diff 0-1</span>
              <span>Become Virtuous</span>
            </li>
            <li className="flex gap-2 text-xs">
              <span className="font-mono font-bold flex-shrink-0 w-12">Diff 2+</span>
              <span>Become Tormented</span>
            </li>
          </ul>
        </div>

        <div className="border-l-2 border-dark-grey pl-3">
          <div className="font-mono font-bold text-dark-grey mb-2">Virtue</div>
          <div className="text-xs text-mid-grey mb-2">The following are in effect whenever you receive your Virtue Condition</div>

          <div className="mb-2">
            <div className="font-mono text-xs font-bold text-dark-grey mb-1">Stalwart [HOPE]</div>
            <div className="text-xs text-mid-grey">Whenever you make an Action roll in line with your Virtue, +1 Hope. If your Hope Slots are already full, give +1 Hope to an ally.</div>
          </div>

          <div className="mb-2">
            <div className="font-mono text-xs font-bold text-dark-grey mb-1">Virtue [COURAGE]</div>
            <div className="text-xs text-mid-grey">Whenever you make an Action roll in line with your Virtue, +1 Courage. If your Courage Slots are already full, give +1 Courage to an ally.</div>
          </div>

          <div className="text-xs text-mid-grey italic">Clear Virtuous at the end of rest or during travel.</div>
        </div>

        <div className="border-l-2 border-dark-grey pl-3">
          <div className="font-mono font-bold text-dark-grey mb-2">Torment</div>
          <div className="text-xs text-mid-grey mb-2">The following are in effect whenever you receive your Torment Condition</div>

          <div className="mb-2">
            <div className="font-mono text-xs font-bold text-dark-grey mb-1">Torment [HOPE]</div>
            <div className="text-xs text-mid-grey">You cannot gain Hope. Whenever you make an Action roll in accordance with your Torment, you may Test Resolve again.</div>
          </div>

          <div className="mb-2">
            <div className="font-mono text-xs font-bold text-dark-grey mb-1">Torment [COURAGE]</div>
            <div className="text-xs text-mid-grey">You cannot gain Courage. Whenever you make an Action roll in accordance with your Torment, you may Test Resolve again.</div>
          </div>

          <div className="text-xs text-mid-grey italic">Clear Tormented at the end of rest or during travel.</div>
        </div>
      </div>
    </div>
  )
}
