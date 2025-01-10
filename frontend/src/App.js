import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages & components
//<<<<<<< HEAD
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';  // If the file is .jsx

//=======
import Login from './pages/Login'
//>>>>>>> dev-Deine

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/" element={<Login />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
