import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Header from './Header';
import Menu from './Menu'

const Ingest = () => {
    return (        
        <div className="content">
            <Navbar />             
            <div className="vertical-sections">
                <div className="sidebar">
                    <nav className="sidebar_column">
                        <Sidebar />
                        <Menu title={'UPLOAD'} />
                        <Menu title={'PROCESSING'} />
                        <Menu title={'OFFLINE STORAGE'} />
                        <Menu title={'STATUS'} />
                    </nav>
                </div> 
                <div className="content-section">
                    <nav className="dashboard_column">
                        <Header title={'UPLOAD'} description={'Upload your files'}/>                          
                    </nav>
                </div> 
            </div>          
        </div>       
     );
}
 
export default Ingest;