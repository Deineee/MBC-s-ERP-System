import { Link } from 'react-router-dom';
import { FaBell, FaCog } from 'react-icons/fa';
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { user } = useAuthContext()
    
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
                            {(() => {
                                // Capitalize the first letter of a string
                                const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

                                // Format the full name
                                const fullName = `${user.user.firstName ? capitalize(user.user.firstName) : 'No first name available'} 
                                                ${user.user.middleName ? user.user.middleName.charAt(0).toUpperCase() + '.' : ''} 
                                                ${user.user.lastName ? capitalize(user.user.lastName) : 'No last name available'}`;
                                
                                return (
                                    <> 
                                        <span>{fullName}</span>
                                        <span className="position">{`${user.user.position ? capitalize(user.user.position) : 'No position available'}`}</span>
                                    </>
                                );
                            })()}
                        </div>
                    ) : (
                        <div>No user data available</div>
                    )}    
                </div>
            </div>
        </header>
    );
};

export default Navbar;
