import React, { useState } from 'react';
import styles from './css/Main.css'
import { Link } from "react-router-dom";

function Main() {
    const [user, setUser] = useState(null);

    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-title">
                            Login
                        </div>

                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form>
                                    <div className="form-group">
                                        <label className="form-control-label">USERNAME</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input type="password" className="form-control" />
                                    </div>

                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text">
                                            Forget Password
                                        </div>
                                        <div className="col-lg-6 login-btm login-button">
                                            <Link style={{ textDecoration: "none ", color: "white", border: '1px solid white', padding: '5px' }} to='/MenuInstructor'>Main</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;