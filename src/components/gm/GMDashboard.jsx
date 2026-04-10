import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { CharacterSheet } from '../sheet/CharacterSheet'

export function GMDashboard() {
  const [players, setPlayers] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const [sheetsRes, profilesRes] = await Promise.all([
        supabase.from('character_sheets').select('user_id, data'),
        supabase.from('profiles').select('id, display_name'),
      ])

      const profileMap = Object.fromEntries(
        (profilesRes.data ?? []).map(p => [p.id, p])
      )

      const combined = (sheetsRes.data ?? []).map(s => ({
        userId: s.user_id,
        data: s.data,
        displayName: profileMap[s.user_id]?.display_name ?? null,
      }))

      setPlayers(combined)
      if (combined.length > 0) setSelectedId(combined[0].userId)
      setLoading(false)
    }

    load()
  }, [])

  const selected = players.find(p => p.userId === selectedId)

  if (loading) {
    return <div className="p-8 font-mono text-sm text-mid-grey">Loading sheets...</div>
  }

  if (players.length === 0) {
    return <div className="p-8 font-mono text-sm text-mid-grey">No player sheets yet.</div>
  }

  return (
    <div className="flex flex-col gap-4 p-4 w-full max-w-[842px] mx-auto">
      <div className="flex gap-2 flex-wrap">
        {players.map(p => {
          const label = p.data?.name || p.displayName || 'Unnamed'
          return (
            <button
              key={p.userId}
              onClick={() => setSelectedId(p.userId)}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2 border-2 border-dark-grey transition-colors cursor-pointer ${
                selectedId === p.userId
                  ? 'bg-dark-grey text-white'
                  : 'text-dark-grey hover:bg-light-grey'
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>

      {selected && (
        <div className="pointer-events-none select-none">
          <CharacterSheet state={selected.data} setState={() => {}} mobileTab="sheet" />
        </div>
      )}
    </div>
  )
}
