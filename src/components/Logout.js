import { Link } from 'react-router-dom';

const Logout = () => {
    return ( 
        <div className="logout">
            <h2>LOGGED OUT</h2>
            <br/>
            <h4>You are now logged out of Connect</h4>
            <br/>
            <h6>Click the button below to log back in.</h6>
            <br/>
            <Link to="/login" className="btn btn-primary">Login</Link>
        </div>
     );
}
 
export default Logout;