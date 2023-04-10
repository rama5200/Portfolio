import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import PortfolioTitle from './components/PortfolioTitle';
import ProjectList from './components/ProjectList';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} className="App-container">
        <Grid item xs={12}>
          <PortfolioTitle />
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <AboutMe />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <ProjectList />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

const BUBBLE_COUNT = 150;
const bubblesContainer = document.querySelector('.bubbles-container');

for (let i = 0; i < BUBBLE_COUNT; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubblesContainer.appendChild(bubble);
}

const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach((bubble) => {
  bubble.addEventListener('mouseover', () => {
    bubble.style.transform = 'scale(1.2)';
  });

  bubble.addEventListener('mouseout', () => {
    bubble.style.transform = 'scale(1)';
  });

  setPosition(bubble);
});

function setPosition(element) {
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  element.style.left = `${randomX}px`;
  element.style.top = `${randomY}px`;
}


export default App;
