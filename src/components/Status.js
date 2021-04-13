import Navbar from './Navbar';
import SidebarIngest from './SidebarIngest';
import Header from './Header';

const Status = () => {

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
                        <Header title={'STATUS'} description={'Writing your Film'} icon={"fas fa-clipboard-check fa-2x"}/>                                                                         
                    </nav>
                </div> 
            </div>          
        </div>       
     );
}
 
export default Status;