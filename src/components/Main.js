import Header from './Header';
import Card from './Card';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import useFetch from './useFetch';

const Main = () => {   
    const { data: aips } = useFetch('http://localhost:8000/aips?_sort=size&_order=desc')   

    return (
        <nav className="dashboard_column">
            <Header title={'DASHBOARD'} description={'Your stored information'} icon={"fas fa-tachometer-alt fa-2x"} />
            <div className="row">
                <Card value={78} legend={'ARCHIVAL PACKAGES STORED ON FILM'} icon={"far fa-file-archive fa-lg"} />
                <Card value={450 + ' GB'} legend={'DATA STORED ON FILM'} icon={"fas fa-film fa-lg"} />
                <Card value={5} legend={'REELS'} icon={"fas fa-coins fa-lg"} />
                <Card value={35890} legend={'PAGES STORED ON FILM'} icon={"far fa-file-image fa-lg"} />                
            </div>
            <div className="row">
                <Card value={127} legend={'ARCHIVAL PACKAGES ONLINE'} icon={"fas fa-cloud-upload-alt fa-lg"} />
                <Card value={890 + ' GB'} legend={'DATA STORED ONLINE'} icon={"fas fa-cloud fa-lg"} />
                <Card value={6} legend={'ARCHIVAL PACKAGES RETRIEVED FROM FILM'} icon={"fas fa-file-download fa-lg"} />
                <Card value={35 + ' GB'} legend={'DATA RETRIEVED FROM FILM'} icon={"fas fa-tape fa-lg"} /> 
            </div>
            <br/>
            <div className="row-graphs">
                <div className="graph">
                    <div className="box">
                        <div className="graph-text">DATA INGESTED ON PIQLFILM</div> 
                        {aips && <Chart1 aips={aips} />}   
                    </div>
                </div>
                <div className="graph">
                    <div className="box">
                        <div className="graph-text">DATA INGESTED ONLINE</div> 
                        {aips && <Chart2 aips={aips} />}       
                    </div>
                </div>
                <div className="graph">
                    <div className="box">
                        <div className="pie-text">ARCHIVAL FILE FORMATS</div>
                        {aips && <Chart3 aips={aips} />}          
                    </div>
                </div>                
            </div>            
        </nav>
      );
}
 
export default Main;