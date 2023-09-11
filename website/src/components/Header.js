import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '2rem 9%',
        background: theme.palette.background.default, // Use theme colors
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        borderBottom: '0.1rem solid rgba(0, 0, 0, .2)',
    },
    logo: {
        fontSize: '2.5rem',
        color: theme.palette.text.primary, // Use theme colors
        fontWeight: 600,
        cursor: 'default',
    },
    navbar: {
        '& a': {
          fontSize: '1.7rem',
          color: theme.palette.text.primary,
          marginLeft: '4rem',
          textDecoration: 'none',
          transition: '.3s',
        },
        '& a:hover, & a.active': {
          color: theme.palette.primary.main,
        },
    },
}));

function Header() {
    const classes = useStyles();
    const location = useLocation();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };

      
    return (
        <header className={classes.header}>
          <Link to="/" className={classes.logo}>
            Minjun Kim
          </Link>
    
          <nav className={classes.navbar}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
            <Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>
              Education
            </Link>
            <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
              Skills
            </Link>
            <Link to="/Experience" className={location.pathname === '/experience' ? 'active' : ''}>
              Experience
            </Link>
            <Link to="/Projects" className={location.pathname === '/projects' ? 'active' : ''}>
              Projects
            </Link>
            <Link to="/Contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </nav>
        </header>
    );
}

export default Header;