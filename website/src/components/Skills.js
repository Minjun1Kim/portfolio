import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    skills: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        background: theme.palette.secondary.main,
        // Other styles
    },
    skillsContent: {
        width: '55%',
        // Other styles
    },
    skillsImg: {
        width: '20%',
        textAlign: 'right',
        '& img': {
            width: '100%',
            borderRadius: '0.5rem',
        },
    },
    // Define other styles here
    // ... rest of the styles
}));

function Skills() {
    const classes = useStyles();

    return (
        <section className={classes.skills}>
            <div className={classes.skillsContent}>
                {/* Skills content */}
            </div>
            <div className={classes.skillsImg}>
                <img src="your-image-path" alt="Skills" />
            </div>
        </section>
    );
}

export default Skills;
