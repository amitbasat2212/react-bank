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

import {validateFormTransaction} from "../Varification/TransactionFormVarifiction";
import * as Constants from '../consts/transactionFormConsts'
import InputLabel from '@mui/material/InputLabel';
import TransactionButton from './buttons/transactionButton'
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



const theme = createTheme();



export default function TransactionForm(props) {
    const [statusInput,setStatusInput]=useState({
        amount:0,        
        vendor:""
    })
  const [categoryChoose,setCategoryChoose]=useState('')
    

  const changeStatusInput=(value,name)=>{
    if(name==Constants.amount){
        value = parseFloat(value)
    }    
    setStatusInput({
        ...statusInput,
        [name]: value
    })
  }  


  const checkValidation=(transaction)=>{
    const error=validateFormTransaction(transaction) 
    return error;
  }

  const handleAddTransaction = (ActionName) => {  
    const category = categoryChoose
    const vendor = statusInput.vendor
    let amount=0;
    if(ActionName==Constants.withdraw){
        amount = parseFloat(statusInput.amount)*Constants.withDrawOpertor        
    }else{
        amount = parseFloat(statusInput.amount)*Constants.depositOpertor
    }
    const statusNewTransaction ={"amount":amount,"vendor":vendor,"category":category}
  
    
    AddTransaction(statusNewTransaction).then((newTransaction)=>{
        const error = checkValidation(statusNewTransaction)
        if(error instanceof Error){
            alert(error)
        }else{
            alert("you create a transaction!")
            props.serBalanceEveryChange()   
            
        }
    
       
    })



  };

  
  const handleCategories=(evt)=>{
    const value = evt.target.value;
    setCategoryChoose(value,evt.target.name)   
  }

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
                  type="number"
                  min={0}
                  onChange={handleChange}
                />
              </Grid>              
              
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={categoryChoose}
                label="Cateory"
                onChange={handleCategories}
                >
                {props.categories.map((c) => (
                    <MenuItem value={c.category_name}>{c.category_name}</MenuItem>
                ))}
                </Select>
            </FormControl>
    
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