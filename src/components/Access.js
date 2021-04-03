import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Data from './Data';
import useFetch from './useFetch';
import Header from './Header';
import Menu from './Menu';

const Access = () => {
    const { data: aips } = useFetch('http://localhost:8000/aips?_sort=id&_order=desc')    
    
    return (         
        <div className="content">
            <Navbar />             
            <div className="vertical-sections">
                <div className="sidebar">
                    <nav className="sidebar_column">
                        <Sidebar />
                        <Menu title={'BROWSE'} icon={"fas fa-hdd fa-2x"} />
                        <Menu title={'OFFLINE BROWSE'} icon={"fas fa-film fa-2x"} />
                    </nav>
                </div> 
                <div className="content-section">
                    <nav className="dashboard_column">
                        <Header title={'BROWSE'} description={'Access your files'} icon={"fas fa-hdd fa-2x"} />  
                        {aips && <Data aips={aips} />}                       
                    </nav>
                </div> 
            </div>          
        </div>        
     );
}
 
export default Access;