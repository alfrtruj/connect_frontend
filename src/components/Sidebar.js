
const Sidebar = () => {
    const user = 'Alfredo';

    return (
        <nav className="sidebar_column">
            <p className="welcome">WELCOME {user}</p>
            <p className="power">Powered by ALFRTRUJ</p>           
        </nav>
      );
}
 
export default Sidebar;