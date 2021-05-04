import { Link } from 'react-router-dom';

const SidebarAccess = () => {
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
                        <i className="fas fa-hdd fa-2x"></i>
                        <Link to="/browse" className="link" onMouseOver={setPage}>BROWSE</Link>                       
                    </li>
                    <li className="menu">
                        <i className="fas fa-film fa-2x"></i>
                        <Link to="/offlinebrowse" className="link" onMouseOver={setPage}>OFFLINE BROWSE</Link> 
                    </li>
                </ul>       
            </div>                      
            <div >
                <p className="power">Powered by ALFRTRUJ</p>   
            </div>        
        </nav>
    );
}
 
export default SidebarAccess;