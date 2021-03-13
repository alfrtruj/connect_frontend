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
                        <a className="overview" href="/">Overview</a>
                    </li>
                    <li>
                        <a href="/ingest">Ingest</a>
                    </li>
                    <li>
                        <a href="/Access">Access</a>
                    </li>
                    <li>
                        <a href="/settings">Settings</a>
                    </li>
                    <li>
                        <a href="/logout">Logout</a>
                    </li>
                </ul>
            </div>

        </nav>
      );
}
 
export default Navbar;