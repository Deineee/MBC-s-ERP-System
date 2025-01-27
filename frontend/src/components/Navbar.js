import { Link } from 'react-router-dom';
import { FaBell, FaCog } from 'react-icons/fa';
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { user } = useAuthContext()
    console.log('User from context:', user);
    
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
                    {user ? (
                    <div className="user-info">
                        <span>{user?.user?.email || 'No email available'}</span>
                        <span className="position">{user?.user?.position || 'No position available'}</span>
                    </div>
                    ) : (
                    <div>Not logged in</div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
