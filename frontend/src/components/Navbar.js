import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>
                        MBC System {/* Please change this frontend developerss ;) */}
                    </h1>
                </Link>
            </div> 
        </header>
    )
}

export default Navbar;