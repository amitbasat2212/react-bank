
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
export default function NavBarItem(props) {
    return(
        <MenuItem key={props.page} onClick={props.handleCloseNavMenu}>
                  <Typography textAlign="center">{props.page}</Typography>
         </MenuItem>
    )
}


