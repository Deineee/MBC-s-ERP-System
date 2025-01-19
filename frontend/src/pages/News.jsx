import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../css/Sidebar.css';
import '../css/Dashboard.css';
import '../css/Navbar.css';

const News = () => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-content">
          <h2>News Section</h2>
          <p>Welcome to the News page!</p>
        </main>
      </div>
    </div>
  );
};

export default News;
