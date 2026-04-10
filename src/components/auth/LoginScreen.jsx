import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export function LoginScreen() {
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setMessage(null)
    setLoading(true)

    if (mode === 'signin') {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) setError(error.message)
    } else {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) setError(error.message)
      else setMessage('Check your email to confirm your account.')
    }

    setLoading(false)
  }

  function toggleMode() {
    setMode(m => m === 'signin' ? 'signup' : 'signin')
    setError(null)
    setMessage(null)
  }

  const inputClass = 'font-body text-sm text-dark-grey bg-transparent border-b border-dashed border-mid-grey w-full placeholder:text-light-grey focus:border-dark-grey outline-none py-1'

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-xs">
        <div className="text-center mb-10">
          <div className="font-mono text-3xl font-bold text-dark-grey leading-tight">ROGUE</div>
          <div className="font-mono text-3xl font-bold text-dark-grey leading-tight">EARTH</div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className={inputClass}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className={inputClass}
          />

          {error && <p className="font-body text-xs text-red-500">{error}</p>}
          {message && <p className="font-body text-xs text-dark-grey">{message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="font-mono text-sm uppercase tracking-widest px-6 py-2 bg-dark-grey text-white disabled:opacity-50 cursor-pointer"
          >
            {loading ? '...' : mode === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>

          <button
            type="button"
            onClick={toggleMode}
            className="font-mono text-xs uppercase tracking-widest text-mid-grey hover:text-dark-grey cursor-pointer"
          >
            {mode === 'signin' ? 'No account? Sign up' : 'Have an account? Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
