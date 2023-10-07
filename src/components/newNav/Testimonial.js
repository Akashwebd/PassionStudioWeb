import React from 'react';
import { Typography, Box } from '@mui/material';
import {testimonialData} from './testimonialData';
import MenuCarousel from '../mega-menu/MenuCarousel';
// import MUISliderPage from "../../pages/components/mui/MUISliderPage";

function Testimonial() {
  return (
    <Box id="portfolio">
      <Box
        sx={{ flexGrow: 2, display: "flex", mt: 5, justifyContent: 'center' }}
      >
        <Typography variant="h2" sx={{fontFamily:'"Comfortaa", Sans-serif'}}>Testimonials</Typography>
        {/* <MUISliderPage/> */}
      </Box>
      <Box
        sx={{ flexGrow: 2, display: "flex", mt: 1, justifyContent: 'center' }}
      >
        <MenuCarousel sx={{ width: '60%', padding: '20px' }} numberShow={1} products={testimonialData} />
      </Box>
    </Box>
  );
}

export default Testimonial;
