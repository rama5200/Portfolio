import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ bgcolor: '#fff', p: 3 }}>
      <Typography variant="h6" align="center" sx={{ mb: 2 }}>
        Contacto
      </Typography>
      <Typography variant="body1" align="center" gutterBottom sx={{ mb: 2 }}>
        Si tienes alguna pregunta o simplemente quieres decir hola, no dudes en contactarme por correo electrónico o Linkedin.
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        <Link href="none" underline="none" sx={{ mr: 2, color: '#007F8D', '&:hover': { textDecoration: 'underline' } }}>
          ramaslully@gmail.com
        </Link>
        <Link href="https://www.linkedin.com/in/ramiro-slullitel-486842155/" target="_blank" underline="none" sx={{ color: '#007F8D', '&:hover': { textDecoration: 'underline' } }}>
          Linkedin
        </Link>
      </Typography>
    </Box>
  );
};

export default Contact;
