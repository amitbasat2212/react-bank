import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import  { useState, useEffect } from 'react'
import Categorey from './Categorey';

export default function Categories() {
  
    const [Categories,setCategories]=useState([])
    const [error, setError] = useState(null);
    useEffect(() => {
     fetch(`http://localhost:8081/categories/`) 
    .then(res => res.json())
    .then(
      (result) => {                    
        setCategories(result)
      },           
      (error) => {              
        setError(error)
      }
    )
      }, [])  
  return (
    <Card sx={{ maxWidth: 345, m: 4 }}>     
      <CardContent sx={{height: 100}} >  
      <Box sx={{ boxShadow: 8 }}></Box>       
        <Typography variant="body2" color="text.secondary">
        {Categories.map((ca) => (
            <Categorey categorey={ca}/>
        ))}                    
        </Typography>
      </CardContent>      
    </Card>
  );
}