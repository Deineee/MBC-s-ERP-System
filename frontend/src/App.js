import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';  
// pages & components
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserNotification from './components/userNotification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

            {/* Protected Route for Dashboard */}
            <Route
              path="/dashboard"
              element={
                user ? (
                  <div className="app-container">
                    <div className="main-content">
                      <Dashboard /> 
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
      <UserNotification />
      
      <ToastContainer />

    </div>
  );
}

export default App;