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
                        <Menu title={'DASHBOARD'} />
                        <Menu title={'REPORTS'} />
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