import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Balance from './Balance';
import NavBarItem from './buttons/NavBarItem';
import NavBarButton from './buttons/NavBarButton';

const pages = ['transactions', 'operations', 'breakdown'];


export default function NavBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }; 



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
               <NavBarItem page={page} handleCloseNavMenu={handleCloseNavMenu}/>
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
                <NavBarButton page={page} handleCloseNavMenu={handleCloseNavMenu}/>
            ))}
          </Box>
          <Balance balance={props.balance}/>
        </Toolbar>
       
      </Container>
    </AppBar>
  );
}
