import { render, screen, fireEvent } from '@testing-library/react'
import { Checkbox } from '../components/common/Checkbox'

describe('Checkbox', () => {
  it('renders filled variant with correct aria-label', () => {
    render(<Checkbox variant="filled" onClick={() => {}} />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Filled slot')
  })

  it('renders locked variant with correct aria-label', () => {
    render(<Checkbox variant="locked" onClick={() => {}} />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Locked slot')
  })

  it('renders empty variant with correct aria-label', () => {
    render(<Checkbox variant="empty" onClick={() => {}} />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Empty slot')
  })

  it('defaults to empty variant', () => {
    render(<Checkbox onClick={() => {}} />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Empty slot')
  })

  it('shows ! indicator when alert=true', () => {
    render(<Checkbox variant="empty" alert={true} onClick={() => {}} />)
    expect(screen.getByText('!')).toBeInTheDocument()
  })

  it('does not show ! indicator by default', () => {
    render(<Checkbox variant="empty" onClick={() => {}} />)
    expect(screen.queryByText('!')).not.toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const onClick = vi.fn()
    render(<Checkbox variant="empty" onClick={onClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('calls onClick for filled variant', () => {
    const onClick = vi.fn()
    render(<Checkbox variant="filled" onClick={onClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('calls onClick for locked variant', () => {
    const onClick = vi.fn()
    render(<Checkbox variant="locked" onClick={onClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
