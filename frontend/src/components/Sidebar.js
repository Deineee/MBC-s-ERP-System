import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { FaHome, FaNewspaper, FaShoppingCart, FaFileInvoiceDollar, FaUsers, FaUser, FaClock, FaSignOutAlt } from 'react-icons/fa';
import mbcLogo from '../images/mbclogo.webp';

const Sidebar = () => {
    const { logout } = useLogout();

    const handleLogout = () => {
        logout();
    };

    return (
        <aside className="sidebar">
            {/* Logo Section */}
            <div className="logo-container">
                <img src={mbcLogo} alt="MBC Logo" className="logo" />


            </div>

            {/* Sidebar Navigation */}
            <nav className="sidebar-nav">
                <ul>
                    {/* Dashboard */}
                    <li>
                        <Link to="/dashboard">
                            <FaHome className="icon" /> Dashboard
                        </Link>
                    </li>

                    {/* News */}
                    <li>
                        <Link to="/news">
                            <FaNewspaper className="icon" /> News
                        </Link>
                    </li>

                    {/* Inventory */}
                    <li>
                        <Link to="/inventory">
                            <FaShoppingCart className="icon" /> Inventory
                        </Link>
                    </li>

                    {/* Sales */}
                    <li>
                        <Link to="/sales">
                            <FaFileInvoiceDollar className="icon" /> Sales
                        </Link>
                    </li>

                    {/* Finance */}
                    <li>
                        <Link to="/finance">
                            <FaFileInvoiceDollar className="icon" /> Finance
                        </Link>
                    </li>

                    {/* Users */}
                    <li className="has-dropdown">
                        <span>
                            <FaUsers className="icon" /> Users
                        </span>
                        <ul className="dropdown">
                            <li>
                                <Link to="/user/profiles">
                                    <FaUser className="icon" /> Profiles
                                </Link>
                            </li>
                            <li>
                                <Link to="/user/attendance">
                                    <FaClock className="icon" /> Attendance
                                </Link>
                            </li>
                        </ul>
                    </li>

                    
                </ul>
                
                    
            </nav>
            <div className="logout-container">
                <button className="logout-btn" onClick={handleLogout}>
                    <FaSignOutAlt className="icon" /> Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
