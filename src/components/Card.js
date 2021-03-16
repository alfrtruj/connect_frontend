import react_icon from './react_logo.png';

const Card = ( { value, legend } ) => {
    return ( 
        <div className="card">
            <div className="card-items">
                <div className="card-text">
                    <div className="value">{ value }</div>
                    <div className="legend">{ legend }</div>
                </div>
                <div className="card-icon">
                    <img src={ react_icon } className="react_icon" alt="React logo"/>
                </div>
            </div>
        </div>
     );
}
 
export default Card;