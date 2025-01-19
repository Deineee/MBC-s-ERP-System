import React, { createContext, useReducer, useEffect } from 'react';

// Create UserContext
export const UserContext = createContext();

// Reducer function to manage state changes
const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'ADD_USER':
      return { ...state, users: [action.payload, ...state.users] };
    case 'REMOVE_USER':
      return { ...state, users: state.users.filter((user) => user._id !== action.payload) };
    default:
      return state;
  }
};

// Provider component
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    users: [], // Initial state
  });

  // Fetch users on initial render
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        if (response.ok) {
          dispatch({ type: 'SET_USERS', payload: data });
        }
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
