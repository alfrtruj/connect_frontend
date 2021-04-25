import Navbar from './Navbar';
import SidebarIngest from './SidebarIngest';
import Header from './Header';
import AddAip from './AddAip';
import AddFile from './AddFile';

const Ingest = () => {

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
                        <Header title={'UPLOAD'} description={'Upload your files'} icon={"fas fa-upload fa-2x"}/> 
                        {/*<AddAip />*/}
                        <AddFile />                                                 
                    </nav>
                </div> 
            </div>          
        </div>       
     );
}
 
export default Ingest;