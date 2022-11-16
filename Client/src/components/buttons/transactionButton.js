

import Button from '@mui/material/Button';
export default function TransactionButton(props){

    return(
        <Button buttonName={props.buttonName} onClick={() => props.handleAddTransaction(props.buttonName)} sx={{ mt: 4,ml:2,maxWidth: 100,bgcolor: props.color}} variant="contained">{props.buttonName}</Button>

    )
}