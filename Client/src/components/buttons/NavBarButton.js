
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
export default function NavBarButton(props) {
    return(
        <Link to={`/${props.page}`} >
              <Button
                key={props.page}
                onClick={props.handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {props.page}
              </Button >
          </Link>
    )
}


