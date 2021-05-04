import logo from './connect_logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
        <div className="login">
            <div className="container">
                <div>
                    <img src={logo} className="logon" alt="Connect logo"/>
                </div>
                <br/>
                <div class="mb-3 row">
                    <label for="inputUsername" class="col-sm-4 col-form-label">Username:</label>
                    <div class="col-sm-12">
                        <input type="text" readonly class="form-control" id="inputUsername" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-4 col-form-label">Password:</label>
                    <div class="col-sm-12">
                        <input type="password" class="form-control" id="inputPassword" />
                    </div>
                </div>
                <br/>
                <h6 className="remember">Don't remember your password?.</h6>
                <br/>
                <Link to="/login" className="btn btn-primary">Login</Link>
            </div>
            
        </div>
     );
}
 
export default Login;