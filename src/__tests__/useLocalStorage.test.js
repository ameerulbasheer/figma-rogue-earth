import { renderHook, act } from '@testing-library/react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const KEY = 'test-key'

beforeEach(() => {
  localStorage.clear()
})

describe('useLocalStorage', () => {
  it('returns the initial value when localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, { count: 0 }))
    expect(result.current[0]).toEqual({ count: 0 })
  })

  it('reads an existing value from localStorage on init', () => {
    localStorage.setItem(KEY, JSON.stringify({ count: 42 }))
    const { result } = renderHook(() => useLocalStorage(KEY, { count: 0 }))
    expect(result.current[0]).toEqual({ count: 42 })
  })

  it('persists new value to localStorage when setter is called', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, { count: 0 }))
    act(() => result.current[1]({ count: 7 }))
    expect(JSON.parse(localStorage.getItem(KEY))).toEqual({ count: 7 })
  })

  it('returns the updated value after setter is called', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, 'initial'))
    act(() => result.current[1]('updated'))
    expect(result.current[0]).toBe('updated')
  })

  it('returns initial value when localStorage contains invalid JSON', () => {
    localStorage.setItem(KEY, 'not-valid-json{{{')
    const { result } = renderHook(() => useLocalStorage(KEY, 'fallback'))
    expect(result.current[0]).toBe('fallback')
  })

  it('works with primitive initial values', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, 0))
    expect(result.current[0]).toBe(0)
    act(() => result.current[1](5))
    expect(result.current[0]).toBe(5)
  })
})
