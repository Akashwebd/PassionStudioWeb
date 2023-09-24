import { useState } from 'react';
// @mui
import { Box, Card, Grid, Container, Typography } from '@mui/material';
// _mock
import _mock from '../../_mock';
// components
import Image from '../image';
import Lightbox from '../lightbox';

// ----------------------------------------------------------------------

const imagesLightbox = [...Array(8)].map((_, index) => ({
  src: _mock.image.cover(index + 1),
  title: 'ThePassionStudios',
  description: 'Image ka description here',
}));

// ----------------------------------------------------------------------

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(-1);

  const handleOpenBasic = (imageUrl) => {
    const imageIndex = imagesLightbox.findIndex((image) => image.src === imageUrl);
    setSelectedImage(imageIndex);
  };

  const handleCloseBasic = () => {
    setSelectedImage(-1);
  };

  return (
    <>
      <Container sx={{ my: 10 }}>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Gallery
        </Typography>
        <Card sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box
                gap={1}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(2, 1fr)',
                  sm: 'repeat(3, 1fr)',
                  md: 'repeat(4, 1fr)',
                }}
              >
                {imagesLightbox.map((img) => (
                  <Image
                    key={img.src}
                    alt={img.src}
                    src={img.src}
                    ratio="1/1"
                    onClick={() => handleOpenBasic(img.src)}
                    sx={{
                      borderRadius: 1,
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>

      <Lightbox
        disabledZoom={false}
        disabledTotal={false}
        disabledVideo={false}
        disabledCaptions={false}
        disabledSlideshow={false}
        disabledThumbnails={false}
        disabledFullscreen={false}
        index={selectedImage}
        open={selectedImage >= 0}
        close={handleCloseBasic}
        slides={imagesLightbox}
      />
    </>
  );
}
