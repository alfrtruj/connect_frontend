import { Link } from 'react-router-dom';
import react_icon from './react_logo.png';

const Menu = ({ title }) => {
    const lowercasetext = title.toLowerCase();
    const link = '/' + lowercasetext;

    return ( 
        <div className="menu">
            <ul className="row-options">
                <li>
                    <img src={react_icon} className="react_icon" alt="React icon"/>
                </li>
                <li>
                    <Link to={link} className="link">{ title }</Link>                       
                </li>
            </ul>       
        </div> 
     );
}
 
export default Menu;