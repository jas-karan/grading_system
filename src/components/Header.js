import React from 'react'
import './css/Header.css';
import img from './LnmiitLogo.png';
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: 'black' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/MenuInstructor"><img src={img} alt="LNMIIT-LOGO" width="100" height="100%" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://www.google.co.in"><Link to="/menuInstructor">Go to Menu</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
