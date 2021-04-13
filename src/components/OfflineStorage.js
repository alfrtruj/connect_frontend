import Navbar from './Navbar';
import SidebarIngest from './SidebarIngest';
import Header from './Header';

const OfflineStorage = () => {

    return (        
        <div className="content">
            <Navbar />             
            <div className="vertical-sections">
                <div className="sidebar">
                    <nav className="sidebar_column">
                        <SidebarIngest />
                    </nav>
                </div> 
                <div className="content-section">
                    <nav className="dashboard_column">
                        <Header title={'OFFLINE STORAGE'} description={'Preparing your film'} icon={"fas fa-film fa-2x"}/>                                                                       
                    </nav>
                </div> 
            </div>          
        </div>       
     );
}
 
export default OfflineStorage;