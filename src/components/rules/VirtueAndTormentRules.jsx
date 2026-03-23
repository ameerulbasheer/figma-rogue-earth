import { SectionHeader } from '../common/SectionHeader'

export function VirtueAndTormentRules() {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader>Virtue & Torment</SectionHeader>
      <div className="px-3 py-2 font-body text-sm text-dark-grey flex flex-col gap-3">
        <p>
          Every character carries a <strong>Virtue</strong> — a personal strength or value — and a <strong>Torment</strong> — a wound, fear, or failing that haunts them.
        </p>
        <p>
          When you act in alignment with your Virtue, mark it <em>active</em>. While active, you may spend your Virtue's resource (Hope or Courage) to add <strong>+1</strong> to a roll made in its spirit.
        </p>
        <p>
          When your Torment is triggered by the fiction, mark it <em>active</em>. While active, the GM may spend your Torment's resource against you, imposing a −1 to a relevant roll or narrating a complication.
        </p>
        <p className="font-mono text-xs text-mid-grey">
          Only one of Virtue or Torment may be active at a time. Activating one deactivates the other.
        </p>
        <div className="border-t border-light-grey pt-2">
          <div className="font-mono text-xs font-bold mb-1">Clearing Conditions</div>
          <p className="text-xs">
            Deactivate your Virtue or Torment when you take a Rest move or when the GM agrees the fiction has resolved the triggering situation.
          </p>
        </div>
      </div>
    </div>
  )
}
