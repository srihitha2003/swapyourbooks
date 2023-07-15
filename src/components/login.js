import React, { useState } from 'react'
import {  useNavigate, Link} from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faKey } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        
       
    }

    return (
    
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Email or Username</label>
                                   
                                    <div className="controls">
                                    <p className="control has-icons-left">
                                        <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>

                                          </p>  
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                    <p className="control has-icons-left">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faKey} />
        </span>

                                          </p>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth"><Link to="/Signup">Login</Link></button>
                                   &nbsp;<div
                                   style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      }}><p ml-1>Not a user? <u>register here</u></p></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Login;