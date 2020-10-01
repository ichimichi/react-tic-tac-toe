import React, {useState} from 'react';
import axios from "axios";

function SignUp(props)
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        const url = 'http://localhost:8090/register'
        const body = {
            username: username,
            password: password
        }

        const options = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            data: body,
            url,
        };

        axios(options).then((response) => {
            console.log(response);
        });
    }

    return (
        <div className="content">
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                            <form className="form" onSubmit={handleSignUp}>
                                <div className="card card-login card-hidden">
                                    <div className="card-header card-header-rose text-center">
                                        <h4 className="card-title">Sign Up</h4>
                                    </div>
                                    <div className="card-body ">
                                        <p className="card-description text-center">Enter details below to sign up
                                            your account</p>
                                        <span className="bmd-form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="material-icons">face</i>
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control" value={username}
                                                           onChange={(e) => setUsername(e.target.value)}
                                                           placeholder="User Name..."/>
                                                </div>
                                            </span>
                                        <span className="bmd-form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="material-icons">lock_outline</i>
                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control" value={password}
                                                           onChange={(e) => setPassword(e.target.value)}
                                                           placeholder="Password..."/>
                                                </div>
                                            </span>
                                    </div>
                                    <div className="card-footer justify-content-center">
                                        <button type="submit" className="btn btn-rose btn-link btn-lg">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SignUp;
