import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

beforeEach(() => {
  localStorage.clear()
})

describe('App — navigation structure', () => {
  it('renders the top nav with Sheet and Rules tabs', () => {
    render(<App />)
    const topNav = screen.getAllByRole('navigation')[0]
    expect(topNav).toHaveTextContent('Sheet')
    expect(topNav).toHaveTextContent('Rules')
  })

  it('renders the bottom nav with Sheet, Log, and Rules tabs', () => {
    render(<App />)
    const bottomNav = screen.getAllByRole('navigation')[1]
    expect(bottomNav).toHaveTextContent('Sheet')
    expect(bottomNav).toHaveTextContent('Log')
    expect(bottomNav).toHaveTextContent('Rules')
  })

  it('top nav has hidden md:flex classes (desktop-only)', () => {
    render(<App />)
    const topNav = screen.getAllByRole('navigation')[0]
    expect(topNav.className).toContain('hidden')
    expect(topNav.className).toContain('md:flex')
  })

  it('bottom nav has flex md:hidden classes (mobile-only)', () => {
    render(<App />)
    const bottomNav = screen.getAllByRole('navigation')[1]
    expect(bottomNav.className).toContain('flex')
    expect(bottomNav.className).toContain('md:hidden')
  })
})

describe('App — tab switching', () => {
  it('shows CharacterSheet by default (sheet tab active)', () => {
    render(<App />)
    expect(screen.getByText('Hope')).toBeInTheDocument()
    expect(screen.queryByText('Rules Reference')).not.toBeInTheDocument()
  })

  it('clicking Rules in top nav shows RulesReference', () => {
    render(<App />)
    const topNav = screen.getAllByRole('navigation')[0]
    const rulesButton = Array.from(topNav.querySelectorAll('button')).find(
      b => b.textContent === 'Rules'
    )
    fireEvent.click(rulesButton)
    expect(screen.getByText('Rules Reference')).toBeInTheDocument()
    expect(screen.queryByText('Hope')).not.toBeInTheDocument()
  })

  it('clicking Sheet in top nav returns to CharacterSheet', () => {
    render(<App />)
    const topNav = screen.getAllByRole('navigation')[0]
    const buttons = topNav.querySelectorAll('button')
    const rulesBtn = Array.from(buttons).find(b => b.textContent === 'Rules')
    const sheetBtn = Array.from(buttons).find(b => b.textContent === 'Sheet')

    fireEvent.click(rulesBtn)
    fireEvent.click(sheetBtn)
    expect(screen.getByText('Hope')).toBeInTheDocument()
    expect(screen.queryByText('Rules Reference')).not.toBeInTheDocument()
  })

  it('clicking Rules in bottom nav shows RulesReference', () => {
    render(<App />)
    const bottomNav = screen.getAllByRole('navigation')[1]
    const rulesButton = Array.from(bottomNav.querySelectorAll('button')).find(
      b => b.textContent === 'Rules'
    )
    fireEvent.click(rulesButton)
    expect(screen.getByText('Rules Reference')).toBeInTheDocument()
  })
})

describe('App — mobile tab content switching', () => {
  function getLeftCol() {
    // The left col wraps ResolveSection ("Hope" label is inside it)
    return screen.getByText('Hope').closest('[class*="flex-col"]').parentElement
      .parentElement
  }

  it('Sheet tab (default): left col is visible (no hidden class)', () => {
    render(<App />)
    // Left col contains "Hope" / "Resolve" / "Experiences"
    expect(screen.getByText('Hope')).toBeInTheDocument()
    // Left col container should NOT have the hidden class
    const hopeContainer = screen.getByText('Hope').closest('div[class]')
    // Walk up to find the column div (direct child of the grid)
    let col = hopeContainer
    while (col && !col.className.includes('flex-col')) {
      col = col.parentElement
    }
    // The left col should be using the visible class (no 'hidden' prefix alone)
    expect(col.className).not.toMatch(/^hidden /)
  })

  it('Log tab: right col content is shown (Necessities header visible)', () => {
    render(<App />)
    const bottomNav = screen.getAllByRole('navigation')[1]
    const logButton = Array.from(bottomNav.querySelectorAll('button')).find(
      b => b.textContent === 'Log'
    )
    fireEvent.click(logButton)
    expect(screen.getByText('Necessities')).toBeInTheDocument()
  })

  it('Log tab: right col div does not have the hidden class', () => {
    render(<App />)
    const bottomNav = screen.getAllByRole('navigation')[1]
    const logButton = Array.from(bottomNav.querySelectorAll('button')).find(
      b => b.textContent === 'Log'
    )
    fireEvent.click(logButton)
    // Necessities is in the right col; its column div should be visible
    const necessitiesEl = screen.getByText('Necessities')
    let col = necessitiesEl.parentElement
    while (col && !col.className.includes('gap-4')) {
      col = col.parentElement
    }
    expect(col.className).not.toMatch(/^hidden /)
  })

  it('Sheet tab: left col (Resolve/Experiences) is in the document', () => {
    render(<App />)
    expect(screen.getByText('Resolve')).toBeInTheDocument()
    expect(screen.getByText('Experiences')).toBeInTheDocument()
  })

  it('Log tab: right col (Necessities/Inventory/Notes) is in the document', () => {
    render(<App />)
    const bottomNav = screen.getAllByRole('navigation')[1]
    const logButton = Array.from(bottomNav.querySelectorAll('button')).find(
      b => b.textContent === 'Log'
    )
    fireEvent.click(logButton)
    expect(screen.getByText('Necessities')).toBeInTheDocument()
    expect(screen.getByText('Inventory')).toBeInTheDocument()
  })
})
