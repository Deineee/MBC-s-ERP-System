import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useLogin } from "../hooks/useLogin";

import '../css/Login.css';


const Login = () => {

  return (
  <div className="login-page">
    <div className="leftpanel">
      <h1>MBB System</h1>
    </div>
    <Panel/>
  </div>
  );
};

const Panel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await login(email, password);
    if (success) {

      navigate('/dashboard');
    }
  };
  return (  <form className="login" onSubmit={handleSubmit}>
    <h3>Log In</h3>
    
    <label>Email address:</label>
    <input 
      type="email" 
      onChange={(e) => setEmail(e.target.value)} 
      value={email} 
    />
    <label>Password:</label>
    <input 
      type="password" 
      onChange={(e) => setPassword(e.target.value)} 
      value={password} 
    />

    <button disabled={isLoading}>Log in</button>
    {error && <div className="error">{error}</div>}
  </form>
  );
};

export default Login;
