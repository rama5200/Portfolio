import React from 'react';
import { Typography, Box } from '@mui/material';

const AboutMe = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Acerca de mí
      </Typography>
      <Typography variant="body1" align="justify">
        Hola, mi nombre es Ramiro Slullitel y soy un desarrollador web apasionado por crear soluciones innovadoras y elegantes. Con una formación sólida en tecnología y una gran pasión por el diseño, estoy comprometido con crear productos que no solo sean útiles y eficaces, sino también hermosos y agradables a la vista.
      </Typography>
    </Box>
  );
};

export default AboutMe;
