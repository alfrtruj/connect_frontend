import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Data from './Data';
import useFetch from './useFetch';
import Header from './Header';
import Menu from './Menu'

const Access = () => {
    const { data: aips } = useFetch('http://localhost:8000/aips')

    return (         
        <div className="content">
            <Navbar />             
            <div className="vertical-sections">
                <div className="sidebar">
                    <nav className="sidebar_column">
                        <Sidebar />
                        <Menu title={'BROWSE'} />
                        <Menu title={'OFFLINE BROWSE'} />
                    </nav>
                </div> 
                <div className="content-section">
                    <nav className="dashboard_column">
                        <Header title={'BROWSE'} description={'Access your files'} />
                        
                            
                        

                        {aips && <Data aips={aips} />} 
                    </nav>
                </div> 
            </div>          
        </div>        
     );
}
 
export default Access;