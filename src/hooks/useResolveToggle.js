import { useRef, useCallback } from 'react'

const MIN_UNLOCKED = 2

export function useResolveToggle(setState) {
  const readyToLock = useRef({ hope: -1, courage: -1 })

  return useCallback((track, index) => {
    setState(s => {
      const t = s.resolve[track]
      const rtl = readyToLock.current

      if (index >= t.unlocked) {
        readyToLock.current = { ...rtl, [track]: -1 }
        return {
          ...s,
          resolve: { ...s.resolve, [track]: { ...t, unlocked: Math.max(index + 1, MIN_UNLOCKED) } },
        }
      }

      if (index === t.unlocked - 1 && index < t.filled) {
        readyToLock.current = { ...rtl, [track]: index >= MIN_UNLOCKED ? index : -1 }
        return {
          ...s,
          resolve: { ...s.resolve, [track]: { ...t, filled: index } },
        }
      }

      if (index === t.unlocked - 1 && index >= t.filled && rtl[track] === index) {
        if (index >= MIN_UNLOCKED) {
          readyToLock.current = { ...rtl, [track]: -1 }
          return {
            ...s,
            resolve: { ...s.resolve, [track]: { ...t, unlocked: Math.max(index, MIN_UNLOCKED) } },
          }
        }
        return s
      }

      const newFilled = index < t.filled ? index : index + 1
      readyToLock.current = { ...rtl, [track]: -1 }
      return {
        ...s,
        resolve: { ...s.resolve, [track]: { ...t, filled: newFilled } },
      }
    })
  }, [setState])
}
