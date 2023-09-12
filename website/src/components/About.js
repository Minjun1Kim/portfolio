import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Paper } from '@mui/material';
import ProfileCard from './parts/ProfileCard'; // Import the DiscordProfileCard component
import Avatar from '../images/profilepic.png'
import Banner from '../images/lofiboy.gif'
import JSLogo from '../images/JSLogo.png'
import NokiaLogo from '../images/nokia.jpg'
import UofTLogo from '../images/uoft.jpg'

const useStyles = makeStyles((theme) => ({
  about: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    background: theme.palette.background.default,
    minHeight: '100vh',
    overflowY: 'auto',
    alignItems: 'center', // Center content vertically
    justifyContent: 'center', // Center content horizontally
  },
  aboutContent: {
    padding: theme.spacing(2),
  },
}));

function About() {
  const classes = useStyles();

  const user = {
    avatar: Avatar,
    banner: Banner,
    username: 'Minjun Kim', // User's Discord username
    bio: 'A passionate developer who loves coding.', // User's bio
    dnd: true, // Whether the user is in "Do Not Disturb" mode
    activity: "Editing ProfileCard.js",
    activityImg: JSLogo,
    socials: [
      {
        link: 'https://twitter.com/johndoe',
        icon: <i className="fab fa-twitter"></i>, // Replace with appropriate icon
      },
      {
        link: 'https://github.com/johndoe',
        icon: <i className="fab fa-github"></i>, // Replace with appropriate icon
      },
      // Add more social links as needed
    ],
  };

  const experience = [
    {
      title: 'Automation Developer',
      logo: NokiaLogo,
      company: 'Nokia',
      location: 'Toronto, ON',
      date: 'September 2023 - Present',
      description: 'Worked on Cloud Networks and Security team',
      responsibilities: [
        'Developed and maintained web applications using React.js and Node.js.',
        'Collaborated with cross-functional teams to design and implement new features.',
        'Optimized application performance and resolved bugs and issues.',
      ],
    },
    {
      title: 'Teaching Assistant',
      logo: UofTLogo,
      company: 'University of Toronto',
      location: 'Toronto, ON',
      date: 'January 2018 - May 2020',
      description: 'Teaching Assistant for CSC108: Introduction to Computer Programming',
      responsibilities: [
        'Designed and implemented responsive web layouts using HTML, CSS, and JavaScript.',
        'Worked closely with UX/UI designers to create visually appealing user interfaces.',
        'Collaborated with the backend development team to integrate frontend components.',
      ],
    },
    // Add more job experiences here
  ];


  return (
    <section id="about" className={classes.about}>
      <ProfileCard user={user} experience={experience}/>
    </section>
  );
}

export default About;
