import { BasicMoves } from './BasicMoves'
import { VirtueAndTormentRules } from './VirtueAndTormentRules'
import { SyncMoves } from './SyncMoves'
import { GrowthMoves } from './GrowthMoves'
import { RestMoves } from './RestMoves'
import { IntermissionMoves } from './IntermissionMoves'

export function RulesReference() {
  return (
    <div className="flex flex-col gap-6 p-4 w-full max-w-[842px] mx-auto">
      <div className="font-mono text-xl text-dark-grey border-b-2 border-dark-grey pb-2">
        Rules Reference
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <BasicMoves />
          <VirtueAndTormentRules />
          <SyncMoves />
        </div>
        <div className="flex flex-col gap-6">
          <GrowthMoves />
          <RestMoves />
          <IntermissionMoves />
        </div>
      </div>
    </div>
  )
}
