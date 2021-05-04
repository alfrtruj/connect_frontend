import Navbar from './Navbar';
import SidebarAccess from './SidebarAccess';
import Header from './Header';
import UpdateFile from './UpdateFile';

const FileUpdate = () => {

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
                        <Header title={'FILE UPDATE'} description={'Update your file'} icon={"fas fa-hdd fa-2x"} /> 
                        <UpdateFile />                     
                    </nav>
                </div> 
            </div>          
        </div>     
     );
}
 
export default FileUpdate;