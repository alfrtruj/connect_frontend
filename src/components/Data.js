const Data = ({ aips }) => {    
     
    return (
        <div className="aip_table">
            <table>  
                <tr className="column_headers">
                    <th className="name">Package name</th>
                    <th className="other_columns">Size</th>
                    <th className="other_columns">Date</th>
                    <th className="other_columns">Files</th>
                    <th className="name">Actions</th>
                </tr> 
                {aips.map((aip) => (                            
                    <tr className="packages" key={aip.id}>          
                        <td className="name">{ aip.package_name }</td>
                        <td className="other_columns">{ aip.size }</td>
                        <td className="other_columns">{ aip.date }</td>
                        <td className="other_columns">{ aip.files }</td>
                        <button type="button" class="btn btn-danger">Delete</button>  
                        <button type="button" class="btn btn-info">Download</button>
                    </tr>  
                ))}
            </table>   
        </div>
      );
}
 
export default Data;