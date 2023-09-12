import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Paper } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  cardBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    borderRadius: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '30%',
  },
  imageContainer: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    // maxWidth: '100%',
    // height: 'auto', // Allow the image to maintain its aspect ratio
    // borderRadius: '20px 20px 0px 0px',
    flex: 1,
    height: "295px",
    width: "300px",
    borderRadius: "20px 20px 0px 0px",
    background: props => `url(${props.imagePath}) lightgray 50% / 100% 100% no-repeat`,
  },
  details: {
    padding: '20px 30px 25px 30px',
    backgroundColor: '#3B3B3B',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  schoolName: {
    fontSize: '16px',
    fontWeight: 600,
  },
  programName: {
    fontSize: '20px',
    fontWeight: 600,
  },
  rowContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: '14px',
    fontWeight: 600,
    marginRight: '10px',
  },
  value: {
    fontSize: '16px',
  },
}));

const CardBox = ({ info }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.cardBox}>
      <div className={classes.imageContainer}>
        <div className={classes.image}></div>
      </div>
      <div className={classes.details}>
        <Typography variant="h6" className={classes.schoolName}>
          {info.schoolName}
        </Typography>
        <Typography variant="h5" className={classes.programName}>
          {info.programName}
        </Typography>
        <div className={classes.rowContainer}>
          <div>
            <Typography variant="subtitle1" className={classes.label}>
              Location:
            </Typography>
            <Typography variant="body1" className={classes.value}>
              {info.location}
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1" className={classes.label}>
              Year:
            </Typography>
            <Typography variant="body1" className={classes.value}>
              {info.year}
            </Typography>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default CardBox;
