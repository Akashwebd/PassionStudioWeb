import React from "react";
import PropTypes from 'prop-types';
import { AppBar, Box, Grid, Typography, Card} from '@mui/material';
// import Card from "../../theme/overrides/Card";

function Services({sx}){
return(
    <Grid container sx={{justifyContent:"center"}} spacing={16}>
        <Grid item xs={12} md={3}>
                    <Card
                    sx={{
                    p: 2,
                    minWidth: 200,
                    borderRadius: 1.5,
                    textAlign: 'left',
                    position: 'relative',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    textTransform: 'capitalize',
                    ...sx,
                    }}
                >
                <Typography variant="h2" component="div" noWrap sx={{ color: 'text.secondary' }}>
                    hello
                    </Typography>
                </Card>
        </Grid>
        <Grid item xs={12} md={3}>
                    <Card
                    sx={{
                    p: 2,
                    minWidth: 200,
                    borderRadius: 1.5,
                    textAlign: 'left',
                    position: 'relative',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    textTransform: 'capitalize',
                    ...sx,
                    }}
                >
                <Typography variant="h2" component="div" noWrap sx={{ color: 'text.secondary' }}>
                    hello
                    </Typography>
                </Card>
        </Grid>
        <Grid item xs={12} md={3}>
                    <Card
                    sx={{
                    p: 2,
                    minWidth: 200,
                    borderRadius: 1.5,
                    textAlign: 'left',
                    position: 'relative',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    textTransform: 'capitalize',
                    ...sx,
                    }}
                >
                <Typography variant="h2" component="div" noWrap sx={{ color: 'text.secondary' }}>
                    hello
                    </Typography>
                </Card>
        </Grid>
        <Grid item xs={12} md={3}>
                    <Card
                    sx={{
                    p: 2,
                    minWidth: 200,
                    borderRadius: 1.5,
                    textAlign: 'left',
                    position: 'relative',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    textTransform: 'capitalize',
                    ...sx,
                    }}
                >
                <Typography variant="h2" component="div" noWrap sx={{ color: 'text.secondary' }}>
                    hello
                    </Typography>
                </Card>
        </Grid>
       
    </Grid>
);
}

Services.propTypes = {
    sx: PropTypes.object
  };

export default Services;