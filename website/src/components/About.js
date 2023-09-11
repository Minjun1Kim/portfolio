import React from 'react';
import { makeStyles } from '@mui/styles';
import profileImage from '../images/about.jpg';
import { Container, Typography, Paper } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  about: {
    display: 'flex',
    flexDirection: 'column', // Flex direction set to column
    gap: '2rem',
    background: theme.palette.secondary.main,
    height: '100vh', // Set a fixed height for the container
    overflowY: 'auto', // Enable vertical scrolling if content overflows
  },
  aboutImg: {
    '& img': {
      width: '20vw',
      borderRadius: '0.5rem',
    },
    '&:hover': {
      opacity: 0.95,
      border: `1px solid ${theme.palette.text.primary}`,
    },
  },
  heading: {
    textAlign: 'center',
    fontSize: '4.5rem',
  },
  aboutContent: {
    marginLeft: '15%',
  },
}));

function About() {
  const classes = useStyles();

  return (
    <Paper className={classes.about} component="section">
      <div className={classes.aboutImg}>
        <img src={profileImage} alt="About" />
      </div>
      <Container className={classes.aboutContent}>
        <Typography variant="h2" className={classes.heading}>
          About Me
        </Typography>
        {/* Add your About content */}
      </Container>
    </Paper>
  );
}

export default About;
