import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Main from './Main';
import Menu from './Menu';

const Home = () => {
    return ( 
        <div className="content">
            <Navbar />             
            <div className="vertical-sections">
                <div className="sidebar">
                    <nav className="sidebar_column">
                        <Sidebar />
                        <Menu title={'DASHBOARD'} icon={"fas fa-tachometer-alt fa-2x"} />
                        <Menu title={'REPORTS'} icon={"fas fa-file-contract  fa-2x"} />
                    </nav>                    
                </div> 
                <div className="content-section">
                    <Main />
                </div> 
            </div>          
        </div>
     );
}
 
export default Home;