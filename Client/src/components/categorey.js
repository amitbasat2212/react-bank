
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import  { useState, useEffect } from 'react'

export default function Categorey(props){
    const [categorey] = useState(props.categorey) 
    return(       
                <Box sx={{ boxShadow: 1 }}>
                <Typography variant="h8" component="h2">              
                {`${categorey.category_name}:${categorey.category_money_spend}`}
                </Typography>            
                </Box>                           
       
        
    )
}