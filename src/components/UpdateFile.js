import axios from 'axios';
import {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router';

const UpdateFile = () => {

    const [thumbnail, setThumbnail] = useState(null)
    const [filename, setFilename] = useState("")
    const [description, setDescription] = useState("")
    const [aippackage, setAippackage] = useState("")
    const [size, setSize] = useState("")
    const [date, setDate] = useState("")
    const [filetype, setFiletype] = useState("")

    const history = useHistory();
    const { id } = useParams();

    
    useEffect(() => {
        const loadFile = async () => {
            const { data } = await axios.get(`http://localhost:8000/api/${id}/`)
            console.log(data)
            setThumbnail(data.thumbnail)
            console.log(data.thumbnail)
            setFilename(data.filename)
            setDescription(data.description)
            setAippackage(data.aippackage)
            setSize(data.size)
            setDate(data.date)
            setFiletype(data.filetype)
        }
    
        loadFile();
    }, [id])


    const UpdateFileInfo = async () => {
        let formField = new FormData()
        formField.append('filename', filename)
        formField.append('description', description)
        formField.append('aippackage', aippackage)
        formField.append('size', size)
        formField.append('date', date)
        formField.append('filetype', filetype)
        console.log(thumbnail)
        /*thumbnail fails when no image is uploaded, it expects a file been uploaded*/
        if(thumbnail !== null) {
            formField.append('thumbnail', thumbnail)
        }
    
        await axios({
            method: 'PUT',
            url: `http://localhost:8000/api/${id}/`,
            data: formField
        }).then((response) => {
            console.log(response.data);
            history.push(`/browse/${id}`);
        }).catch((error) => {
            if(error.response) {
                console.log(error.response);
            }
        });

    }

    return ( 
        <div className="add_aip"> 
            <img class="scale" src={thumbnail} alt="" />
            <div className="details">
                <br/>
                <label> Select a new file:</label>
                <input 
                    type="file"
                    name="thumbnail"
                    required
                    onChange={(e) => setThumbnail(e.target.files[0])}
                /> 
                <div className="form-group"> 
                    <label> Filename:</label> 
                    <input 
                        type="text"
                        name="filename"
                        value={filename}
                        onChange={(e) => setFilename(e.target.value)}
                    />
                </div>
                <div className="form-group"> 
                    <label> Description:</label>
                    <input 
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group"> 
                    <label> AIP Package Name:</label>
                    <input 
                        type="text"
                        name="aippackage"
                        value={aippackage}
                        onChange={(e) => setAippackage(e.target.value)}
                    />
                </div>
                <div className="form-group"> 
                    <label> Size:</label>
                    <input 
                        type="text"
                        name="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    />
                </div>
                <div className="form-group"> 
                    <label> Date:</label>
                    <input 
                        type="text"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="form-group"> 
                    <label> File type:</label>
                    <input 
                        type="text"
                        name="filetype"
                        value={filetype}
                        onChange={(e) => setFiletype(e.target.value)}
                    />
                </div>
                <br/>
                <button onClick={UpdateFileInfo}>Update</button>
            </div>
        </div>
     );
}
 
export default UpdateFile;