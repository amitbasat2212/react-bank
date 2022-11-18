import * as React from 'react';


import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import  { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {AddTransaction} from "../ApiClient/ApiClientTransactions";
import {setBalance,getBalance} from "../ApiClient/ApiClientBalance";
import TransactionButton from './buttons/transactionButton'


const theme = createTheme();
const withdraw="withdraw"
const withDrawOpertor = -1;
const depositOpertor = 1;
const amount = "amount"
const balance="balance_amount"


export default function TransactionForm() {
    const [statusInput,setStatusInput]=useState({
        amount:0,
        category:"",
        vendor:""
    })

  const changeStatusInput=(value,name)=>{
    if(name==amount){
        value = parseFloat(value)
    }    
    setStatusInput({
        ...statusInput,
        [name]: value
    })
  }  

  const UpdateBalance=(amount,newTransaction)=>{
    let newBalace=0
    getBalance().then((oldBalance)=>{
        newBalace=oldBalance[balance]+amount
        setBalance([{[balance]:newBalace}]).then(()=>{
            alert(newTransaction)   
        })
        
    })
  }

  const handleAddTransaction = (ActionName) => {
    const category = statusInput.category
    const vendor = statusInput.vendor
    let amount=0;
    if(ActionName==withdraw){
        amount = parseFloat(statusInput.amount)*withDrawOpertor        
    }else{
        amount = parseFloat(statusInput.amount)*depositOpertor
    }
    const statusNewTransaction ={"amount":amount,"vendor":vendor,"category":category}
    
    AddTransaction(statusNewTransaction).then((newTransaction)=>{
        UpdateBalance(amount,newTransaction)
        
    })



  };

  

  const handleChange=(evt)=>{
        const value = evt.target.value;
        changeStatusInput(value,evt.target.name)        
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
          <Typography component="h1" variant="h5">
            insert transaction
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="amount"
                  label="transaction amount"
                  name="amount"
                  autoComplete="amount"
                  onChange={handleChange}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="category"
                  label="transaction category"
                  name="category"
                  autoComplete="category"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="vendor"
                  label="transaction vendor"
                  type="vendor"
                  id="vendor"
                  autoComplete="vendor"
                  onChange={handleChange}
                />
              </Grid>
              
            </Grid>
            <TransactionButton  handleAddTransaction={handleAddTransaction} color={'error.main'} buttonName={"withdraw"} />
            <TransactionButton  handleAddTransaction={handleAddTransaction } color={'success.main'}  buttonName={"deposit"}/>
            </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}