import Navbar from './Navbar';
import SidebarOverview from './SidebarOverview';
import Header from './Header';

const Reports = () => {
    return ( 
        <div className="content">
            <Navbar />             
            <div className="vertical-sections">
                <div className="sidebar">
                    <nav className="sidebar_column">
                        <SidebarOverview />
                    </nav>                    
                </div> 
                <div className="content-section">
                    <nav className="dashboard_column">
                        <Header title={'REPORTS'} description={'Your reports'} icon={"fas fa-file-contract  fa-2x"}/>
                    </nav>
                </div> 
            </div>          
        </div>
     );
}
 
export default Reports;