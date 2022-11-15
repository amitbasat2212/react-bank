import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Transaction from "./Transiction";
import { fetchTransaction } from "../ApiClient";
import { StyledTableCell,StyledTableRow } from "../Style/transactionStyle";
import React, { useState, useEffect } from 'react'



export default function Transictions() {
    const [Transactions,setTransactions]=useState([])
    const [error, setError] = useState(null);
    useEffect(() => {
     fetch(`http://localhost:8081/transactions/`) 
    .then(res => res.json())
    .then(
      (result) => {   
        console.log(result)           
        setTransactions(result)
      },           
      (error) => {              
        setError(error)
      }
    )
      }, [])
  
    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">transaction vendor</StyledTableCell>
            <StyledTableCell align="left">transaction amount&nbsp;</StyledTableCell>
            <StyledTableCell align="left">transaction category&nbsp;</StyledTableCell>           
            <StyledTableCell align="left">delete transaction&nbsp;</StyledTableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {Transactions.map((tr) => (
            <Transaction transaction={tr}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}