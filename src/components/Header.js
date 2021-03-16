import react_icon from './react_logo.png';

const Header = ( {title, description} ) => {
    return ( 
        <div className="page-header">
            <div className="title-row">
                <div className="title">
                    <img src={react_icon} className="react_ic" alt="React logo"/>
                    <p className="title-text">{ title }</p>                        
                </div>                
            </div>
            <p className="description">{ description }</p>                
        </div>
     );
}
 
export default Header;