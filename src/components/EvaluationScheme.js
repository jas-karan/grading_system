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

function EvaluationScheme() {
    const [rows, setRows] = useState(2);

    const addRow = () => {
        setRows(rows + 1);
    }


    const deleteRow = () => {
        rows > 0 ? setRows(rows - 1) : setRows(rows);
    }

    return (
        <div>
            <Header />
            <div className="evaluation">
                <h4 className="heading-evaluation">Update Evaluation Scheme</h4>
                <div className="main">
                    <div className="select">
                        <label htmlFor="session">Session:&nbsp;&nbsp;</label>
                        <select name="session" id="session">
                            <option value="Odd Sem 2020-2021 I">Odd Sem 2020-2021 I</option>
                            <option value="Even Sem 2020-2021 II">Even Sem 2020-2021 II</option>
                        </select>
                    </div>
                    <div className="select">
                        <label htmlFor="Course">Course:&nbsp;&nbsp;</label>
                        <select name="Course" id="Course">
                            <option value="Computer Security">Computer Security</option>
                            <option value="Web Security">Web Security</option>
                        </select>
                    </div>
                    <Button color="success" variant="contained">Mark Scheme for Individual Exam Component</Button>


                    <div className="table">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Exam Name&nbsp;</TableCell>
                                        <TableCell>Minimum Marks&nbsp;</TableCell>
                                        <TableCell>Maximum Marks&nbsp;</TableCell>
                                        <TableCell>Weightage</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        [...Array(rows)].map((i) => (
                                            <TableRow
                                                key={i}
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
                    <IconButton>
                        <AddCircleIcon sx={{ color: 'green' }} onClick={addRow} />
                    </IconButton>

                    <IconButton>
                        <IndeterminateCheckBoxIcon sx={{ color: 'red' }} onClick={deleteRow} />
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default EvaluationScheme
