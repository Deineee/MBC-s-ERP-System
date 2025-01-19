import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../css/Sidebar.css';
import '../css/Dashboard.css';
import '../css/Navbar.css';

const Profiles = () => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-content">
          <h2>Profiles Section</h2>
          <p>Welcome to the Profile page!</p>
        </main>
      </div>
    </div>
  );
};

export default Profiles;
