import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { initialState } from './constants/initialState'
import { CharacterSheet } from './components/sheet/CharacterSheet'
import { RulesReference } from './components/rules/RulesReference'

const MOBILE_TABS = [
  { id: 'sheet', label: 'Sheet' },
  { id: 'log',   label: 'Log' },
  { id: 'rules', label: 'Rules' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('sheet')
  const [state, setState] = useLocalStorage('rogue-earth-character', initialState)

  const isRules = activeTab === 'rules'

  return (
    <div className="min-h-screen bg-white text-dark-grey">
      {/* Top tab navigation — desktop only */}
      <nav className="hidden md:flex sticky top-0 z-10 bg-white border-b-2 border-dark-grey">
        {['Sheet', 'Rules'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`font-mono text-sm uppercase tracking-widest px-6 py-2 cursor-pointer transition-colors ${
              (tab === 'Rules' ? isRules : !isRules)
                ? 'bg-dark-grey text-white'
                : 'text-dark-grey hover:bg-light-grey'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Page content */}
      <main className="pb-16 md:pb-0">
        {isRules ? (
          <RulesReference />
        ) : (
          <CharacterSheet state={state} setState={setState} mobileTab={activeTab} />
        )}
      </main>

      {/* Bottom tab navigation — mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 flex md:hidden border-t-2 border-dark-grey bg-white z-20">
        {MOBILE_TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 font-mono text-xs uppercase tracking-widest py-3 cursor-pointer transition-colors ${
              activeTab === tab.id
                ? 'bg-dark-grey text-white'
                : 'text-dark-grey'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
