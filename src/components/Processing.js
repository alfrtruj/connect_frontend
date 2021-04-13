import Navbar from './Navbar';
import SidebarIngest from './SidebarIngest';
import Header from './Header';

const Processing = () => {

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
                        <Header title={'PROCESSING'} description={'Processing your files'} icon={"fas fa-hourglass-half fa-2x"}/> 
                                                                         
                    </nav>
                </div> 
            </div>          
        </div>       
     );
}
 
export default Processing;