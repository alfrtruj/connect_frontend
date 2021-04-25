import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const FileDetail = () => {

    const [file, setFile] = useState("")

    const { id } = useParams();

    const getSingleFile = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/${id}`)
        console.log(data)
        setFile(data)
    }

    useEffect(() => {
        getSingleFile();
    }, [])

    return ( 
        <div className="add_aip">
            <h2>File Details</h2>
            <div className="form-group">                    
                <label> file:</label>
                <br/>
                <img className="name" src={ file.thumbnail } alt="" height="315" width="600"/>                
            </div>
            <div className="form-group"> 
                <label> Filename:</label> 
                <h5 className="other_columns">{ file.filename }</h5>
            </div>
            <div className="form-group"> 
                <label> Description:</label>
                <h5 className="other_columns">{ file.description }</h5>
            </div>
            <div className="form-group"> 
                <label> AIP Package Name:</label>
                <h5 className="other_columns">{ file.aippackage }</h5>
            </div>
            <div className="form-group"> 
                <label> Size:</label>
                <h5 className="other_columns">{ file.size }</h5>
            </div>
            <div className="form-group"> 
                <label> Date:</label>
                <h5 className="other_columns">{ file.date }</h5>
            </div>
            <div className="form-group"> 
                <label> File type:</label>
                <h5 className="other_columns">{ file.filetype }</h5>
            </div>
            <br/>
            <button>Update file</button>
            
        </div>
     );
}
 
export default FileDetail;