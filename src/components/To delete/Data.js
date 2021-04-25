/*import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Pagination from '../Pagination';

const Data = ({ aips }) => {    
     
    const [currentAip, setCurrentPage] = useState(1);
    const [aipPerPage] = useState(10);
    const history = useHistory();

    // get current posts
    const indexOfLastAip = currentAip * aipPerPage;
    const indexOfFirstAip = indexOfLastAip - aipPerPage;
    const currentAips = aips.slice(indexOfFirstAip, indexOfLastAip);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //Delete aip
    const handleDelete = (e) => {        
        fetch('http://localhost:5000/aips/' + e, {
            method: 'DELETE'
            }).then(() => {
                history.go();
            });      
    }            
    
    return (
        <div className="aip_table">
            <table>  
                <thead>
                    <tr className="column_headers">
                        <th className="name">Package name</th>
                        <th className="other_columns">Size</th>
                        <th className="other_columns">Date</th>
                        <th className="other_columns">Files</th>
                        <th className="name">Actions</th>
                    </tr> 
                </thead>
                {currentAips.map((aip) => ( 
                    <tbody>                             
                        <tr className="packages" key={aip.id}>          
                            <td className="name">{ aip.package_name }</td>
                            <td className="other_columns">{ aip.size }</td>
                            <td className="other_columns">{ aip.date }</td>
                            <td className="other_columns">{ aip.files }</td>
                            <td>
                                <Link to="/browse" onClick={() => handleDelete(aip.id)}><i className="fas fa-trash-alt fa-lg"></i></Link>
                                <Link to={`/browse/${aip.id}`}><i className="far fa-file-archive fa-lg aip-icon"></i></Link>
                                <Link to="/browse"><i className="fas fa-cloud-download-alt fa-lg"></i></Link>
                            </td>
                        </tr> 
                    </tbody>  
                ))}
            </table>   
            <br/>
            <br/>
            <Pagination itemPerPage={aipPerPage} totalItems={aips.length} paginate={paginate} />
        </div>
      );
}
 
export default Data;*/