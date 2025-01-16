import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path based on your file structure
import Sidebar from '../components/Sidebar'; // Adjust the path based on your file structure

const Dashboard = () => {
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
          {/* Add more dashboard-specific content here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;