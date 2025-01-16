import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (firstName, middleName, lastName, email, password, position = 'staff') => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, middleName, lastName, email, password, position }),
      })
      
      const json = await response.json()

      if (!response.ok) {
        setError(json.message || 'Signup failed')
        return
      }

      // Store user in localStorage and update context
      localStorage.setItem('user', JSON.stringify(json))
      dispatch({ type: 'LOGIN', payload: json })
      
    } catch (error) {
      setError('An error occurred during signup.')
    } finally {
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}
