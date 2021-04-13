import { Link } from 'react-router-dom';

const SidebarOverview = () => {
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
                        <i className="fas fa-tachometer-alt fa-2x"></i>
                        <Link to="/dashboard" className="link" onMouseOver={setPage}>DASHBOARD</Link>                       
                    </li>
                    <li className="menu">
                        <i className="fas fa-file-contract  fa-2x"></i>
                        <Link to="/reports" className="link" onMouseOver={setPage}>REPORTS</Link> 
                    </li>
                </ul>       
            </div>                      
            <p className="power">Powered by ALFRTRUJ</p>           
        </nav>
    );
}
 
export default SidebarOverview;