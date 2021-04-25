/*import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddAip = () => {
    const [package_name, setPackage_name] = useState('');
    const [size, setSize] = useState('');
    const [date, setDate] = useState('');
    const [files, setFiles] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const aip = { package_name, size, date, files };
        
        fetch('http://localhost:5000/aips', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(aip)
        }).then(() => {
            history.push('/browse');
        })
    }

    return ( 
        <div className="add_aip">
            <h2>Add a new AIP package</h2>
            <form onSubmit={handleSubmit}>   
                <label> Package Name:</label>
                <input 
                    type="text" 
                    required
                    value={package_name}
                    onChange={(e) => setPackage_name(e.target.value)}
                />
                <label>Size:</label>
                <input 
                    type="text" 
                    required
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
                <label>Date:</label>
                <input 
                    type="text" 
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <label>Files:</label>
                <input 
                    type="text" 
                    required
                    value={files}
                    onChange={(e) => setFiles(e.target.value)}
                />
                <button>Add AIP package</button>
                <p>{package_name} {size} {date} {files}</p>
            </form>
            
        </div>
     );
}
 
export default AddAip;*/