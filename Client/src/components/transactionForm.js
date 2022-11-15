import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import  { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function TransactionForm() {
    const [statusInput,setStatusInput]=useState({

    })

  const handleSubmit = () => {
    const newTransaction = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(statusInput)
    };
    fetch('http://localhost:8081/transactions/', newTransaction)
        .then(response => response.json())
        .then(
            (result) => {   
                alert(`you have new transaction ${result.data}`)
            },           
            (error) => {              
              return error
            }
          )
  };

  const handleChange=(evt)=>{
        const value = evt.target.value;
        setStatusInput({
            ...statusInput,
            [evt.target.name]: value
        });
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}