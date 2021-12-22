import React, { useState } from 'react'
import "./css/EvaluationScheme.css";
import Button from "@mui/material/Button"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Header from "./Header.js";
import Footer from "./Footer.js";
import { useLocation } from "react-router-dom";
import axios from 'axios';

function EvaluationScheme() {
    const [rows, setRows] = useState(0);

    const addRow = () => {
        setRows(rows + 1);
    }


    const deleteRow = () => {
        rows > 0 ? setRows(rows - 1) : setRows(rows);
    }

    const submit = () => {
        alert("Evaluation Scheme Submitted")
    }

    const search = useLocation().search;
    const course = new URLSearchParams(search).get('course');
    const session = new URLSearchParams(search).get('session');
    const id = new URLSearchParams(search).get('id');

    const [evalu, setEvalu] = React.useState([]);

    React.useEffect(() => {
        const makeCall = async () => {

            const options = {
                url: `http://localhost:3006/api/teacher/courses/${id}/EvalutaionScheme`,
                method: 'GET'
            }
            let resp = await axios(options);
            console.log(resp.data.data);
            resp = resp.data.data;
            setEvalu(resp);
        }
        makeCall();
    }, [id])

    return (
        <div>
            <Header />
            <div className="evaluation">
                <h4 className="heading-evaluation">Update Evaluation Scheme</h4>
                <div className="main">
                    <div className="select">
                        <h5>Session:&nbsp; </h5>
                        <h6 className="fixed">{session}</h6>
                    </div>
                    <div className="select">
                        <h5>Course: &nbsp;</h5>
                        <h6 className="fixed">{course}</h6>
                    </div>
                    <Button color="success" variant="contained">Mark Scheme for Individual Exam Component</Button>


                    <div className="table">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow className="table-heading">
                                        <TableCell>Exam Id&nbsp;</TableCell>
                                        <TableCell>Exam Name&nbsp;</TableCell>

                                        <TableCell>Maximum Marks&nbsp;</TableCell>
                                        <TableCell>Weightage</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        evalu.map((e) => (
                                            <TableRow
                                                key={e.ExamName}
                                            >
                                                <TableCell><input placeholder={e.ExamId}></input></TableCell>
                                                <TableCell><input placeholder={e.ExamName}></input></TableCell>

                                                <TableCell><input placeholder={e.TotalMarks}></input></TableCell>
                                                <TableCell><input placeholder={e.Weightage}></input></TableCell>
                                            </TableRow>

                                        ))
                                    }
                                    {
                                        [...Array(rows)].map((e) => (
                                            <TableRow
                                                key={e}
                                            >
                                                <TableCell><input></input></TableCell>
                                                <TableCell><input></input></TableCell>
                                                <TableCell><input></input></TableCell>
                                                <TableCell><input></input></TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div style={{ display: 'flex', 'justify-content': 'center' }}>
                        <div className="icons">
                            <IconButton>
                                <AddCircleIcon sx={{ color: 'green', fontSize: '32px' }} onClick={addRow} />
                            </IconButton>

                            <IconButton>
                                <IndeterminateCheckBoxIcon sx={{ color: 'red', fontSize: '32px' }} onClick={deleteRow} />
                            </IconButton>
                        </div>
                        <button onClick={submit} style={{ 'border': '1px solid #2e7d32', 'marginLeft': '90px', 'height': '5vh', backgroundColor: '#2e7d32', color: 'white' }}>Save Scheme</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EvaluationScheme
