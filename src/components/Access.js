import Navbar from './Navbar';
import SidebarAccess from './SidebarAccess';
/*import Data from './To delete/Data';*/
/*import useFetch from './useFetch';*/
import Header from './Header';
import ShowFiles from './ShowFiles';

const Access = () => {    
    
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
                        <Header title={'BROWSE'} description={'Access your files'} icon={"fas fa-hdd fa-2x"} /> 
                        <ShowFiles />                     
                    </nav>
                </div> 
            </div>          
        </div>        
     );
}
 
export default Access;