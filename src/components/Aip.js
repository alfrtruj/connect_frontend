import { useState } from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Header from './Header';
import Menu from './Menu';
import useFetch from './useFetch';
import Pagination from './Pagination';

const Aip = () => {
    const { id } = useParams();
    const { data:aip } = useFetch('http://localhost:8000/aips/' + id);

    
    const [currentFile, setCurrentPage] = useState(1);
    const [filePerPage] = useState(8);

    // get current posts
    const indexOfLastFile = currentFile * filePerPage;
    const indexOfFirstFile = indexOfLastFile - filePerPage;
    //const currentFiles = aip.content_files.slice(indexOfFirstFile, indexOfLastFile);
    
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (        
        <div className="content">
            <Navbar />             
            <div className="vertical-sections">
                <div className="sidebar">
                    <nav className="sidebar_column">
                        <Sidebar />
                        <Menu title={'BROWSE'} icon={"fas fa-hdd fa-2x"} />
                        <Menu title={'OFFLINE BROWSE'} icon={"fas fa-film fa-2x"} />
                    </nav>
                </div> 
                <div className="content-section">
                    <nav className="dashboard_column">
                        <Header title={'BROWSE'} description={'Access your files'} icon={"fas fa-hdd fa-2x"} /> 
                        { aip && (
                            <div className="aip_table">
                                <p className="aip-details">AIP package: { aip.package_name } - { aip.files } files</p>
                                <table>  
                                    <tr className="column_headers">
                                        <th className="name">File name</th>
                                        <th className="other_columns">Size</th>
                                        <th className="other_columns">File Format</th>
                                        <th className="name">Actions</th>
                                    </tr>
                                    {aip.content_files.map((file) => (                                        
                                        <tr className="packages" key={file.id}>          
                                            <td className="name">{ file.file_name }</td>
                                            <td className="other_columns">{ file.file_size }</td>
                                            <td className="other_columns">{ file.file_format }</td>                                      
                                            <Link to={`/browse/${file.id}`}><i className="fas fa-cloud-download-alt fa-lg"></i></Link>
                                        </tr> 
                                    ))}                          
                                </table> 
                                <br/>
                                <br/>
                                <Pagination aipPerPage={ filePerPage } totalAips={aip.content_files.length} paginate={paginate} />
                            </div>
                        )} 
                    </nav>
                </div> 
            </div> 
            
        </div> 
              
    );
        

 
}
 
export default Aip;