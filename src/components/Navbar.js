import logo from './connect_logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} className="logo" alt="Connect logo"/>
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