/*import { useParams } from "react-router";
import Navbar from '../Navbar';
import SidebarAccess from '../SidebarAccess';
import Header from '../Header';
import useFetch from './useFetch';
import Files from './Files';

const Aip = () => {
    const { id } = useParams();
    const { data:aip } = useFetch('http://localhost:5000/aips/' + id);

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
                        { aip && <Files aip={aip} />} 
                    </nav>
                </div> 
            </div> 
            
        </div> 
              
    );
        

 
}
 
export default Aip;*/