import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

import '../css/Login.css';

import mbcLogo from '../images/mbc-horizontal-logo.png';
import copyright from '../images/copyright.png';

import facebookIcon from '../images/facebook.svg';
import messengerIcon from '../images/messenger.svg';
import emailIcon from '../images/email.svg';

import avatar1 from '../images/person-pointing.png';
import avatar2 from '../images/girl-waving.png';
import textBotx from '../images/textbox.png';

const Login = () => {

  return (

    <div className="login-page">
      <div className="login-container">

        <img src={mbcLogo} alt="MBC Logo" className="mbc-logo" />

        <div className="heading-group">
          <h1>Fastening <br />
            your Future!</h1>
          <h4>Offering you a wide range of fasteners—<br />
            securing your future with strength and reliability!</h4>
        </div>

        <div className="footer-group">
          <img src={copyright} alt="copyright Logo" className="copyright-logo" />
          <h6>Metrix Bolts Center</h6>
        </div>
      </div>

      <div className="login-panel">
        <Panel />
      </div>

      <div className="login-footer">
        <div className="social-media">
        <a href="https://www.facebook.com/metrixboltscenter"  target="_blank" rel="noreferrer"><img src={facebookIcon} alt="Facebook Logo" className="social-media-icon" /> </a>
        <a href="messenger.com"  target="_blank"><img src={messengerIcon} alt="Messenger Logo" className="social-media-icon" /> </a>
        <a href="gmail.com"  target="_blank"><img src={emailIcon} alt="Email Logo" className="social-media-icon" /> </a>
        </div>
      </div>

      <div className="avatars">
        <img src={avatar1} alt="Avatar 1" className="avatar-pointer" />
        <img src={avatar2} alt="Avatar 2" className="avatar-waver" />
        <img src={textBotx} alt="Avatar 3" className="avatar-talker" />
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
  return (<form className="login" onSubmit={handleSubmit}>
    <h3>Welcome Back Ka-Metrix!</h3>
    <div className="main-panel">
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

      <div class="forgot-password-popup">
        <p>Please contact</p>
        <p>Human Resource Officer-Mechele Pacalang</p>
        <br />
        <p>Email: metrixboltscenter.hr@gmail.com</p>
        <p>Phone: 0985-392-5537</p>
      </div>

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </div>
  </form>
  );
};

export default Login;
