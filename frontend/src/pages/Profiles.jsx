import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../css/Sidebar.css';
import '../css/Dashboard.css';
import '../css/Navbar.css';
import { useEffect } from 'react';
import { useUserContext } from '../hooks/useUserContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Profiles = () => {
  const { users, dispatch } = useUserContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchUsers = async () => {
      if (!user) return;

      try {
        const response = await fetch(`/api/user`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        dispatch({ type: 'SET_USERS', payload: data });
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, [user, dispatch]);

  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-content">
          <h2>Profiles Section</h2>
          {users?.length > 0 ? (
            <ul>
              {users.map((user) => (
                <li key={user._id}>
                  {user.firstName} {user.lastName} - {user.position}
                </li>
              ))}
            </ul>
          ) : (
            <p>No users found or loading...</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Profiles;
