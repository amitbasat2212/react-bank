import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Transaction from "./Transiction";
import { fetchTransactionsApi,deleteTransactionApi} from "../ApiClient/ApiClientTransactions";
import { StyledTableCell } from "../Style/transactionStyle";
import React, { useState, useEffect } from 'react'


export default function Transictions(props) {
    const [Transactions,setTransactiosns]=useState([])
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchTransactionFromApi();
      }, [])
      
    const fetchTransactionFromApi=()=>{
        fetchTransactionsApi().then((transactions)=>{
            setTransactiosns(transactions)
        })
    }

    const deleteTransaction=(id)=>{
        deleteTransactionApi(id).then(()=>{
            fetchTransactionFromApi();
            props.serBalanceEveryChange()
        })
    }
      
    return (
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="left">transaction vendor</StyledTableCell>
            <StyledTableCell align="left">transaction amount&nbsp;</StyledTableCell>
            <StyledTableCell align="left">transaction category&nbsp;</StyledTableCell>           
            <StyledTableCell align="left">delete transaction&nbsp;</StyledTableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {Transactions.map((tr) => (
            <Transaction  deleteTransaction={deleteTransaction} transaction={tr}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}