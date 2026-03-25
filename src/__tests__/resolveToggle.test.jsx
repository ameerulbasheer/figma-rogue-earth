import { useState } from 'react'
import { render, screen, within, fireEvent } from '@testing-library/react'
import { CharacterSheet } from '../components/sheet/CharacterSheet'
import { initialState } from '../constants/initialState'

// Wrapper that manages state the same way App does
function Wrapper({ resolve }) {
  const [state, setState] = useState({ ...initialState, resolve })
  return <CharacterSheet state={state} setState={setState} />
}

function getHopeSlots(resolve) {
  render(<Wrapper resolve={resolve} />)
  return () =>
    within(screen.getByText('Hope').parentElement).getAllByRole('button')
}

function getCourageSlots(resolve) {
  render(<Wrapper resolve={resolve} />)
  return () =>
    within(screen.getByText('Courage').parentElement).getAllByRole('button')
}

// ---------- Hope 4-state cycle ----------

describe('Hope resolve toggle — 4-state cycle', () => {
  it('clicking a locked slot unlocks it (locked → empty)', () => {
    const slots = getHopeSlots({
      hope: { unlocked: 2, filled: 1 },
      courage: { unlocked: 2, filled: 1 },
    })

    expect(slots()[2]).toHaveAttribute('aria-label', 'Locked slot')
    fireEvent.click(slots()[2])
    expect(slots()[2]).toHaveAttribute('aria-label', 'Empty slot')
  })

  it('clicking an empty last-unlocked slot fills it (empty → filled)', () => {
    const slots = getHopeSlots({
      hope: { unlocked: 3, filled: 2 },
      courage: { unlocked: 2, filled: 1 },
    })

    expect(slots()[2]).toHaveAttribute('aria-label', 'Empty slot')
    fireEvent.click(slots()[2])
    expect(slots()[2]).toHaveAttribute('aria-label', 'Filled slot')
  })

  it('clicking a filled last-unlocked slot unfills it (filled → empty), does NOT lock', () => {
    const slots = getHopeSlots({
      hope: { unlocked: 3, filled: 3 },
      courage: { unlocked: 2, filled: 1 },
    })

    expect(slots()[2]).toHaveAttribute('aria-label', 'Filled slot')
    fireEvent.click(slots()[2])
    expect(slots()[2]).toHaveAttribute('aria-label', 'Empty slot')
  })

  it('clicking empty last-unlocked slot after an unfill locks it (empty → locked)', () => {
    const slots = getHopeSlots({
      hope: { unlocked: 3, filled: 3 },
      courage: { unlocked: 2, filled: 1 },
    })

    // filled → empty (sets readyToLock)
    fireEvent.click(slots()[2])
    expect(slots()[2]).toHaveAttribute('aria-label', 'Empty slot')

    // empty → locked (readyToLock triggers)
    fireEvent.click(slots()[2])
    expect(slots()[2]).toHaveAttribute('aria-label', 'Locked slot')
  })

  it('the full 4-state cycle: locked → empty → filled → empty → locked', () => {
    const slots = getHopeSlots({
      hope: { unlocked: 2, filled: 1 },
      courage: { unlocked: 2, filled: 1 },
    })

    expect(slots()[2]).toHaveAttribute('aria-label', 'Locked slot')

    fireEvent.click(slots()[2]) // locked → empty
    expect(slots()[2]).toHaveAttribute('aria-label', 'Empty slot')

    fireEvent.click(slots()[2]) // empty → filled
    expect(slots()[2]).toHaveAttribute('aria-label', 'Filled slot')

    fireEvent.click(slots()[2]) // filled → empty (readyToLock set)
    expect(slots()[2]).toHaveAttribute('aria-label', 'Empty slot')

    fireEvent.click(slots()[2]) // empty → locked (readyToLock consumed)
    expect(slots()[2]).toHaveAttribute('aria-label', 'Locked slot')
  })
})

// ---------- Hope multi-slot behaviour ----------

describe('Hope resolve toggle — multi-slot behaviour', () => {
  it('clicking a locked slot unlocks all slots up to and including it', () => {
    const slots = getHopeSlots({
      hope: { unlocked: 0, filled: 0 },
      courage: { unlocked: 2, filled: 1 },
    })

    fireEvent.click(slots()[2]) // click slot index 2
    expect(slots()[0]).toHaveAttribute('aria-label', 'Empty slot')
    expect(slots()[1]).toHaveAttribute('aria-label', 'Empty slot')
    expect(slots()[2]).toHaveAttribute('aria-label', 'Empty slot')
    expect(slots()[3]).toHaveAttribute('aria-label', 'Locked slot')
  })

  it('clicking a non-last filled slot unfills from that point without locking', () => {
    const slots = getHopeSlots({
      hope: { unlocked: 3, filled: 3 },
      courage: { unlocked: 2, filled: 1 },
    })

    fireEvent.click(slots()[1]) // unfill from slot 1 onwards
    expect(slots()[0]).toHaveAttribute('aria-label', 'Filled slot')
    expect(slots()[1]).toHaveAttribute('aria-label', 'Empty slot')
    expect(slots()[2]).toHaveAttribute('aria-label', 'Empty slot')
    // slot 2 is still unlocked (not locked)
    expect(slots()[3]).toHaveAttribute('aria-label', 'Locked slot')
  })

  it('clicking a non-last empty slot fills up to and including it', () => {
    const slots = getHopeSlots({
      hope: { unlocked: 3, filled: 0 },
      courage: { unlocked: 2, filled: 1 },
    })

    fireEvent.click(slots()[1]) // fill up to slot 1
    expect(slots()[0]).toHaveAttribute('aria-label', 'Filled slot')
    expect(slots()[1]).toHaveAttribute('aria-label', 'Filled slot')
    expect(slots()[2]).toHaveAttribute('aria-label', 'Empty slot')
  })

  it('readyToLock is cleared when a different slot is clicked', () => {
    const slots = getHopeSlots({
      hope: { unlocked: 2, filled: 2 },
      courage: { unlocked: 2, filled: 1 },
    })

    // unfill last slot → sets readyToLock for slot 1
    fireEvent.click(slots()[1])
    expect(slots()[1]).toHaveAttribute('aria-label', 'Empty slot')

    // click a different slot (slot 0 is filled) → unfills from 0, clears readyToLock
    fireEvent.click(slots()[0])
    expect(slots()[0]).toHaveAttribute('aria-label', 'Empty slot')
    expect(slots()[1]).toHaveAttribute('aria-label', 'Empty slot')
    // slot 1 should still be unlocked (not locked)
    expect(slots()[2]).toHaveAttribute('aria-label', 'Locked slot')

    // click slot 1 (empty, readyToLock should be -1 now) → should fill, not lock
    fireEvent.click(slots()[1])
    expect(slots()[1]).toHaveAttribute('aria-label', 'Filled slot')
  })
})

// ---------- Courage tracks independently ----------

describe('Courage resolve toggle', () => {
  it('courage 4-state cycle is independent of hope', () => {
    const courageSlots = getCourageSlots({
      hope: { unlocked: 2, filled: 1 },
      courage: { unlocked: 3, filled: 3 },
    })

    expect(courageSlots()[2]).toHaveAttribute('aria-label', 'Filled slot')
    fireEvent.click(courageSlots()[2]) // filled → empty
    expect(courageSlots()[2]).toHaveAttribute('aria-label', 'Empty slot')
    fireEvent.click(courageSlots()[2]) // empty → locked
    expect(courageSlots()[2]).toHaveAttribute('aria-label', 'Locked slot')
  })
})
