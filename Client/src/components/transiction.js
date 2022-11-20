import React, { useState, useEffect } from 'react'

import Box from '@mui/material/Box';
import { StyledTableCell,StyledTableRow } from "../Style/transactionStyle";
import DeleteButton from './buttons/DeleteButton';



export default function Transiction(props) {
    const [transaction]=useState(props.transaction)
    
    const deleteTransaction=()=>{
        props.deleteTransaction(props.transaction.transaction_id)
    }
    
    return (
        <StyledTableRow key={transaction.transaction_id}>
        <StyledTableCell style={{ fontSize:20, fontWeight: 'bold' }}  component="th" scope="row">
          {transaction.transaction_vendor}
        </StyledTableCell>
        <StyledTableCell style={{ fontSize:20, fontWeight: 'bold' }} align="left">{transaction.transiction_amount}</StyledTableCell>
        <StyledTableCell style={{ fontSize:20, fontWeight: 'bold' }} align="left">{transaction.category_name}</StyledTableCell>
       <StyledTableCell>
        <Box textAlign='left'>
          <DeleteButton deleteTransaction={deleteTransaction}/>
        </Box>
      </StyledTableCell>
       
      </StyledTableRow>
    )
}