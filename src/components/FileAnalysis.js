import Navbar from './Navbar';
import SidebarAccess from './SidebarAccess';
import Header from './Header';
import FileDetail from './FileDetail';

const FileAnalysis = () => {

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
                        <Header title={'FILE ANALYSIS'} description={'View your file information'} icon={"fas fa-hdd fa-2x"} />  
                        <FileDetail />                     
                    </nav>
                </div> 
            </div>          
        </div>     
     );
}
 
export default FileAnalysis;