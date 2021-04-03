
const Card = ( { value, legend, icon } ) => {
    return ( 
        <div className="card">
            <div className="card-items">
                <div className="card-text">
                    <div className="value">{ value }</div>
                    <div className="legend">{ legend }</div>
                </div>
                <div className="card-icon">
                    <i className={ icon }></i>
                </div>
            </div>
        </div>
     );
}
 
export default Card;