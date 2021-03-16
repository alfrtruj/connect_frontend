import { Link } from 'react-router-dom';
import logo from './connect_logo.png';
import react_logo from './react_logo.png';


const Navbar = () => {
    
    return (
        <nav className="navbar">
            <div>
                <img src={logo} className="logo" alt="Connect logo"/>
            </div>
            <div>
                <img src={react_logo} className="react_logo" alt="React logo"/>
            </div>
            <div className="links">
                <ul>   
                    <li>
                        <Link to="/">Overview</Link>
                    </li>
                    <li>
                        <Link to="/ingest">Ingest</Link>
                    </li>
                    <li>
                        <Link to="/Access">Access</Link>
                    </li>
                    <li>
                        <Link to="/">Settings</Link>
                    </li>
                    <li>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
      );
}
 
export default Navbar;