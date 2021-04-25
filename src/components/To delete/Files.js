/*import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';

const Files = ({aip}) => {
    
    const [currentFile, setCurrentPage] = useState(1);
    const [filePerPage] = useState(8);

    // get current posts
    const indexOfLastFile = currentFile * filePerPage;
    const indexOfFirstFile = indexOfLastFile - filePerPage;
    const currentFiles = aip.content_files.slice(indexOfFirstFile, indexOfLastFile);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (        
        <div className="aip_table">
            <p className="aip-details">AIP package: { aip.package_name } - { aip.files } files</p>
            <table>
                <thead>  
                    <tr className="column_headers">
                        <th className="name">File name</th>
                        <th className="other_columns">Size</th>
                        <th className="other_columns">File Format</th>
                        <th className="name">Actions</th>
                    </tr>
                </thead>
                {currentFiles.map((file) => (                                        
                    <tbody>
                        <tr className="packages" key={file.id}>          
                            <td className="name">{ file.file_name }</td>
                            <td className="other_columns">{ file.file_size }</td>
                            <td className="other_columns">{ file.file_format }</td>                                      
                            <td><Link to="/browse"><i className="fas fa-cloud-download-alt fa-lg"></i></Link></td>
                        </tr> 
                    </tbody>
                ))}                          
            </table> 
            <br/>
            <br/>
            <Pagination itemPerPage={filePerPage} totalItems={aip.content_files.length} paginate={paginate} />
        </div>      
    ); 
}
 
export default Files;*/