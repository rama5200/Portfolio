import React from 'react';
import { Box, Typography } from '@mui/material';

const PortfolioTitle = () => {
  return (
    <Box sx={{ textAlign: 'center', backgroundColor: '#007F8D', py: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ borderRadius: '50%', overflow: 'hidden', marginRight: 3, flexShrink: 0, width: '150px', height: '150px', marginLeft: '30px' }}>
        <img src="profile.jpeg" alt="Mi foto de perfil" width="100%" height="100%" style={{ objectFit: 'cover' }} />
      </Box>
      <Box sx={{ alignSelf: 'flex-start' }}>
        <Typography variant="h3" component="h1" sx={{ color: '#fff', fontFamily: 'Roboto', fontWeight: 700, marginBottom: 1 }}>
          Ramiro Slullitel
        </Typography>
        <Typography variant="h5" component="h2" sx={{ color: '#fff', fontFamily: 'Roboto', fontWeight: 400, marginBottom: 2 }}>
          Desarrollador Full-Stack
        </Typography>
        <Typography variant="h6" component="div" sx={{ color: '#fff', fontFamily: 'Roboto', fontWeight: 400 }}>
          Bienvenidos a mi portfolio web
        </Typography>
      </Box>
    </Box>
  );
};

export default PortfolioTitle;
