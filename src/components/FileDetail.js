import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const FileDetail = () => {

    const [file, setFile] = useState("")
    const { id } = useParams();    

    useEffect(() => {
        const getSingleFile = async () => {
            const { data } = await axios.get(`http://localhost:8000/api/files/${id}/`)
            console.log(data)
            setFile(data)
        }
        getSingleFile();
    }, [id])

    return ( 
        <div className="add_aip">                 
            <label className="file_preview"> Preview:</label>            
            <img className="scale" src={ file.thumbnail } alt=""/> 
                      
            <div className="details">
                <br/>
                <div> 
                    <label> Filename:</label> 
                    <h6 className="other_columns">{ file.filename }</h6>
                </div>
                <div> 
                    <label> Description:</label>
                    <h6 className="other_columns">{ file.description }</h6>
                </div>
                <div> 
                    <label> AIP Package Name:</label>
                    <h6 className="other_columns">{ file.aippackage }</h6>
                </div>
                <div> 
                    <label> Size:</label>
                    <h6 className="other_columns">{ file.size }</h6>
                </div>
                <div> 
                    <label> Date:</label>
                    <h6 className="other_columns">{ file.date }</h6>
                </div>
                <div> 
                    <label> File type:</label>
                    <h6 className="other_columns">{ file.filetype }</h6>
                </div>
                <br/>
                <button><Link to={`/browse/${file.id}/update`}>Update file</Link></button>
            </div>            
            
        </div>
     );
}
 
export default FileDetail;