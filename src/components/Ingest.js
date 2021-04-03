import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Header from './Header';
import Menu from './Menu'
import AddAip from './AddAip';

const Ingest = () => {
    return (        
        <div className="content">
            <Navbar />             
            <div className="vertical-sections">
                <div className="sidebar">
                    <nav className="sidebar_column">
                        <Sidebar />
                        <Menu title={'UPLOAD'} icon={"fas fa-upload fa-2x"} />
                        <Menu title={'PROCESSING'} icon={"fas fa-hourglass-half fa-2x"} />
                        <Menu title={'OFFLINE STORAGE'} icon={"fas fa-film fa-2x"} />
                        <Menu title={'STATUS'} icon={"fas fa-clipboard-check fa-2x"} />
                    </nav>
                </div> 
                <div className="content-section">
                    <nav className="dashboard_column">
                        <Header title={'UPLOAD'} description={'Upload your files'} icon={"fas fa-upload fa-2x"}/> 
                        <AddAip />                         
                    </nav>
                </div> 
            </div>          
        </div>       
     );
}
 
export default Ingest;