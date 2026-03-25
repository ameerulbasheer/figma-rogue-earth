import { render, screen, within, fireEvent } from '@testing-library/react'
import { CourageTracker } from '../components/sheet/CourageTracker'

function getCourageButtons(courage) {
  render(<CourageTracker courage={courage} onToggle={() => {}} />)
  return within(screen.getByText('Courage').parentElement).getAllByRole('button')
}

describe('CourageTracker', () => {
  it('renders 6 slots total', () => {
    const buttons = getCourageButtons({ unlocked: 2, filled: 1 })
    expect(buttons).toHaveLength(6)
  })

  it('filled slots render as filled', () => {
    const buttons = getCourageButtons({ unlocked: 3, filled: 2 })
    expect(buttons[0]).toHaveAttribute('aria-label', 'Filled slot')
    expect(buttons[1]).toHaveAttribute('aria-label', 'Filled slot')
  })

  it('unlocked-but-unfilled slots render as empty', () => {
    const buttons = getCourageButtons({ unlocked: 3, filled: 1 })
    expect(buttons[1]).toHaveAttribute('aria-label', 'Empty slot')
    expect(buttons[2]).toHaveAttribute('aria-label', 'Empty slot')
  })

  it('slots beyond unlocked render as locked', () => {
    const buttons = getCourageButtons({ unlocked: 2, filled: 1 })
    expect(buttons[2]).toHaveAttribute('aria-label', 'Locked slot')
    expect(buttons[5]).toHaveAttribute('aria-label', 'Locked slot')
  })

  it('all slots locked when unlocked=0', () => {
    const buttons = getCourageButtons({ unlocked: 0, filled: 0 })
    buttons.forEach(btn => expect(btn).toHaveAttribute('aria-label', 'Locked slot'))
  })

  it('calls onToggle with correct index when slot is clicked', () => {
    const onToggle = vi.fn()
    render(<CourageTracker courage={{ unlocked: 3, filled: 1 }} onToggle={onToggle} />)
    const buttons = within(screen.getByText('Courage').parentElement).getAllByRole('button')
    fireEvent.click(buttons[1])
    expect(onToggle).toHaveBeenCalledWith(1)
  })
})
