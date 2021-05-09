import logo from './connect_logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Login = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory();

    const log_in = async () => {
        console.log({username, email, password})
        console.log(JSON.stringify({username, email, password}))
        await axios({
            method: 'post',
            url: 'http://localhost:8000/auth/',
            data: {username, email, password}
        }).then((response) => {
            console.log(response.data);
            history.push('/')
        }).catch((error) => {
            console.log(error.response);
        });
    }

    return ( 
        <div className="login">
            <div className="container">
                <div className="log">
                    <img src={logo} className="logon" alt="Connect logo"/>
                </div>
                <br/>
                <div className="mb-3 row">
                    <label for="inputUsername" className="col-sm-4 col-form-label">Username:</label>
                    <div className="col-sm-12">
                        <input type="text" className="form-control" id="inputUsername" value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputEmail" className="col-sm-4 col-form-label">Email:</label>
                    <div className="col-sm-12">
                        <input type="email" className="form-control" id="inputEmail" value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-4 col-form-label">Password:</label>
                    <div className="col-sm-12">
                        <input type="password" className="form-control" id="inputPassword" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <br/>
                <h6 className="remember">Don't remember your password?.</h6>
                <br/>
                <Link to="/login" className="btn btn-primary" onClick={log_in}>Login</Link>
            </div>
            
        </div>
     );
}
 
export default Login;