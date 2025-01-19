import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useUserContext } from './useUserContext'; 

export const useCreateUser = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: userDispatch } = useUserContext();
  const { user } = useAuthContext()
  
  const createUser = async (firstName, middleName, lastName, email, password, position = 'staff') => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/user/createUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}` },
        body: JSON.stringify({ firstName, middleName, lastName, email, password, position }),
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.message || 'User creation failed');
        return;
      }

      // Add user to UserContext
      userDispatch({ type: 'ADD_USER', payload: json });

    } catch (error) {
      setError('An error occurred during signup.');
    } finally {
      setIsLoading(false);
    }
  };

  return { createUser, isLoading, error };
};
