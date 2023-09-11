import React, { useEffect } from 'react';
import Typed from 'react-typed';
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Logo from '../images/photo2.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DownloadIcon from '@mui/icons-material/Download';
import YouTube from '@mui/icons-material/YouTube';
import Email from '@mui/icons-material/Email';

const useStyles = makeStyles((theme) => ({
    home: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        minHeight: '100vh',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // Align the image to the top
        minHeight: '100vh',
    },

    homeImg: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        animation: '$floatImage 4s ease-in-out infinite',
        marginTop: theme.spacing(30), // Adjust the top margin as needed
    },

    shape: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    homeContent: {
        textAlign: 'center',
        color: theme.palette.text.primary,
    },

    typingContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '95vh', // Adjust the width as needed
    },

    typingText: {
        color: theme.palette.primary.main,
        whitespace: 'nowrap',
    },

    socialMedia: {
        marginTop: theme.spacing(3),
        '& a': {
            margin: theme.spacing(1.5),
            textDecoration: 'none',
            color: theme.palette.text.primary,
            fontSize: '2rem',
            '&:hover': {
                color: theme.palette.primary.main,
            },
        },
    },
    icon: {
        color: theme.palette.text.primary,
    },
    btn: {
        marginTop: theme.spacing(2),
        fontSize: '1.6rem',
    },
    '@keyframes floatImage': {
        '0%': {
            transform: 'translateY(0)',
        },
        '50%': {
            transform: 'translateY(-2.4rem)',
        },
        '100%': {
            transform: 'translateY(0)',
        },
    },
}));

function Home() {
    const classes = useStyles();

    const roles = [
        'a Software Developer',
        'a 3rd year CS student at UofT',
        'passionate about machine learning',
        'an Automation Developer',
        'learning Cloud Network Security',
        'a Teaching Assistant at UofT',
        'an IOS/Android Developer',
    ];

    return (
        <section className={classes.home} id="home">

            <div className={classes.imageContainer}>
                <img src={Logo} alt="Minjun Kim" className={classes.homeImg} />
            </div>

            <div className={classes.shape}></div>
            <div className={classes.homeContent}>
                <Typography variant="h3">Hello, I'm</Typography>
                <Typography variant="h1" style={{ marginBottom: '1rem' }}>Minjun Kim!</Typography>

                <Typography variant="h3" className={classes.typingContainer}>
                    And I'm{'\u00A0'}
                    <Typed
                        strings={roles.map((role) => `${role}`)}
                        typeSpeed={70}
                        backSpeed={40}
                        backDelay={500}
                        loop
                    >
                        <span className={classes.typingText}></span>
                    </Typed>
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
                    <Typography variant="body1">
                        Currently aumotating @ Nokia. <br />
                        Seeking Summer 2023 Internship Opportunities.
                    </Typography>
                </Box>

                <div className={classes.socialMedia}>
                    <a href="https://www.linkedin.com/in/kimminjun/" target="_blank">
                        <LinkedInIcon style={{color: '#0ef'}} />
                    </a>
                    <a href="https://github.com/Minjun1Kim" target="_blank">
                        <GitHubIcon style={{color: '#0ef'}}/>
                    </a>
                    <a href="mailto:minjunn.kim@mail.utoronto.ca" target="_blank">
                        <YouTube style={{color: '#0ef'}}/>
                    </a>

                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Stack direction="row" spacing={2} mt={2}>
                        <Button variant="contained" color="primary" className={classes.btn}>
                            Contact <Email />
                        </Button>
                        <Button variant="contained" color="primary" className={classes.btn}>
                            Download Resume <DownloadIcon />
                        </Button>
                    </Stack>
                </div>
                        
            </div>
        </section>
    );
}

export default Home;
