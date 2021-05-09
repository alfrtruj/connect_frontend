import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Pagination from './Pagination';

const ShowFiles = () => {

    const [files, setFiles] = useState([])
    const history = useHistory();

    /* when refreshing the list, claims every child in the list should have a unique "key" */
    const getFiles = async () => {
        const response = await axios.get('http://localhost:8000/api/files')
        setFiles(response.data)
    }

    useEffect(() => {
        getFiles();
    }, [])

    console.log(files)

    const [currentPage, setCurrentPage] = useState(1);
    const [filePerPage] = useState(10);

    // get current files
    const indexOfLastFile = currentPage * filePerPage;
    const indexOfFirstFile = indexOfLastFile - filePerPage;
    const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    const deleteFile = async (id) => {
       await axios.delete(`http://localhost:8000/api/files/${id}/`)
       history.go()
       history.push('/browse')
    }

    return (
        <div>
            <table>
                <thead>  
                    <tr className="column_headers">
                        <th className="other_columns">Preview</th>
                        <th className="other_columns">Filename</th>
                        <th className="other_columns">Description</th>
                        <th className="other_columns">AIP Package</th>
                        <th className="other_columns">Size</th>
                        <th className="other_columns">Date</th>
                        <th className="other_columns">File Type</th>
                        <th className="other_columns">Actions</th>
                    </tr>
                </thead>
            {currentFiles.map((file) => ( 
                <tbody>                             
                    <tr className="packages" key={file.id}>          
                        <td>
                            <img className="name thumb" src={ file.thumbnail } alt=""/>
                        </td>
                        <td className="other_columns">{ file.filename }</td>
                        <td className="other_columns">{ file.description }</td>
                        <td className="other_columns">{ file.aippackage }</td>
                        <td className="other_columns">{ file.size }</td>
                        <td className="other_columns">{ file.date }</td>
                        <td className="other_columns">{ file.filetype }</td>
                        <td>
                            <Link to={`/browse/${file.id}`}><i className="far fa-file-archive fa-lg aip-icon"></i></Link>
                            <Link to="/browse"><i className="fas fa-cloud-download-alt fa-lg"></i></Link>
                            <Link to="/browse" onClick={() => deleteFile(file.id)}><i className="fas fa-trash-alt fa-lg"></i></Link>
                        </td>
                    </tr> 
                </tbody>  
            ))}
            </table>
            <br/>
            <br/>
            <Pagination itemPerPage={filePerPage} totalItems={files.length} paginate={paginate} />
        </div>
    );
}
 
export default ShowFiles;
