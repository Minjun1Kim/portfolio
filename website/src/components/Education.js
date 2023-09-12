import React from 'react';
import { makeStyles } from '@mui/styles';
import ThreeScene from './ThreeScene';

const useStyles = makeStyles((theme) => ({
    education: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        background: theme.palette.background.default,
        // Other styles
    },
    educationContent: {
        width: '55%',
        // Other styles
    },
    educationImg: {
        width: '20%',
        textAlign: 'right',
        '& img': {
            height: 'auto',
            maxWidth: '100%',
            borderRadius: '0.5rem',
        },
    },
    // Define other styles here
    // ... rest of the styles
}));

function Education() {
    const classes = useStyles();

    return (
        <section className={classes.education}>
            <ThreeScene />
        </section>
    );
}

export default Education;
