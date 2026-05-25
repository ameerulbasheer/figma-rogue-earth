import { useState, useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase'
import { initialState } from '../constants/initialState'

const LOCAL_KEY = 'rogue-earth-character'

export function useCharacter(userId) {
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(null)
  const [saveError, setSaveError] = useState(null)
  const hasLoaded = useRef(false)
  const skipNextSave = useRef(false)
  const debounceRef = useRef(null)

  // Load on mount: Supabase is source of truth, localStorage is fallback
  useEffect(() => {
    if (!userId) return

    setLoading(true)
    setLoadError(null)
    hasLoaded.current = false

    supabase
      .from('character_sheets')
      .select('data')
      .eq('user_id', userId)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) {
          setLoadError('Failed to load character sheet')
        }

        if (data) {
          skipNextSave.current = true
          setState(data.data)
          localStorage.setItem(LOCAL_KEY, JSON.stringify(data.data))
        } else {
          // Fall back to localStorage if Supabase has no row yet
          try {
            const local = localStorage.getItem(LOCAL_KEY)
            if (local) {
              skipNextSave.current = true
              setState(JSON.parse(local))
            }
          } catch {}
        }

        hasLoaded.current = true
        setLoading(false)
      })
  }, [userId])

  // On every state change: save to localStorage immediately + debounce Supabase
  useEffect(() => {
    if (!hasLoaded.current || !userId) return

    if (skipNextSave.current) {
      skipNextSave.current = false
      return
    }

    // Instant local save — survives page refresh
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(state))
    } catch {}

    // Debounced cloud save
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      supabase
        .from('character_sheets')
        .upsert(
          { user_id: userId, data: state, updated_at: new Date().toISOString() },
          { onConflict: 'user_id' }
        )
        .then(({ error }) => {
          if (error) {
            setSaveError('Failed to save sheet — check your connection')
          }
        })
    }, 1000)
  }, [state, userId])

  return [state, setState, loading, loadError, saveError, setSaveError]
}
