import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';  
// pages & components
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Dashboard from './pages/Dashboard'; 

function App() {
  const { user, loading  } = useAuthContext(); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Protected Route for Dashboard */}
            <Route
              path="/dashboard"
              element={
                user ? (
                  <div className="app-container">
                    <div className="main-content">
                      <Dashboard /> {/* Dashboard content */}
                    </div>
                  </div>
                ) : (
                  <Navigate to="/" /> // Redirect to login if not authenticated
                )
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
