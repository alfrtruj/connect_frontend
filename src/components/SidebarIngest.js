import { Link } from 'react-router-dom';

const SidebarIngest = () => {
    const user = 'Alfredo Trujillo Leiva';
    // highlighting the menu background color when hovering
    const url = document.URL;    
    const setActiveMenu = (url) => {
        const obj = document.getElementById("enlaces").getElementsByTagName("a"); 
        for (var i=0; i < obj.length; i++)
        if(obj[i].href === url)
            obj[i].parentNode.className = "current";  
    }
    const setPage = () => {       
        document.getElementById("enlaces").addEventListener("click", setActiveMenu(url));
    }    

    return (
        <nav className="sidebar_menu">
            <div className="welcome">
                <p className="wel">WELCOME</p> 
                <p>{user}</p>
            </div>
            <div className="enlaces" id="enlaces">
                <ul className="row-options" id="row-options" >
                    <li className="menu">
                        <i className="fas fa-upload fa-2x"></i>
                        <Link to="/upload" className="link" onMouseOver={setPage}>UPLOAD</Link>                       
                    </li>
                    <li className="menu">
                        <i className="fas fa-hourglass-half fa-2x"></i>
                        <Link to="/processing" className="link" onMouseOver={setPage}>PROCESSING</Link>                       
                    </li>
                    <li className="menu">
                        <i className="fas fa-film fa-2x"></i>
                        <Link to="/offlinestorage" className="link" onMouseOver={setPage}>OFFLINE STORAGE</Link>                       
                    </li>
                    <li className="menu">
                        <i className="fas fa-clipboard-check fa-2x"></i>
                        <Link to="/status" className="link" onMouseOver={setPage}>STATUS</Link>                       
                    </li>
                </ul>       
            </div>                                 
            <p className="power">Powered by ALFRTRUJ</p>           
        </nav>
      );
}
 
export default SidebarIngest;