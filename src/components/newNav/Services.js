import React from "react";
import PropTypes from 'prop-types';
import { Typography, Box, Grid, Card,CardMedia,CardContent,Paper } from '@mui/material';
import { ServiceData} from './testimonialData';
// import Card from "../../theme/overrides/Card";

function Services({sx}){
return(
    <Paper sx={{mb:5}}>
       <Box
        sx={{ flexGrow: 2, mt: 5, justifyContent: 'center' }}
      >
          <Box
        sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:"center"}}
      >
        <Box sx={{flex: 0.2, height: '1px', backgroundColor: 'orange'}} />
      <Box>
          <Typography variant="h2" sx={{textAlign: 'center',fontFamily:'"Comfortaa", Sans-serif',paddingRight:"10px"}}>SERVICES</Typography>
        </Box>
        <Box sx={{flex: 0.2, height: '1px', backgroundColor: 'orange'}} />
      </Box>
      </Box>
      <Grid container spacing={3}>
        {ServiceData.map(item =>
          <Grid item xs={12} md={2}>
        <Typography variant="h4" sx={{textAlign: 'center',fontFamily:'"Comfortaa", Sans-serif',paddingRight:"10px"}}>{item.title}</Typography>
        </Grid>
        )}
      
      </Grid>
</Paper>
);
}

Services.propTypes = {
    sx: PropTypes.object
  };

export default Services;