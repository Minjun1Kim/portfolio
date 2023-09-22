import React from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Typography, Paper, Divider, Button } from '@mui/material';
import dndImage from '../../images/dnd.png'; // Replace with the actual path to your image
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import YouTube from '@mui/icons-material/YouTube';

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import StarIcon from '@mui/icons-material/Star';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';

const useStyles = makeStyles((theme) => ({
  profileCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginTop: '3rem', // Adjust the margin as needed
    color: theme.palette.secondary.main,
    width: '600px', // Set your desired width
    height: 'auto', // Set your desired height
  },
    textCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        // alignItems: 'center',
        padding: theme.spacing(2),
        marginTop: '-10%', // Adjust the margin as needed
        width: '550px', // Set your desired width
        height: 'auto', // Set your desired height
    },

    activityCard: {
        display: 'flex',
        flexDirection: 'row', // Display image and text side by side
        alignItems: 'center',
        padding: theme.spacing(2),
        backgroundColor: '#262522',
        borderRadius: '0.8rem',
        alignSelf: 'center',
        width: '90%', // Set your desired width
        marginTop: '20px', // Adjust the margin as needed
    },

  avatarContainer: {
    position: 'relative', // Position container relatively
    // marginBottom: theme.spacing(2),
  },
  avatar: {
    width: '100%', // Adjust the size of the avatar as needed
    height: '100%', // Adjust the size of the avatar as needed
    border: `2px solid ${theme.palette.primary.main}`,
    position: 'absolute', // Position avatar absolutely
    top: '50%', // Move avatar to the vertical center
    left: '50%', // Move avatar to the horizontal center
    transform: 'translate(-50%, -50%)', // Center the avatar
    zIndex: 1, // Place avatar above the banner
  },
  dndImage: {
    position: 'absolute', // Position the image absolutely
    top: '30%', // Adjust the top position as needed
    left: '26%', // Adjust the right position as needed
    width: '30px', // Set the width of the DND indicator
    height: 'auto', // Allow the image to maintain its aspect ratio
    zIndex: 2, // Place the DND indicator above the avatar
    // border: `2px solid ${theme.palette.background.paper}`,
  },
  banner: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  viewButton: {
    backgroundColor: '#ccc', // Set your desired gray color
    color: '#333', // Set your desired text color
    marginTop: '10px', // Adjust this value to move the button up or down
    transition: 'background-color 0.3s', // Add a transition for smooth hover effect
    alignSelf: 'center',
    '&:hover': {
      backgroundColor: '#555', // Change the background color on hover
    },
  },
  username: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textAlign: 'left',
    // marginBottom: theme.spacing(1),
  },
  bio: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  socialLinks: {
    display: 'flex',
    gap: theme.spacing(2),
  },
  socialIcon: {
    fontSize: '2rem',
    color: theme.palette.primary.main,
  },
  bannerContainer: {
    width: '100%',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: '0 0 30%', 
    position: 'relative',
  },
  infoContainer: {
    flex: '1', // Takes up remaining space
  },
  image: {
    width: '70%',
    height: 'auto',
  },

  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    backgroundColor: '#262522',
    borderRadius: '0.8rem',
    alignSelf: 'center',
    marginTop: '20px', // Adjust the margin as needed
    width: '90%', // Set your desired width
  },
  infoText: {
    fontSize: '1rem',
    marginBottom: theme.spacing(1),
  },
  icon: {
    fontSize: '1.2rem',
    marginRight: theme.spacing(1),
  },

  experiencesContainer: {
    display: 'grid',
    gap: theme.spacing(3),
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  },

  experienceCard: {

    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    backgroundColor: '#262522',
    borderRadius: '0.8rem',
    alignSelf: 'center',
    marginTop: '20px', // Adjust the margin as needed
    width: '90%', // Set your desired width
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  subTitle: {
    fontSize: '1.2rem',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(1),
  },
  listItemIcon: {
    marginRight: theme.spacing(1),
  },

}));

function ExperienceComponent({ courses }) {
    const classes = useStyles();
  
    return (
      <div>
        {courses.map((exp, index) => (
          <div key={index}>
            {index !== 0 && ( // Don't add a divider before the first experience
              <Divider
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)', // Change opacity as needed
                  width: '100%',
                  margin: '20px 0',
                  borderBottomWidth: '2px',
                }}
              />
            )}
  
            <div style={{ display: 'flex' }}>
              <div className={classes.imageContainer}>
                <img
                  src={exp.logo}
                  alt="Activity"
                  className={classes.image}
                  style={{ width: '40%', borderRadius: '0.5rem' }}
                />
              </div>
  
              <div className={classes.infoContainer} style={{ flex: 1, marginLeft: '20px' }}>
                <Typography variant="body1" className={classes.infoText}>
                  <BusinessIcon className={classes.icon} />
                  {exp.company}
                </Typography>
  
                <Typography variant="body1" className={classes.infoText}>
                  <PersonIcon className={classes.icon} />
                  {exp.title}
                </Typography>
  
                <Typography variant="body1" className={classes.infoText}>
                  {/* Add more information using the same format */}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  
function ProfileCard({ user, courses }) {

    const classes = useStyles();

    return (
        <Paper className={classes.profileCard} elevation={3} style={{borderRadius: '0.8rem'}}>
            <div className={classes.bannerContainer}>
                <img src={user.banner} alt="Banner" className={classes.banner} />
                <div className={classes.avatarContainer}>
                    <Avatar
                        alt="Avatar"
                        src={user.avatar}
                        className={classes.avatar}
                        style={{
                            width: '150px', // Set your desired width
                            height: '150px', // Set your desired height
                            left: '20%',
                            position: 'relative', // Position the container relatively
                        }}
                    />
                    {user.dnd && ( // Assuming user.dnd is a boolean indicating "Do Not Disturb" status
                        <img
                            src={dndImage} // Use the imported DND status image
                            alt="Do Not Disturb"
                            className={classes.dndImage}
                        />
                    )}
                </div>
            </div>
            
            <Paper className={classes.textCard} elevation={3} style={ {backgroundColor: '#111214', borderRadius: '0.8rem'}}>
                <Typography variant="h4" className={classes.username} style={{marginLeft: '5%'}}>
                    {user.username}
                </Typography>
                
                <Typography variant="h7" style={{marginLeft: '5%', color: 'grey'}}>
                    minjunn.kim@mail.utoronto.ca
                </Typography>

                <Divider style={{ backgroundColor: '#33363d', width: '90%', marginLeft: '5%', margin: '5px 0', borderBottomWidth: '2px' }} />

                <Paper className={classes.infoCard}>
                    <Typography variant="h6" className={classes.username}>
                        About Me
                    </Typography>
                    <Divider style={{ backgroundColor: '#33363d', width: '100%', margin: '10px 0', borderBottomWidth: '2px' }} />
                    <Typography variant="body1" className={classes.infoText}>
                    <SchoolIcon className={classes.icon} />
                        3rd year CS Software Engineering student @ UofT
                    </Typography>
                    <Typography variant="body1" className={classes.infoText}>
                    <WorkIcon className={classes.icon} />
                        TA for CSCB07 & MATA29
                    </Typography>
                    <Typography variant="body1" className={classes.infoText}>
                    <SportsEsportsIcon className={classes.icon} />
                        GPA: 3.🙈6/4.00
                    </Typography>
                    <Typography variant="body1" className={classes.infoText}>
                    <StarIcon className={classes.icon} />
                        Skills: Java, C, Python, React, Node.js, SQL
                    </Typography>
                    {/* Add more information using the same format */}
                </Paper>
                
                <Paper className={classes.experienceCard}>
                <div>
                    <Typography variant="h6" className={classes.username}>
                    Notes thus far...
                    </Typography>
                    <Divider
                    style={{
                        backgroundColor: '#33363d',
                        width: '100%',
                        margin: '10px 0',
                        borderBottomWidth: '2px',
                    }}
                    />
                    <ExperienceComponent courses={courses} />
                </div>
                </Paper>


                <Paper className={classes.activityCard} elevation={3} style={{ borderRadius: '0.8rem' }}>
                    <div className={classes.imageContainer}>
                        <img src={user.activityImg} alt="Activity" className={classes.image} />
                    </div>
                    <div className={classes.infoContainer}>
                        <Typography variant="h6" className={classes.username}>
                        {user.activity}
                        </Typography>
                        <Divider style={{ backgroundColor: '#33363d', width: '100%', margin: '10px 0', borderBottomWidth: '2px' }} />
                        <Typography variant="body1" className={classes.infoText}>
                        <SportsEsportsIcon className={classes.icon} />
                        Programming
                        </Typography>
                        <Typography variant="body1" className={classes.infoText}>
                        <StarIcon className={classes.icon} />
                        2 hours
                        </Typography>
                        {/* Add more information using the same format */}
                    </div>
                    </Paper>

                <Button variant="contained" className={classes.viewButton} onClick={() => window.open('https://github.com/Minjun1Kim/portfolio', '_blank')} style={{width: '90%', marginTop: '10px'}} >
                    View Repository
                </Button>

                <div className={classes.socialMedia}>
                    <a href="https://www.linkedin.com/in/kimminjun/" target="_blank" rel="noreferrer" style={{ marginLeft: '25px'}}>
                        <LinkedInIcon style={{color: '#0ef'}} />
                    </a>
                    <a href="https://github.com/Minjun1Kim" target="_blank" rel="noreferrer" style={{ marginLeft: '5px'}}>
                        <GitHubIcon style={{color: '#0ef'}}/>
                    </a>
                    <a href="mailto:minjunn.kim@mail.utoronto.ca" target="_blank" rel="noreferrer" style={{ marginLeft: '5px'}}>
                        <YouTube style={{color: '#0ef'}}/>
                    </a>
                </div>

            </Paper>
        </Paper>
    );


}

export default ProfileCard;
