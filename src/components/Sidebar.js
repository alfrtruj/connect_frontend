import react_icon from './react_logo.png';

const Sidebar = () => {
    const user = 'Alfredo';

    return (
        <nav className="sidebar_column">
            <p className="welcome">WELCOME {user}</p>
            <div className="menu">
                <ul className="row-options option1">
                    <li className="option-background">
                        <img src={react_icon} className="react_icon" alt="React icon"/>
                    </li>
                    <li>
                        <a href="/dashboard" className="dashboard">DASHBOARD</a>                        
                    </li>
                </ul>       
                <ul className="row-options option2">
                    <li>
                        <img src={react_icon} className="react_icon" alt="React icon"/>                        
                    </li>
                    <li>
                        <a href="/reports" className="reports">REPORTS</a>
                    </li>
                </ul>
            </div> 
            <p className="power">Powered by ALFRTRUJ</p>           
        </nav>
      );
}
 
export default Sidebar;