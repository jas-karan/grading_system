import React from 'react';
import './css/Main.css'


export default function main() {
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
                                            <button type="submit" className="btn btn-outline-primary">LOGIN</button>
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