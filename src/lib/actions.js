'use server'
import { createCustomer, LocalLineError } from './localline'

export async function subscribe({ email, firstName }) {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Valid email required' }
  }
  try {
    await createCustomer({ email, firstName })
    return { ok: true }
  } catch (err) {
    if (err instanceof LocalLineError && err.code === 'ALREADY_EXISTS') {
      return { error: 'already_exists' }
    }
    console.error('subscribe error:', err)
    return { error: 'Something went wrong' }
  }
}
