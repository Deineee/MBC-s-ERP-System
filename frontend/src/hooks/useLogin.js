import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      
      // Check if response is ok
      const json = await response.json()

      if (!response.ok) {
        setError(json.error || 'Login failed')
        return false
      }
      // Store user in localStorage and update context
      localStorage.setItem('user', JSON.stringify(json))
      console.log('User logged in:', json)
      dispatch({ type: 'LOGIN', payload: json })

      return true
    } catch (error) {
      setError('An error occurred during login.')
    } finally {
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}
