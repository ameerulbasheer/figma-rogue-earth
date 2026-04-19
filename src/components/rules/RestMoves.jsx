import { SectionHeader } from '../common/SectionHeader'

export function RestMoves() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Rest Moves</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">

        <div className="border-l-2 border-dark-grey pl-3 mb-4">
          <div className="font-mono font-bold text-dark-grey mb-2">Short Rest</div>
          <div className="text-xs text-mid-grey mb-2">Perform Short Rest Moves (up to once each) whenever you take a breather (10-30 minutes). You may choose to do so alone or Together (effects apply to every player involved). At the end of the short rest, the GM gains 2 Hazard.</div>

          <div className="mb-2">
            <div className="font-mono text-xs font-bold text-dark-grey mb-1">Double-Check</div>
            <div className="text-xs text-mid-grey">+1 Courage. Together: +2 Courage instead.</div>
          </div>

          <div className="mb-2">
            <div className="font-mono text-xs font-bold text-dark-grey mb-1">Recall Objective</div>
            <div className="text-xs text-mid-grey">+1 Hope. Together: +2 Hope instead.</div>
          </div>
        </div>

        <div className="border-l-2 border-dark-grey pl-3 mb-4">
          <div className="font-mono font-bold text-dark-grey mb-2">Long Rest</div>
          <div className="text-xs text-mid-grey mb-2">Perform Long Rest Moves (up to once each) whenever you settle down for 8 hours or more. You may choose to do so alone or Together (effects apply to every player involved). At the end of the long rest, the GM gains Hazard equal to 2 + number of players.</div>

          <div className="mb-2">
            <div className="font-mono text-xs font-bold text-dark-grey mb-1">Feast</div>
            <div className="text-xs text-mid-grey">+1 Hope, +1 Courage, Upkeep Food and Water. Together: Additional +1 Hope and +1 Courage.</div>
          </div>

          <div className="mb-2">
            <div className="font-mono text-xs font-bold text-dark-grey mb-1">Spare Time (choose one)</div>
            <div className="text-xs text-mid-grey ml-2">
              <div className="mb-1">• Explore Vicinity: Look for an opportunity nearby. Together: Additional +1 Hope/Courage.</div>
              <div className="mb-1">• Extra Preparations: +2 Courage. Together: +3 Courage instead.</div>
              <div className="mb-1">• Self-Expression: +2 Hope. Together: +3 Hope instead.</div>
              <div>• Sleep: You MUST sleep. Comfortable sleep: +1 Hope, +1 Courage. Refuse Sleep, -1 Hope, -1 Courage.</div>
            </div>
          </div>
        </div>

        <div className="border-l-2 border-dark-grey pl-3">
          <div className="font-mono font-bold text-dark-grey mb-2">Support Moves</div>
          <div className="text-xs text-mid-grey mb-2">Support moves are available to you whenever you share a moment with allies while doing a Rest move Together. You may use each of these moves once per rest.</div>

          <div className="mb-2">
            <div className="font-mono text-xs font-bold text-dark-grey mb-1">Inspire</div>
            <div className="text-xs text-mid-grey">Choose one: +1 Hope for allies if you are Virtuous (HOPE) OR have 4 or more Hope. +1 Courage for allies if you are Virtuous (COURAGE) OR have 4 or more Courage. In a single session of rest, an ally can only gain 1 Hope and 1 Courage from Inspire.</div>
          </div>

          <div className="mb-2">
            <div className="font-mono text-xs font-bold text-dark-grey mb-1">Empathise</div>
            <div className="text-xs text-mid-grey">Pool and redistribute Hope and Courage (separately).</div>
          </div>
        </div>

      </div>
    </div>
  )
}
