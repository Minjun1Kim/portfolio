import React from 'react';
import { makeStyles } from '@mui/styles';

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
            <div className={classes.educationContent}>
                {/* Education content */}
            </div>
            <div className={classes.educationImg}>
                <img src="your-image-path" alt="Education" />
            </div>
        </section>
    );
}

export default Education;
