import React from "react";
import { Typography, Box, Grid, Card,CardMedia,CardContent,Paper } from '@mui/material';
import Image from '../image';
 import {Brand } from './testimonialData';


function Clients(){
return(
    <Paper sx={{mb:5,mt:5}}>
        <Typography variant="h2" sx={{fontFamily:'"Comfortaa", Sans-serif',paddingRight:"10px"}}>Our Loyal Customers</Typography>
        <Box sx={{padding:"30px"}}>
        <Grid container spacing={3}>
            {
                Brand.map(item => 
            <Grid item xs={12} md={2}>
            <Box
                //   ref={ref}
                component="div"
                sx={{
                    width: 200,
                    height: 60,
                    display: 'inline-flex',
                    // justifyContent:"center",
                    // ...sx,
                }}
    //   {...other}
    >
      <Image src={item} />
            </Box>
            </Grid>
                )
            }
            </Grid>
        </Box>
    </Paper>
)
}

export default Clients;