import { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Sidebar from '../components/Sidebar'; 
import UserCreate from '../components/userCreate';
import '../css/Sidebar.css';
import '../css/Dashboard.css';
import '../css/Navbar.css';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="dashboard-layout">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main layout with Sidebar and Dashboard content */}
      <div className="dashboard-container">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Dashboard content */}
        <main className="dashboard-content">
          <h2>Welcome to the Dashboard!</h2>

          {/* Button to trigger the UserSignup modal */}
          <button onClick={toggleModal} className="create-user-button">
            Create User
          </button>

          {/* Conditional rendering for the UserSignup modal */}
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <button className="close-modal" onClick={toggleModal}>
                  X
                </button>
                <UserCreate />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;