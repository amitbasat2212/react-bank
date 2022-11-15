import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Categories() {
  return (
    <Card  sx={{ maxWidth: 345, m: 4 }}>     
      <CardContent >  
      <Box component="div" sx={{ overflow: 'hidden',visibility: 'visible' ,bgcolor: 'text.secondary' }}>
            Not scrollable, overflow is hidden
      </Box> 
       
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}