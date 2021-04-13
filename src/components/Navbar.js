import { Link } from 'react-router-dom';
import logo from './connect_logo.png';
import react_logo from './react_logo.png';


const Navbar = () => {

    // highlighting the navegation bar menu options when clicking
    const url = document.URL;    
    const setActiveMenu = (url) => {
        const obj = document.getElementById("links").getElementsByTagName("a"); 
        for (var i=0; i < obj.length; i++)
        if(obj[i].href === url)
            obj[i].className = "current";   
    }
    const setPage = () => {       
        document.getElementById("links").addEventListener("click", setActiveMenu(url));
    }    

    return (
        <nav className="navbar">
            <div>
                <img src={logo} className="logo" alt="Connect logo"/>
            </div>
            <div>
                <img src={react_logo} className="react_logo" alt="React logo"/>
            </div>
            <div className="links" id="links">
                <ul>
                    <li>
                        <Link to="/dashboard" onMouseOver={setPage}>Overview</Link>
                    </li>
                    <li>
                        <Link to="/upload" onMouseOver={setPage}>Ingest</Link>
                    </li>
                    <li>
                        <Link to="/browse" onMouseOver={setPage}>Access</Link>
                    </li>
                    <li>
                        <Link to="/" ><i className="fas fa-cogs fa-lg"></i></Link>
                    </li>
                    <li className="logout">
                        <Link to="/"><i className="fas fa-sign-out-alt fa-lg"></i></Link>
                    </li>
                </ul>
            </div>
        </nav>
      );
}
 
export default Navbar;