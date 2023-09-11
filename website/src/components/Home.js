import React, { useEffect } from 'react';
import Typed from 'react-typed';
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    home: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        minHeight: '100vh',
    },
    homeImg: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        animation: '$floatImage 4s ease-in-out infinite',
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
    typingText: {
        color: theme.palette.primary.main,
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

        <img src="/images/myPhoto.png" alt="Minjun Kim" className={classes.homeImg} />

            <div className={classes.shape}></div>
            <div className={classes.homeContent}>
                <Typography variant="h3">Hello, I'm</Typography>
                <Typography variant="h1">Minjun Kim!</Typography>
                <Typography variant="h3">
                    And I'm{' '}
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
                <Typography variant="body1">
                    Actively seeking Software Engineering Co-op opportunities for Fall 2023.
                </Typography>
                <div className={classes.socialMedia}>
                    <a href="https://www.linkedin.com/in/kimminjun/" target="_blank">
                        <i className="bx bxl-linkedin-square"></i>
                    </a>
                    <a href="https://github.com/Minjun1Kim" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://minjunkim.ca" target="_blank">
                        <i className="bx bx-globe"></i>
                    </a>
                </div>
                <Button variant="contained" color="primary" className={classes.btn}>
                    Contact <i className="bx bx-envelope"></i>
                </Button>
                <Link to="/MinjunKimResume.pdf" target="_blank" className={classes.btn} id="dwn">
                    Download Resume <i className="bx bxs-download"></i>
                </Link>
            </div>
        </section>
    );
}

export default Home;
