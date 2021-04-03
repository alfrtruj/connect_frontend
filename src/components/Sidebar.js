
const Sidebar = () => {
    const user = 'Alfredo Trujillo Leiva';

    return (
        <nav className="sidebar_menu">
            <p className="welcome">WELCOME {user}</p> 
            <p className="power">Powered by ALFRTRUJ</p>           
        </nav>
      );
}
 
export default Sidebar;