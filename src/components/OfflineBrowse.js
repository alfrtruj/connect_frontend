import Navbar from './Navbar';
import SidebarAccess from './SidebarAccess';
/*import Data from './Data';
import useFetch from './useFetch';*/
import Header from './Header';

const OfflineBrowse = () => {
    /*const { data: aips } = useFetch('http://localhost:8000/aips?_sort=id&_order=desc')    */
    
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
                        {/*{aips && <Data aips={aips} />}   */}                    
                    </nav>
                </div> 
            </div>          
        </div>        
     );
}
 
export default OfflineBrowse;