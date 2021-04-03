
const Header = ( {title, description, icon } ) => {
    return ( 
        <div className="page-header">
            <div className="title-row">
                <div className="title">                    
                    <i class={icon}></i>
                    <p className="title-text">{ title }</p>                        
                </div>                
            </div>
            <p className="description">{ description }</p>                
        </div>
     );
}
 
export default Header;