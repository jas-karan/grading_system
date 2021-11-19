import React from 'react'
import styles from "./css/MarkEntryEndterm.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from "./Header.js";
import Footer from "./Footer.js";

function MarkEntryEndterm() {
    const auto = [{ 'Grade': 'A', 'min': '45', 'max': '60', 'points': '10' }, { 'Grade': 'A', 'min': '45', 'max': '60', 'points': '10' }, { 'Grade': 'A', 'min': '45', 'max': '60', 'points': '10' }];
    const manual = [{ 'Grade': 'A', 'min': '45', 'max': '60', 'points': '10' }, { 'Grade': 'A', 'min': '45', 'max': '60', 'points': '10' }, { 'Grade': 'A', 'min': '45', 'max': '60', 'points': '10' }];

    return (
        <div><Header />
            <div className="mark_entry_endterm">
                <h4 className="heading">Mark Entry - Endterm</h4>
                <div className="main">
                    <div className="select">
                        <h5>Session:&nbsp; </h5>
                        <h6 className="fixed">Odd Sem 2020-2021 II</h6>
                    </div>
                    <div className="select">
                        <h5>Course: &nbsp;</h5>
                        <h6 className="fixed">Computer Networks</h6>
                    </div>
                    <div className="select">
                        <h5>Import Student Marks: &nbsp;</h5>
                        <input type="file" id="myfile" name="myfile"></input>
                    </div>
                    <div className="select">
                        <h5>Export Student List:&nbsp;&nbsp;&nbsp;</h5>
                        <button style={{ 'border': '1px solid black' }}>Export</button>
                    </div>

                    <div className="table_area">
                        <div className="table">
                            <h5>Automated grade Range</h5>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Grade&nbsp;</TableCell>
                                            <TableCell>Min&nbsp;</TableCell>
                                            <TableCell>Max&nbsp;</TableCell>
                                            <TableCell>Points</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            auto.map((x) => (
                                                <TableRow>
                                                    <TableCell>{x.Grade}&nbsp;</TableCell>
                                                    <TableCell>{x.min}&nbsp;</TableCell>
                                                    <TableCell>{x.max}&nbsp;</TableCell>
                                                    <TableCell>{x.points}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <div className="table">
                            <h5>Manual grade Range</h5>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Grade&nbsp;</TableCell>
                                            <TableCell>Min&nbsp;</TableCell>
                                            <TableCell>Max&nbsp;</TableCell>
                                            <TableCell>Points</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            manual.map((x) => (
                                                <TableRow>
                                                    <TableCell>{x.Grade}&nbsp;</TableCell>
                                                    <TableCell><input style={{ 'width': '3vw' }} type="text" placeholder={x.min} />&nbsp;</TableCell>
                                                    <TableCell><input style={{ 'width': '3vw' }} type="text" placeholder={x.max} />&nbsp;</TableCell>
                                                    <TableCell>{x.points}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <button style={{ 'border': '1px solid black', 'marginTop': '1vw', 'backgroundColor': 'orange', 'fontWeight': 'bold' }}>Save Manual Grade Range</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarkEntryEndterm
