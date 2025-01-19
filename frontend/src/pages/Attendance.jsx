import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../css/Sidebar.css';
import '../css/Dashboard.css';
import '../css/Navbar.css';

const Attendance = () => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-content">
          <h2>Attendance Section</h2>
          <p>Welcome to the Attendance page!</p>
        </main>
      </div>
    </div>
  );
};

export default Attendance;
