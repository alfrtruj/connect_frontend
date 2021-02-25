import logo from './connect_logo.png';
import react_logo from './react_logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logos">
                <img src={logo} className="logo" alt="Connect logo"/>
                <img src={react_logo} className="react_logo" alt="React logo"/>
            </div>
            <div className="links">
                <a href="/">Overview</a>
                <a href="/ingest">Ingest</a>
                <a href="/Access">Access</a>
                <a href="/settings">Settings</a>
                <a href="/logout">Logout</a>
            </div>

        </nav>
      );
}
 
export default Navbar;