import { Link, useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'

const Sidebar = () => {
    const { logout } =  useLogout();

    const handleLogout = () => {
        logout(); 
    };

    return (
        <aside className="sidebar">
            {/* Logo Container */}
            <div className="logo-container">
                <Link to="/">
                    <h1>MBC System</h1> {/* Update this title as needed */}
                </Link>
            </div>

            {/* Sidebar Navigation */}
            <nav className="sidebar-nav">
                <ul>
                    {/* Dashboard */}
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>

                    {/* News */}
                    <li>
                        <Link to="/news">News</Link>
                    </li>

                    {/* Inventory */}
                    <li>
                        <Link to="/inventory">Inventory</Link>
                    </li>

                    {/* Sales */}
                    <li>
                        <Link to="/sales">Sales</Link>
                    </li>

                    {/* Finance */}
                    <li>
                        <Link to="/finance">Finance</Link>
                    </li>

                    {/* User */}
                    <li className="has-dropdown">
                        <span>User</span>
                        <ul className="dropdown">
                            <li>
                                <Link to="/user/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/user/attendance">Attendance</Link>
                            </li>
                        </ul>
                    </li>

                    {/* Logout Button */}
                    <li>
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
