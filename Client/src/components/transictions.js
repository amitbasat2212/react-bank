import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { fetchTransaction } from "../ApiClient";

import React, { useState, useEffect } from 'react'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));







export default function Transictions(props) {
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
        return error
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
            <StyledTableRow key={tr.transaction_id}>
              <StyledTableCell component="th" scope="row">
                {tr.transaction_vendor}
              </StyledTableCell>
              <StyledTableCell align="left">{tr.transiction_amount}</StyledTableCell>
              <StyledTableCell align="left">{tr.category_name}</StyledTableCell>
             <StyledTableCell>
              <Box textAlign='left'>
                <Button justify="left" variant="contained" color="error">
                   delete
                </Button>
              </Box>
            </StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}