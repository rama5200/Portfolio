import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, CardContent, Typography, Button } from '@mui/material';

const Project = ({ project }) => {

  return (
    <Card sx={{ margin: 'auto', marginTop: 3, boxShadow: 'none' }}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        autoPlay
        infiniteLoop
        interval={5000}
        swipeable
      >
        {project.imageUrls.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`${project.title} imagen ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <CardContent>
        <Typography variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <div sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <Button
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="primary"
            sx={{ marginRight: 1 }}
          >
            Ver en vivo
          </Button>
          <Button
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            color="primary"
          >
            Código fuente
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Project;
