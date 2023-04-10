import React from 'react';
import Project from './Project';
import { Grid, Container } from '@mui/material';
import '../styles/projectList.css';
import projectsData from '../projects.json';

const ProjectList = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {projectsData.map((project, index) => (
            <Grid key={index} item xs={12} md={6}>
              <Project project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProjectList;
