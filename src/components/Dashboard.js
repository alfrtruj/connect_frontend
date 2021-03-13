import react_icon from './react_logo.png';

const Dashboard = () => {
    const title = 'DASHBOARD';

    return (
        <nav className="dashboard_column">
            <div className="page-header">
                <div className="title-row">
                    <div className="title">
                        <img src={react_icon} className="react_ic" alt="React logo"/>
                        <p className="title-text">{title}</p>                        
                    </div>                
                </div>
                <p className="description">Your stored information</p>                
            </div>
            <div className="row">
                <div className="card">
                    <div className="card-items">
                        <div className="card-text">
                            <div className="value">78</div>
                            <div className="legend">ARCHIVAL PACKAGES STORED ON FILM</div>
                        </div>
                        <div className="card-icon">
                            <img src={react_icon} className="react_icon" alt="React logo"/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-items">
                        <div className="card-text">
                            <div className="value">450 GB</div>
                            <div className="legend">DATA STORED ON FILM</div>
                        </div>
                        <div className="card-icon">
                            <img src={react_icon} className="react_icon" alt="React logo"/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-items">
                        <div className="card-text">
                            <div className="value">5</div>
                            <div className="legend">REELS</div>
                        </div>
                        <div className="card-icon">
                            <img src={react_icon} className="react_icon" alt="React logo"/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-items">
                        <div className="card-text">
                            <div className="value">35890</div>
                            <div className="legend">PAGES STORED ON FILM</div>
                        </div>
                        <div className="card-icon">
                            <img src={react_icon} className="react_icon" alt="React logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card">
                    <div className="card-items">
                        <div className="card-text">
                            <div className="value">127</div>
                            <div className="legend">ARCHIVAL PACKAGES ONLINE</div>
                        </div>
                        <div className="card-icon">
                            <img src={react_icon} className="react_icon" alt="React logo"/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-items">
                        <div className="card-text">
                            <div className="value">890 GB</div>
                            <div className="legend">DATA STORED ONLINE</div>
                        </div>
                        <div className="card-icon">
                            <img src={react_icon} className="react_icon" alt="React logo"/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-items">
                        <div className="card-text">
                            <div className="value">6</div>
                            <div className="legend">ARCHIVAL PACKAGES RETRIEVED FROM FILM</div>
                        </div>
                        <div className="card-icon">
                            <img src={react_icon} className="react_icon" alt="React logo"/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-items">
                        <div className="card-text">
                            <div className="value">35 GB</div>
                            <div className="legend">DATA RETRIEVED FROM FILM</div>
                        </div>
                        <div className="card-icon">
                            <img src={react_icon} className="react_icon" alt="React logo"/>
                        </div>
                    </div>
                </div>
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
 
export default Dashboard;