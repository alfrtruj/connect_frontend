import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const ShowFiles = () => {

    const [files, setFiles] = useState([])

    const getFiles = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        setFiles(response.data)
    }

    useEffect(() => {
        getFiles();
    }, [])

   console.log(files)

    return (
        <div>
            <table>
                <thead>  
                    <tr className="column_headers">
                        <th className="other_columns">Thumbnail</th>
                        <th className="other_columns">Filename</th>
                        <th className="other_columns">Description</th>
                        <th className="other_columns">AIP Package</th>
                        <th className="other_columns">Size</th>
                        <th className="other_columns">Date</th>
                        <th className="other_columns">File Type</th>
                        <th className="other_columns">Actions</th>
                    </tr>
                </thead>
            {files.map((file) => ( 
                <tbody>                             
                    <tr className="packages" key={file.id}>          
                        <td>
                            <img className="name" src={ file.thumbnail } alt="" height="50" width="70"/>
                        </td>
                        <td className="other_columns">{ file.filename }</td>
                        <td className="other_columns">{ file.description }</td>
                        <td className="other_columns">{ file.aippackage }</td>
                        <td className="other_columns">{ file.size }</td>
                        <td className="other_columns">{ file.date }</td>
                        <td className="other_columns">{ file.filetype }</td>
                        <td>
                            <Link to="/browse"><i className="fas fa-trash-alt fa-lg"></i></Link>
                            <Link to={`/browse/${file.id}`}><i className="far fa-file-archive fa-lg aip-icon"></i></Link>
                            <Link to="/browse"><i className="fas fa-cloud-download-alt fa-lg"></i></Link>
                        </td>
                    </tr> 
                </tbody>  
            ))}
            </table>
        </div>
    );
}
 
export default ShowFiles;
