import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { StyledTableCell,StyledTableRow } from "../Style/transactionStyle";



export default function Transiction(props) {
    const [transaction]=useState(props.transaction)
    
    const deleteTransaction=()=>{
        props.deleteTransaction(props.transaction.transaction_id)
    }
    
    return (
        <StyledTableRow key={transaction.transaction_id}>
        <StyledTableCell   component="th" scope="row">
          {transaction.transaction_vendor}
        </StyledTableCell>
        <StyledTableCell align="left">{transaction.transiction_amount}</StyledTableCell>
        <StyledTableCell align="left">{transaction.category_name}</StyledTableCell>
       <StyledTableCell>
        <Box textAlign='left'>
          <Button onClick={deleteTransaction} justify="left" variant="contained" color="error">
             delete
          </Button>
        </Box>
      </StyledTableCell>
       
      </StyledTableRow>
    )
}