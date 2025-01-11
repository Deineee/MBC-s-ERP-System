import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
