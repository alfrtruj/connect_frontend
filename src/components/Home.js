import Navbar from './Navbar';
import SidebarOverview from './SidebarOverview';
import Main from './Main';

const Home = () => {
    return ( 
        <div className="content">
            <Navbar />             
            <div className="vertical-sections">
                <div className="sidebar">
                    <nav className="sidebar_column">
                        <SidebarOverview />
                    </nav>                    
                </div> 
                <div className="content-section">
                    <Main title={'DASHBOARD'} description={'Your stored information'} icon={"fas fa-tachometer-alt fa-2x"}/>
                </div> 
            </div>          
        </div>
     );
}
 
export default Home;