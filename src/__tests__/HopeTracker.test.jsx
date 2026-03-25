import { render, screen, within, fireEvent } from '@testing-library/react'
import { HopeTracker } from '../components/sheet/HopeTracker'

function getHopeButtons(hope) {
  render(<HopeTracker hope={hope} onToggle={() => {}} />)
  return within(screen.getByText('Hope').parentElement).getAllByRole('button')
}

describe('HopeTracker', () => {
  it('renders 6 slots total', () => {
    const buttons = getHopeButtons({ unlocked: 2, filled: 1 })
    expect(buttons).toHaveLength(6)
  })

  it('filled slots render as filled', () => {
    const buttons = getHopeButtons({ unlocked: 3, filled: 2 })
    expect(buttons[0]).toHaveAttribute('aria-label', 'Filled slot')
    expect(buttons[1]).toHaveAttribute('aria-label', 'Filled slot')
  })

  it('unlocked-but-unfilled slots render as empty', () => {
    const buttons = getHopeButtons({ unlocked: 3, filled: 1 })
    expect(buttons[1]).toHaveAttribute('aria-label', 'Empty slot')
    expect(buttons[2]).toHaveAttribute('aria-label', 'Empty slot')
  })

  it('slots beyond unlocked render as locked', () => {
    const buttons = getHopeButtons({ unlocked: 2, filled: 1 })
    expect(buttons[2]).toHaveAttribute('aria-label', 'Locked slot')
    expect(buttons[5]).toHaveAttribute('aria-label', 'Locked slot')
  })

  it('all slots locked when unlocked=0', () => {
    const buttons = getHopeButtons({ unlocked: 0, filled: 0 })
    buttons.forEach(btn => expect(btn).toHaveAttribute('aria-label', 'Locked slot'))
  })

  it('all slots filled when filled=unlocked=6', () => {
    const buttons = getHopeButtons({ unlocked: 6, filled: 6 })
    buttons.forEach(btn => expect(btn).toHaveAttribute('aria-label', 'Filled slot'))
  })

  it('calls onToggle with correct index when slot is clicked', () => {
    const onToggle = vi.fn()
    render(<HopeTracker hope={{ unlocked: 3, filled: 1 }} onToggle={onToggle} />)
    const buttons = within(screen.getByText('Hope').parentElement).getAllByRole('button')
    fireEvent.click(buttons[2])
    expect(onToggle).toHaveBeenCalledWith(2)
  })

  it('calls onToggle with index 0 for the first slot', () => {
    const onToggle = vi.fn()
    render(<HopeTracker hope={{ unlocked: 2, filled: 1 }} onToggle={onToggle} />)
    const buttons = within(screen.getByText('Hope').parentElement).getAllByRole('button')
    fireEvent.click(buttons[0])
    expect(onToggle).toHaveBeenCalledWith(0)
  })
})
