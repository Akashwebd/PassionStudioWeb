import React from "react";
import { Typography,Box } from '@mui/material';
import data from './testimonialData';
import MenuCarousel from "../mega-menu/MenuCarousel";
// import MUISliderPage from "../../pages/components/mui/MUISliderPage";

function Testimonial(){

    return(
        <Box>
        <Box sx={{ flexGrow: 2,display: { xs: 'none', md: 'flex' },mt:5,justifyContent:'center'}}>
            <Typography
            variant="h2"
             sx={{fontFamily: "Comfortaa,Sans-serif"}}
            >
                Testimonial
            </Typography>
            {/* <MUISliderPage/> */}
        </Box>
        <Box sx={{ flexGrow: 2,display: { xs: 'none', md: 'flex' },mt:1,justifyContent:'center'}}>
        <MenuCarousel 
             sx={{width:"60%",padding:"20px"}}
            numberShow={1}
            products={data}
            />
        </Box>
        </Box>
    );

}

export default Testimonial;