import axios from 'axios';
import {useState} from 'react';
import { useHistory } from 'react-router';


const AddFile = () => {

    const [thumbnail, setThumbnail] = useState(null)
    const [filename, setFilename] = useState("")
    const [description, setDescription] = useState("")
    const [aippackage, setAippackage] = useState("")
    const [size, setSize] = useState("")
    const [date, setDate] = useState("")
    const [filetype, setFiletype] = useState("")

    const history = useHistory();


    const AddFileInfo = async ()=> {
        let formField = new FormData()

        formField.append('filename', filename)
        formField.append('description', description)
        formField.append('aippackage', aippackage)
        formField.append('size', size)
        formField.append('date', date)
        formField.append('filetype', filetype)
        if(thumbnail !== null) {
            formField.append('thumbnail', thumbnail)
        }

        await axios({
            method: 'post',
            url: 'http://localhost:8000/api/',
            data: formField
        }).then((response) => {
            console.log(response.data);
            history.push('/upload')
        })

    }

    return ( 
        <div className="add_aip">
            <h2>Add a new file</h2>
            <div className="form-group">                    
                <label> Select a file:</label>
                <img src={thumbnail} alt=""/>
                <input 
                    type="file"
                    required
                    name="thumbnail"
                    onChange={(e) => setThumbnail(e.target.files[0])}
                />
            </div>
            <div className="form-group"> 
                <label> Filename:</label> 
                <input 
                    type="text"
                    required
                    name="filename"
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                />
            </div>
            <div className="form-group"> 
                <label> Description:</label>
                <input 
                    type="text"
                    required
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="form-group"> 
                <label> AIP Package Name:</label>
                <input 
                    type="text"
                    required
                    name="aippackage"
                    value={aippackage}
                    onChange={(e) => setAippackage(e.target.value)}
                />
            </div>
            <div className="form-group"> 
                <label> Size:</label>
                <input 
                    type="text"
                    required
                    name="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
            </div>
            <div className="form-group"> 
                <label> Date:</label>
                <input 
                    type="text"
                    required
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="form-group"> 
                <label> File type:</label>
                <input 
                    type="text"
                    required
                    name="filetype"
                    value={filetype}
                    onChange={(e) => setFiletype(e.target.value)}
                />
            </div>
            <br/>
            <button onClick={AddFileInfo}>Add File</button>
            
        </div>
     );
}
 
export default AddFile;