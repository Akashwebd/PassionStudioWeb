import PropTypes from 'prop-types';
import React,{ useEffect, useRef,useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';
// import Icon from 'react-native-ico-technology-logos';
//
import Image from '../image';
import TextMaxLine from '../text-max-line';
import Carousel, { CarouselDots, CarouselArrows } from '../carousel';

// ----------------------------------------------------------------------

MenuCarousel.propTypes = {
  sx: PropTypes.object,
  products: PropTypes.array,
  numberShow: PropTypes.number,
};

export default function MenuCarousel({ products, numberShow, sx }) {
  const [index,setIndex] = useState(0);
  const theme = useTheme();
  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: numberShow,
    slidesToScroll: numberShow,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots(),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  useEffect(()=>{
    const interval = setInterval(() => { 
      carouselRef.current?.slickNext();
      setIndex(index+1);
    }, 5000);
    return () => clearInterval(interval);
  },[index]);

  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <CarouselArrows
        filled
        onNext={handleNext}
        onPrevious={handlePrev}
        leftButtonProps={{
          size: 'small',
          sx: { top: 56, left: -8 },
        }}
        rightButtonProps={{
          size: 'small',
          sx: { top: 56, right: -8 },
        }}
      >
        <Carousel ref={carouselRef} {...carouselSettings}>
          {products.map((product) => (
            <Box key={product.name} sx={{ px: 1, textAlign: 'center',padding:"10px" }}>
              {/* <Link
                component={RouterLink}
                to={product.path}
                color="inherit"
                underline="none"
                sx={{
                  display: 'block',
                  transition: theme.transitions.create('all'),
                  '&:hover': { color: 'primary.main' },
                }}
              > */}
                {/* <Image
                  alt={product.image}
                  src={product.image}
                  ratio="1/1"
                  disabledEffect
                  sx={{ borderRadius: 1, mb: 1 }}
                /> */}
                {/* <Icon name="t-mobile" /> */}
                <TextMaxLine line={5} variant="body2" sx={{ fontWeight: 'fontWeightMedium',mb:1 }}>
                  {product.quote}
                </TextMaxLine>
                <TextMaxLine line={2} variant="h4" sx={{ fontWeight: 'fontWeightMedium',mb:1 }}>
                  {product.name? product.name:null}
                </TextMaxLine>
                <TextMaxLine line={2} variant="body1" sx={{ fontWeight: 'fontWeightMedium',mb:1 }}>
                  {product.title?product.title:null}
                </TextMaxLine>
                <TextMaxLine line={2} variant="h4" sx={{ fontWeight: 'fontWeightMedium',mb:1 }}>
                  {product.company}
                </TextMaxLine>
              {/* </Link> */}
            </Box>
          ))}
        </Carousel>
      </CarouselArrows>
    </Box>
  );
}
