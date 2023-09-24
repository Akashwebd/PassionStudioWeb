import React from 'react';
import { Typography, Box, Grid, Card,CardMedia,CardContent,Paper } from '@mui/material';
import { EmployeeData } from './testimonialData';
// import img1 from '../../../public/assets/Team/team-1.jpg';


function Team(){
    console.log(EmployeeData,'checkdata')
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
          <Typography variant="h2" sx={{textAlign: 'center',fontFamily:'"Comfortaa", Sans-serif',paddingRight:"10px"}}>TEAM</Typography>
        </Box>

        <Box sx={{flex: 0.2, height: '1px', backgroundColor: 'orange'}} />
      </Box>
        {/* <MUISliderPage/> */}
      </Box>
      <Box sx={{padding:"30px"}}>
      <Grid container spacing={3}>
      {EmployeeData.map(item =>{
        console.log(item,'checkdata')
        return (<Grid item xs={12} md={3}>
            <Card>
        <CardMedia
        sx={{ height: "300px",backgroundPosition:"top"}}
        image={item.image}
        // title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <b>{item.name}</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {item.title}
        </Typography>
        </CardContent>
        </Card>
            </Grid>)
      }
      )}
      </Grid>
      </Box>

    </Paper>
);

}

export default Team;