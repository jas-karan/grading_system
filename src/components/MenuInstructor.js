import React from 'react'
import Button from "@mui/material/Button";
import "./css/MenuInstructor.css"
import Header from "./Header.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";

function MenuInstructor() {
    return (
        <div>
            <Header />
            <div className="menu">
                <Button variant='contained'><Link style={{ 'color': 'white', 'textDecoration': 'none' }} to="/MenuInstructor/EvaluationScheme">Evaluation Scheme</Link></Button>
                <Button variant='contained'><Link style={{ 'color': 'white', 'textDecoration': 'none' }} to="/MenuInstructor/CourseList">Mark Entry Internal</Link></Button>
                <Button variant='contained'><Link style={{ 'color': 'white', 'textDecoration': 'none' }} to="/MenuInstructor/CourseList">Mark Entry Endtem</Link></Button>
                <Button variant='contained'>BTP Mark Entry</Button>
                <Button variant='contained'>Extra Curriculum Grade Entry</Button>
                <Button variant='contained' className="last-button">Zero Credit Project Grade Entry</Button>
            </div>
            <Footer />
        </div>
    )
}

export default MenuInstructor
