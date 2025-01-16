import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useLogin } from "../hooks/useLogin";

import '../css/Login.css';

import mbcLogo from'../images/mbc-horizontal-logo.png';
import greyBackground from '../images/grey-background.svg';


const Login = () => {

  return ( 
    
    <div className="login-page">
      <div className="login-container">

      <img src={mbcLogo} alt="MBC Logo" className="mbc-logo"/>

      </div>

      <div className="login-panel">
        <Panel />
      </div>

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
    <h3>Welcome Back Ka-Metrix!</h3>
    
    <label>Email: <span className="highlight-text">(issued by the company)</span></label>
    <input 
      type="email" 
      onChange={(e) => setEmail(e.target.value)} 
      value={email} 
    />
    <label>Password:</label>
    <input className="password"
      type="password" 
      onChange={(e) => setPassword(e.target.value)} 
      value={password} 
    />
<label className="forgot-password">Forgot password?</label>

    <button disabled={isLoading}>Log in</button>
    {error && <div className="error">{error}</div>}
  </form>
  ); 
};

export default Login;
