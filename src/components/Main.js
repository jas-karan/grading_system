import React from 'react';
import './css/Main.css'
import { Link } from "react-router-dom";

function Main() {


    return (
        <div>
            <div className="outer"></div>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2"></div>
                        <div className="col-lg-6 col-md-8 login-box">
                            <div className="col-lg-12 login-title">
                                LOGIN
                            </div>

                            <div className="col-lg-12 login-form">
                                <div className="col-lg-12 login-form">
                                    <form>
                                        <div className="form-group">
                                            <label className="form-control-label">USERNAME</label>
                                            <input type="text" className="form-control input_text" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-control-label">PASSWORD</label>
                                            <input type="password" className="form-control input_text" />
                                        </div>

                                        <div className="col-lg-12 loginbttm">
                                            <div className="col-lg-6 login-btm login-text">
                                                Forget Password
                                            </div>
                                            <div className="col-lg-6 login-btm login-button">
                                                <Link style={{ textDecoration: "none ", color: "white", border: '1px solid #1A2226', padding: '5px 5px', fontWeight: "bold" }} to='/menuInstructor'>SIGN IN</Link>
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
        </div>
    )
}

export default Main;