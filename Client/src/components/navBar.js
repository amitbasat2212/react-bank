import * as React from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import  { useState, useEffect } from 'react'
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import {getBalance} from "../ApiClient/ApiClientBalance";
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Balance from './Balance';

const pages = ['transactions', 'operations', 'breakdown'];


export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [balance,setBalance]=useState(0)  

  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  useEffect(() => {
    getBalance().then((newBalance)=>{
        setBalance(newBalance)
    })
  }, [])



  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> 
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
             <Link to={`/${page}`} >
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button >
              </Link>
            ))}
          </Box>
          <Balance balance={balance}/>
        </Toolbar>
       
      </Container>
    </AppBar>
  );
}
