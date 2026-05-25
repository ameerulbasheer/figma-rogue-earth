import { memo } from 'react'
import { SheetHeader } from './SheetHeader'
import { ResolveSection } from './ResolveSection'
import { CounterPills } from './CounterPills'
import { ExperienceSection } from './ExperienceSection'
import { NecessitySection } from './NecessitySection'
import { InventoryPanel } from './InventoryPanel'
import { NotesPanel } from './NotesPanel'
import { useResolveToggle } from '../../hooks/useResolveToggle'

export const CharacterSheet = memo(function CharacterSheet({ state, setState, mobileTab = 'sheet', readOnly = false }) {
  const onResolveToggle = useResolveToggle(setState)

  function handleHeaderChange(field, value) {
    if (readOnly) return
    setState(s => ({ ...s, [field]: value }))
  }

  function handleVirtueChange(field, value) {
    if (readOnly) return
    setState(s => ({ ...s, virtue: { ...s.virtue, [field]: value } }))
  }

  function handleTormentChange(field, value) {
    if (readOnly) return
    setState(s => ({ ...s, torment: { ...s.torment, [field]: value } }))
  }

  function handleCounterChange(field, value) {
    if (readOnly) return
    setState(s => ({ ...s, [field]: value }))
  }

  function handleExperiencesChange(next) {
    if (readOnly) return
    setState(s => ({ ...s, experiences: next }))
  }

  function handleNecessitiesChange(next) {
    if (readOnly) return
    setState(s => ({ ...s, necessities: next }))
  }

  function handleInventoryChange(v) {
    if (readOnly) return
    setState(s => ({ ...s, inventory: v }))
  }

  function handleNotesChange(v) {
    if (readOnly) return
    setState(s => ({ ...s, notes: v }))
  }

  const leftColClass = mobileTab === 'log'
    ? 'hidden md:flex md:flex-col md:gap-4'
    : 'flex flex-col gap-4'

  const rightColClass = readOnly
    ? 'flex flex-col gap-4'
    : mobileTab === 'sheet'
    ? 'hidden md:flex md:flex-col md:gap-4'
    : 'flex flex-col gap-4'

  return (
    <div className="flex flex-col gap-4 p-4 w-full max-w-[842px] mx-auto">
      <SheetHeader
        name={state.name}
        description={state.description}
        onChange={handleHeaderChange}
        readOnly={readOnly}
      />

      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <div data-testid="sheet-left-col" className={leftColClass}>
          <ResolveSection
            resolve={state.resolve}
            virtue={state.virtue}
            torment={state.torment}
            onResolveToggle={onResolveToggle}
            onVirtueChange={handleVirtueChange}
            onTormentChange={handleTormentChange}
            readOnly={readOnly}
          />
          <CounterPills
            growth={state.growth}
            sync={state.sync}
            chits={state.chits}
            onChange={handleCounterChange}
            readOnly={readOnly}
          />
          <ExperienceSection
            experiences={state.experiences}
            onChange={handleExperiencesChange}
            readOnly={readOnly}
          />
        </div>

        <div data-testid="sheet-right-col" className={rightColClass}>
          <NecessitySection
            necessities={state.necessities}
            onChange={handleNecessitiesChange}
            readOnly={readOnly}
          />
          <InventoryPanel
            inventory={state.inventory}
            onChange={handleInventoryChange}
            readOnly={readOnly}
          />
          <NotesPanel
            notes={state.notes}
            onChange={handleNotesChange}
            readOnly={readOnly}
          />
        </div>
      </div>
    </div>
  )
})
