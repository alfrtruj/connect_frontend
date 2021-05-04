import Navbar from './Navbar';
import SidebarAccess from './SidebarAccess';
import Header from './Header';

const OfflineBrowse = () => {
    
    return (         
        <div className="content">
            <Navbar />             
            <div className="vertical-sections">
                <div className="sidebar">
                    <nav className="sidebar_column">
                        <SidebarAccess />
                    </nav>
                </div> 
                <div className="content-section">
                    <nav className="dashboard_column">
                        <Header title={'OFFLINE BROWSE'} description={'Access your offline files'} icon={"fas fa-film fa-2x"} />              
                    </nav>
                </div> 
            </div>          
        </div>        
     );
}
 
export default OfflineBrowse;