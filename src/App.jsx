import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import { useAuth } from './hooks/useAuth'
import { useCharacter } from './hooks/useCharacter'
import { LoginScreen } from './components/auth/LoginScreen'
import { CharacterSheet } from './components/sheet/CharacterSheet'
import { RulesReference } from './components/rules/RulesReference'
import { GMDashboard } from './components/gm/GMDashboard'

export default function App() {
  const { user, loading: authLoading } = useAuth()
  const [profile, setProfile] = useState(null)
  const [activeTab, setActiveTab] = useState('sheet')
  const [state, setState, sheetLoading] = useCharacter(user?.id)

  // Fetch or create profile when user logs in
  useEffect(() => {
    if (!user) { setProfile(null); return }

    supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          setProfile(data)
        } else {
          const displayName = user.email.split('@')[0]
          supabase
            .from('profiles')
            .insert({ id: user.id, display_name: displayName })
            .then(() => setProfile({ id: user.id, display_name: displayName, is_gm: false }))
        }
      })
  }, [user])

  if (authLoading) return null
  if (!user) return <LoginScreen />

  const isGM = profile?.is_gm === true
  const desktopTabs = isGM ? ['GM', 'Rules'] : ['Sheet', 'Rules']
  const mobileTabs = isGM
    ? [{ id: 'gm', label: 'GM' }, { id: 'rules', label: 'Rules' }]
    : [{ id: 'sheet', label: 'Sheet' }, { id: 'log', label: 'Log' }, { id: 'rules', label: 'Rules' }]

  // Default GM users to the GM tab
  const effectiveTab = isGM && activeTab === 'sheet' ? 'gm' : activeTab

  const isRules = effectiveTab === 'rules'
  const isGMTab = effectiveTab === 'gm'

  function isDesktopTabActive(tab) {
    if (tab === 'Rules') return isRules
    if (tab === 'GM') return isGMTab
    return !isRules && !isGMTab
  }

  return (
    <div className="min-h-screen bg-white text-dark-grey">
      {/* Top tab navigation — desktop only */}
      <nav className="hidden md:flex sticky top-0 z-10 bg-white border-b-2 border-dark-grey items-center">
        {desktopTabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`font-mono text-sm uppercase tracking-widest px-6 py-2 cursor-pointer transition-colors ${
              isDesktopTabActive(tab)
                ? 'bg-dark-grey text-white'
                : 'text-dark-grey hover:bg-light-grey'
            }`}
          >
            {tab}
          </button>
        ))}
        <button
          onClick={() => supabase.auth.signOut()}
          className="ml-auto font-mono text-xs uppercase tracking-widest px-6 py-2 text-mid-grey hover:text-dark-grey cursor-pointer"
        >
          Sign Out
        </button>
      </nav>

      {/* Page content */}
      <main className="pb-16 md:pb-0">
        {isRules ? (
          <RulesReference />
        ) : isGMTab ? (
          <GMDashboard />
        ) : sheetLoading ? (
          <div className="p-8 font-mono text-sm text-mid-grey">Loading sheet...</div>
        ) : (
          <CharacterSheet state={state} setState={setState} mobileTab={effectiveTab} />
        )}
      </main>

      {/* Bottom tab navigation — mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 flex md:hidden border-t-2 border-dark-grey bg-white z-20">
        {mobileTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 font-mono text-xs uppercase tracking-widest py-3 cursor-pointer transition-colors ${
              effectiveTab === tab.id
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
