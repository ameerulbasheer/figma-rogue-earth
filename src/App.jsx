import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { initialState } from './constants/initialState'
import { CharacterSheet } from './components/sheet/CharacterSheet'
import { RulesReference } from './components/rules/RulesReference'

const TABS = ['Sheet', 'Rules']

export default function App() {
  const [activeTab, setActiveTab] = useState('Sheet')
  const [state, setState] = useLocalStorage('rogue-earth-character', initialState)

  return (
    <div className="min-h-screen bg-white text-dark-grey">
      {/* Tab navigation */}
      <nav className="sticky top-0 z-10 bg-white border-b-2 border-dark-grey flex">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-mono text-sm uppercase tracking-widest px-6 py-2 cursor-pointer transition-colors ${
              activeTab === tab
                ? 'bg-dark-grey text-white'
                : 'text-dark-grey hover:bg-light-grey'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Page content */}
      <main className="overflow-x-auto">
        {activeTab === 'Sheet' ? (
          <CharacterSheet state={state} setState={setState} />
        ) : (
          <RulesReference />
        )}
      </main>
    </div>
  )
}
