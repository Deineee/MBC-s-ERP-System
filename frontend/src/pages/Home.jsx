import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Hardcoded credentials for demonstration
  const validUsername = 'admin';
  const validPassword = 'admin123';

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check if the entered username and password match the hardcoded values
    if (username === validUsername && password === validPassword) {
      setError('');
      navigate('/dashboard'); // Redirect to the dashboard
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="home">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Home;
