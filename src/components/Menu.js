import { Link } from 'react-router-dom';

const Menu = ({ title, icon }) => {
    const lowercasetext = title.toLowerCase();
    const link = '/' + lowercasetext;

    return ( 
        <div className="menu">
            <ul className="row-options">
                <li>                    
                    <i className={icon}></i>
                </li>
                <li>
                    <Link to={link} className="link">{ title }</Link>                       
                </li>
            </ul>       
        </div> 
     );
}
 
export default Menu;