import { Link } from 'react-router-dom';
import { FaBell, FaCog } from 'react-icons/fa';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container">
                {/* Left Section */}
                <div className="navbar-left">
                    <Link to="/" className="navbar-logo">
                        
                    </Link>
                </div>

                {/* Right Section */}
                <div className="navbar-right">
                    <FaBell className="icon" title="Notifications" />
                    <FaCog className="icon" title="Settings" />
                    <div className="user-info">
                        <span>First Name, Last Name</span>
                        <span className="position">Position</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
