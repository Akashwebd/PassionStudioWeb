import React from "react";
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material';
import { bgBlur } from '../../utils/cssStyles';
import { HEADER } from '../../config-global';
import Footer from "../../layouts/main/Footer";
import Testimonial from "./Testimonial";
import Services from "./Services";

function NewNav(){
    const theme = useTheme();
    const nav1 = ['About','Services','Portfolio'];
    const nav2 = ['Gallery','Team','Contact']
    return (
        <div className = "parent">
        <AppBar
          component="nav"
          sx={{
            top:'0px',
            paddingTop:'15px',
            paddingBottom:'15px',
            backgroundColor:'transparent',
            boxShadow: 0,
            position:'relative',
            // color: 'black'
          }}
        >
          <Toolbar
            sx={{
                backgroundColor:'transparent',
            }}
          >
            {/* <NavSectionHorizontal data={navConfig} /> */}
            <Box sx={{ flexGrow: 2,justifyContent:'center' , ml:3,display: { xs: 'none', md: 'flex' } }}>
          {nav1.map((page,index) => <Button
                 size="large"
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{mr:2,color: 'black', display: 'block'}}
               >
                {page}
                </Button>)}
          </Box>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            PASSION STUDIO
          </Typography>
          <Box sx={{ flexGrow: 2, ml:5,display: { xs: 'none', md: 'flex' } }}>
          {nav2.map((page,index) => <Button
                 size="large"
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ mr: 2, color: 'black', display: 'block' }}
               >
                {page}
                </Button>)}
          </Box>
          <Box sx={{ flexGrow: 2,display: { xs: 'none', md: 'flex' } }}>
             <Button
                 size="large"
                 variant = "outlined"
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ mr: 2, color: 'black', display: 'block' }}
               >
                Get Started
                </Button>
          </Box>
          </Toolbar>
    
          {/* <Shadow /> */}
        </AppBar>
        <Box
        sx={{
            position:'relative',
              height: '85vh',
              width:'100%',
            //   paddingLeft:'100px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              bgcolor: 'background.neutral',
              backgroundRepeat: 'no-repeat',
              backgroundImage: 'url(/assets/images/passionStudio/hero-bg.jpg)'
          }}
        />
        <Box sx={{ flexGrow: 2,display: { xs: 'none', md: 'flex' },mt:5,padding:"10px" }}>
        <Grid container spacing={16}>
            <Grid item xs={12} md={6} > 
             <Typography
             sx={{justifyContent:'center',padding:"30px",fontStyle: "italic"}}>
             Since the year 2010, boasts to be one of Goa's premier event planning and design company for MICE & SOCIALS with 'Excellence'!.
             <br />
             <br />
             With 10 plus years of running in the industry, we garner our experience and innovate,
            conceptualize and deliver to our clients not only a perfect event, but also an unforgettable
            memory. Our Passionate Professionals are always there to provide exceptional customer
            care and assistance at every step, from start to finish. We always go beyond what is being
            expected of us; allowing us to help you create memorable, innovative and anesthetically styled
            event.
            <br />
            <br />
            At Team Passion Studio, our success story is based on our aim to provide quality standards of service leading to client satisfaction beyond their expectation.
            <br />
            <br />
            Over the decades, Our team has brought immense happiness & satisfaction to our clients with our immaculate planning and organizing skill which include individuals, families, Fortune 500 corporations and non-profit organisations. Where in our team has conceptualized, designed and executed exceptional events right from meetings, conferences, exhibitions, destination weddings and private parties
            <br/>
            <br />
            Our key strength is our in-house infrastructure and logistics support which enables us to deliver our services to clients "On Time, Every Time!
            </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
             <Box
             sx={{
                position:'relative',
                  height: '100%',
                  width:'90%',
                //   paddingLeft:'100px',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                //   bgcolor: 'background.neutral',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: 'url(/assets/images/passionStudio/about.jpg)'
              }}
              />
            </Grid>

        </Grid>
        </Box>
        <Testimonial/>
        {/* <Services/> */}
        {/* <Footer/> */}
        </div>
      );
}

export default NewNav;