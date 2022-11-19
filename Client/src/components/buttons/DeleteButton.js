import Button from '@mui/material/Button';




export default function DeleteButton(props){

    return(
        <Button onClick={props.deleteTransaction} justify="left" variant="contained" color="error">
            delete
        </Button>
    )
}





