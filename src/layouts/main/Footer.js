import { Link as RouterLink, useLocation } from 'react-router-dom';
// @mui
import { Box, Grid, Link, Stack, Divider, Container, Typography, IconButton } from '@mui/material';
// routes
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { SocialIcon } from 'react-social-icons';
import { PATH_PAGE } from '../../routes/paths';
// _mock
import { _socials } from '../../_mock/arrays';
// components
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

const LINKS = [
  {name: 'Instagram', href: PATH_PAGE.instagram },
  {name: 'Facebook', href: PATH_PAGE.facebook },
  { name: 'Linkedin', href: PATH_PAGE.linkedin },
  { name: 'Linkedin', href: PATH_PAGE.linkedin },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  // function openOnClick(value){
  //   switch(value){
  //     case 0:
  //       histor
  //   }

  // }

  // const simpleFooter = (
  //   <Box
  //     component="footer"
  //     sx={{
  //       py: 5,
  //       textAlign: 'center',
  //       position: 'relative',
  //       bgcolor: 'background.default',
  //     }}
  //   >
  //     <Container>
  //       <Logo sx={{ mb: 1, mx: 'auto' }} />

  //       <Typography variant="caption" component="div">
  //         © All rights reserved
  //         <br /> made by &nbsp;
  //         <Link href="https://minimals.cc/"> minimals.cc </Link>
  //       </Typography>
  //     </Container>
  //   </Box>
  // );

  const mainFooter = (
    <Box
      id="contact"
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />
      <Typography
            variant="h2"
            noWrap
            component="a"
            // href="/"
            sx={{
              justifyContent:'center',
              mr: 2,
              mt:2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: '"Comfortaa", Sans-serif',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Contact Us
          </Typography>

      <Container sx={{ pt: 5 }}>
        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >
          {/* <Grid item xs={6} sx={{ mb: 3 }}> */}
          <br />
          <Grid item xs={12} md={3} sx={{ mb: 3,pr:2 }}>
          <LocationOnIcon/>
            <Typography variant="body1" sx={{ pr: { md: 5 },textAlign:'center' }}>
            <span>Ho.No 10/35, 1, Dr Dada Vaidya Rd, Near Mahalaxmi Temple, Altinho, Panaji, Goa 403001</span>
            </Typography>
            <br/>
          </Grid>
          <Grid item xs={12} md={3} sx={{ mb: 3,pr:2 }}>
            <EmailIcon/>
            <Typography variant="body1" sx={{ pr: { md: 5 },textAlign:'center' }}>
            akashstone22@gmail.com
            </Typography>
            <br/>
          </Grid>
          <Grid item xs={12} md={3} sx={{ mb: 3 }}>
            <LocalPhoneIcon/>
            <Typography variant="body1" sx={{ pr: { md: 5 },textAlign:'center' }}>
            +91 7820940677/8975113252
            </Typography>
          </Grid>

          <Grid item xs={8} md={3}>
            <Stack
              spacing={1}
              direction="row"
              justifyContent={{ xs: 'center', md: 'center' }}
              sx={{
                mt: 1,
                mb: { xs: 5, md: 0 },
              }}
            >
              {/* {_socials.map((social,index) => (
                <IconButton size="large" key={social.name}>
                  <Link to ={LINKS[index].href}>
                  <Iconify icon={social.icon} />
                  </Link>
                </IconButton>
              ))} */}
              <SocialIcon  url="https://www.instagram.com/akash_ghare_08/" />
              <SocialIcon url="https://www.linkedin.com/in/akash-ghare-1a5470107/" />
            </Stack>
          </Grid>

          {/* <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              justifyContent="space-between"
              direction={{ xs: 'column', md: 'row' }}
            >
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      to={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid> */}
        </Grid>

        <Typography
          variant="caption"
          component="div"
          sx={{
            mt: 1,
            pb: 1,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © 2023. All rights reserved
        </Typography>
      </Container>
    </Box>
  );

  return mainFooter;
}
