import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../css/Sidebar.css';
import '../css/Dashboard.css';
import '../css/Navbar.css';

const Finance = () => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-content">
          <h2>Finance Section</h2>
          <p>Welcome to the Finance page!</p>
        </main>
      </div>
    </div>
  );
};

export default Finance;
