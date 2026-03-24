'use client'
import { useState } from 'react'

export default function EmailCTA({ heading, subheading, compact = false }) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong')
      }
      setStatus('success')
      setFirstName('')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 text-center shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
        <p className="text-lg font-semibold text-[#3F3228]">You're on the list!</p>
        <p className="mt-1 text-sm text-[#6d5f50]">We'll send you a note before each week's order window opens.</p>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] shadow-[0_8px_24px_rgba(63,50,40,0.06)] ${compact ? 'p-5' : 'p-8'}`}>
      {heading && (
        <h3 className={`font-bold text-[#3F3228] ${compact ? 'mb-1 text-lg' : 'mb-2 text-2xl'}`}>{heading}</h3>
      )}
      {subheading && (
        <p className={`text-[#6d5f50] ${compact ? 'mb-4 text-sm' : 'mb-5 text-base'}`}>{subheading}</p>
      )}

      <form onSubmit={handleSubmit} className={`flex flex-col gap-3 ${compact ? 'sm:flex-row sm:items-end' : 'sm:flex-row sm:items-end'}`}>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full rounded-full border border-[#d9cebf] bg-white px-4 py-2.5 text-sm text-[#3F3228] placeholder-[#a89880] outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary sm:w-36"
        />
        <input
          type="email"
          placeholder="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full flex-1 rounded-full border border-[#d9cebf] bg-white px-4 py-2.5 text-sm text-[#3F3228] placeholder-[#a89880] outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-[#f7f4ed] transition hover:bg-brand-primary-dark disabled:opacity-60"
        >
          {status === 'loading' ? 'Joining…' : 'Join'}
        </button>
      </form>

      {status === 'error' && (
        <p className="mt-3 text-sm text-brand-primary">{errorMsg}</p>
      )}
    </div>
  )
}
