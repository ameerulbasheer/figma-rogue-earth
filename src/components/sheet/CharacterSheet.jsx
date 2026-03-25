import { useState } from 'react'
import { SheetHeader } from './SheetHeader'
import { ResolveSection } from './ResolveSection'
import { CounterPills } from './CounterPills'
import { ExperienceSection } from './ExperienceSection'
import { NecessitySection } from './NecessitySection'
import { InventoryPanel } from './InventoryPanel'
import { NotesPanel } from './NotesPanel'

export function CharacterSheet({ state, setState, mobileTab = 'sheet' }) {
  const [readyToLock, setReadyToLock] = useState({ hope: -1, courage: -1 })

  function handleHeaderChange(field, value) {
    setState(s => ({ ...s, [field]: value }))
  }

  function handleResolveToggle(track, index) {
    const t = state.resolve[track]

    if (index >= t.unlocked) {
      // clicking a locked slot: unlock up to and including it
      setReadyToLock(prev => ({ ...prev, [track]: -1 }))
      setState(s => ({
        ...s,
        resolve: { ...s.resolve, [track]: { ...s.resolve[track], unlocked: index + 1 } },
      }))
      return
    }

    if (index === t.unlocked - 1 && index < t.filled) {
      // last unlocked slot, currently filled → unfill and mark ready to lock
      setReadyToLock(prev => ({ ...prev, [track]: index }))
      setState(s => ({
        ...s,
        resolve: { ...s.resolve, [track]: { ...s.resolve[track], filled: index } },
      }))
      return
    }

    if (index === t.unlocked - 1 && index >= t.filled && readyToLock[track] === index) {
      // last unlocked slot, currently empty, was just unfilled → lock it back
      setReadyToLock(prev => ({ ...prev, [track]: -1 }))
      setState(s => ({
        ...s,
        resolve: { ...s.resolve, [track]: { ...s.resolve[track], unlocked: index } },
      }))
      return
    }

    // clicking filled slot: unfill from here
    // clicking empty slot: fill up to and including it
    const newFilled = index < t.filled ? index : index + 1
    setReadyToLock(prev => ({ ...prev, [track]: -1 }))
    setState(s => ({
      ...s,
      resolve: { ...s.resolve, [track]: { ...s.resolve[track], filled: newFilled } },
    }))
  }

  function handleVirtueChange(field, value) {
    setState(s => ({ ...s, virtue: { ...s.virtue, [field]: value } }))
  }

  function handleTormentChange(field, value) {
    setState(s => ({ ...s, torment: { ...s.torment, [field]: value } }))
  }

  function handleCounterChange(field, value) {
    setState(s => ({ ...s, [field]: value }))
  }

  function handleExperiencesChange(next) {
    setState(s => ({ ...s, experiences: next }))
  }

  function handleNecessitiesChange(next) {
    setState(s => ({ ...s, necessities: next }))
  }

  const leftColClass = mobileTab === 'log'
    ? 'hidden md:flex md:flex-col md:gap-4'
    : 'flex flex-col gap-4'

  const rightColClass = mobileTab === 'sheet'
    ? 'hidden md:flex md:flex-col md:gap-4'
    : 'flex flex-col gap-4'

  return (
    <div className="flex flex-col gap-4 p-4 w-full max-w-[842px] mx-auto">
      <SheetHeader
        name={state.name}
        description={state.description}
        onChange={handleHeaderChange}
      />

      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className={leftColClass}>
          <ResolveSection
            resolve={state.resolve}
            virtue={state.virtue}
            torment={state.torment}
            onResolveToggle={handleResolveToggle}
            onVirtueChange={handleVirtueChange}
            onTormentChange={handleTormentChange}
          />
          <CounterPills
            growth={state.growth}
            sync={state.sync}
            chits={state.chits}
            onChange={handleCounterChange}
          />
          <ExperienceSection
            experiences={state.experiences}
            onChange={handleExperiencesChange}
          />
        </div>

        <div className={rightColClass}>
          <NecessitySection
            necessities={state.necessities}
            onChange={handleNecessitiesChange}
          />
          <InventoryPanel
            inventory={state.inventory}
            onChange={v => setState(s => ({ ...s, inventory: v }))}
          />
          <NotesPanel
            notes={state.notes}
            onChange={v => setState(s => ({ ...s, notes: v }))}
          />
        </div>
      </div>
    </div>
  )
}
