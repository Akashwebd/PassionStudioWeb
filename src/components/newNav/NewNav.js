import React from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography, Button, Grid, Container, Link,Paper } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import Testimonial from './Testimonial';
import Services from './Services';
import Gallery from '../gallery/Gallery';
import NavMobile from '../../layouts/main/nav/mobile/NavMobile';
import NavDesktop from '../../layouts/main/nav/desktop/NavDesktop';
import useOffSetTop from '../../hooks/useOffSetTop';
import { HEADER } from '../../config-global';
import Iconify from '../iconify';
import { bgBlur } from '../../utils/cssStyles';
import Logo from '../logo';
import Image from '../image';
import Team from './Team';
import Achievement from './Achievement';
import VideoPlayer from './VideoPlayer';
// import heroImage from '/assets/images/passionStudio/hero-bg.jpg'

function NewNav() {
  const theme = useTheme();
  const nav1 = ['About', 'Services', 'Portfolio'];
  const nav2 = ['Gallery', 'Team', 'Contact'];
  const isDesktop = useResponsive('up', 'md');
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);
  const navConfig = [
    {
      title: 'About',
      icon: <Iconify icon="eva:info-fill" />,
      path: '#about',
    },
    {
      title: 'Services',
      icon: <Iconify icon="eos-icons:service" />,
      path: '#services',
    },
    {
      title: 'Portfolio',
      path: '#portfolio',
      icon: <Iconify icon="eva:briefcase-fill" />,
    },

    {
      title: 'Gallery',
      path: '#gallery',
      icon: <Iconify icon="eva:image-fill" />,
    },
    {
      title: 'Team',
      path: '#team',
      icon: <Iconify icon="fluent:people-team-48-filled" />,
    },
    {
      title: 'Contact',
      path: '#contact',
      icon: <Iconify icon="eva:phone-call-fill" />,
    },
  ];

  return (
    <div className="parent">
      <AppBar color="transparent" sx={{ boxShadow: 0 }}>
        <Toolbar
          disableGutters
          sx={{
            height: {
              xs: HEADER.H_MOBILE,
              md: HEADER.H_MAIN_DESKTOP,
            },
            transition: theme.transitions.create(['height', 'background-color'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.shorter,
            }),
            ...{
              ...bgBlur({ color: theme.palette.background.default }),
              height: {
                md: HEADER.H_MAIN_DESKTOP - 16,
              },
            },
          }}
        >
          <Container
            sx={{
              height: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: !isDesktop ? 'space-between' : 'center',
            }}
          >
            {!isDesktop && <Logo />}

            {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}

            {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}
          </Container>
        </Toolbar>
      </AppBar>
      <Image ratio="16/9" src="/assets/images/passionStudio/hero-bg.jpg" />
      <Paper elevation={2} sx={{padding:"20px"}}>
      {/* <CountUp end={123457} /> */}
      <Box sx={{ flexGrow: 2, display:"grid", mt: 5, padding: '10px' }}>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6} order={{sm:2,xs:2,md:1}}>
            <Typography sx={{ justifyContent: 'center', padding: '30px', fontStyle: 'italic',fontFamily:'"Comfortaa", Sans-serif' }}>
              Since the year 2010, boasts to be one of Goa's premier event planning and design
              company for MICE & SOCIALS with 'Excellence'!.
              <br />
              <br />
              With 10 plus years of running in the industry, we garner our experience and innovate,
              conceptualize and deliver to our clients not only a perfect event, but also an
              unforgettable memory. Our Passionate Professionals are always there to provide
              exceptional customer care and assistance at every step, from start to finish. We
              always go beyond what is being expected of us; allowing us to help you create
              memorable, innovative and anesthetically styled event.
              <br />
              <br />
              At Team Passion Studio, our success story is based on our aim to provide quality
              standards of service leading to client satisfaction beyond their expectation.
              <br />
              <br />
              Over the decades, Our team has brought immense happiness & satisfaction to our clients
              with our immaculate planning and organizing skill which include individuals, families,
              Fortune 500 corporations and non-profit organisations. Where in our team has
              conceptualized, designed and executed exceptional events right from meetings,
              conferences, exhibitions, destination weddings and private parties
              <br />
              <br />
              Our key strength is our in-house infrastructure and logistics support which enables us
              to deliver our services to clients "On Time, Every Time!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} order={{sm:1,xs:1,md:2}}>
            <Image ratio="4/3" src="/assets/images/passionStudio/about.jpg" />
          </Grid>
        </Grid>
      </Box>
      <VideoPlayer/>
      <Testimonial />
      {/* <Gallery /> */}
      <Team/>
      <Achievement/>
      {/* <Services/> */}
      {/* <Footer/> */}
      </Paper>

    </div>
  );
}

export default NewNav;
