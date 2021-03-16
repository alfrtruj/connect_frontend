import Header from './Header';
import Card from './Card';

const Main = () => {   
    return (
        <nav className="dashboard_column">
            <Header title={'DASHBOARD'} description={'Your stored information'} />
            <div className="row">
                <Card value={78} legend={'ARCHIVAL PACKAGES STORED ON FILM'} />
                <Card value={450 + ' GB'} legend={'DATA STORED ON FILM'} />
                <Card value={5} legend={'REELS'} />
                <Card value={35890} legend={'PAGES STORED ON FILM'} />                
            </div>
            <div className="row">
                <Card value={127} legend={'ARCHIVAL PACKAGES ONLINE'} />
                <Card value={890 + ' GB'} legend={'DATA STORED ONLINE'} />
                <Card value={6} legend={'ARCHIVAL PACKAGES RETRIEVED FROM FILM'} />
                <Card value={35 + ' GB'} legend={'DATA RETRIEVED FROM FILM'} /> 
            </div>
            <br/>
            <div className="row-graphs">
                <div className="graph">
                    <div className="box">
                        <div className="graph-text">DATA DOWNLOAD</div>       
                    </div>
                </div>
                <div className="pie">
                    <div className="box">
                        <div className="pie-text">ARCHIVAL FILE FORMATS</div>         
                    </div>
                </div>                
            </div>            
        </nav>
      );
}
 
export default Main;