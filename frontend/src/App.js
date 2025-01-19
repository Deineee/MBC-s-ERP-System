import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
// pages & components
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Finance from './pages/Finance';
import Profiles from './pages/Profiles';
import Attendance from './pages/Attendance';
import UserNotification from './components/userNotification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div>Loading...</div>; // Replace with an official loading screen
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            {/* Public Route */}
            <Route path="/" element={<Login />} />

            {/* Protected Routes */}
            {user ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/news" element={<News />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/user/profiles" element={<Profiles />} />
                <Route path="/user/attendance" element={<Attendance />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} /> 
            )}
          </Routes>
        </div>
      </BrowserRouter>
      <UserNotification />
      <ToastContainer />
    </div>
  );
}

export default App;
