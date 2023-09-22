import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper'; // Import Paper from Material-UI
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { java } from "@codemirror/lang-java";
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import LinkIcon from '@mui/icons-material/Link';

const Course = (props) => {
  const {
    courseName,
    semester,
    concepts,
    languagesTools,
    difficultyStars,
    descriptionCode,
    courseLink,
  } = props;

  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px', marginTop: '16px', height: '16vw', backgroundColor: '#1f242d' }}>
      <div>
        <Typography variant="h6" style={{ fontWeight: 'bold', marginRight: '8px' }}>
          {courseName}
        </Typography>
        <Typography variant="body1">
          {semester}
        </Typography>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Typography variant="body1">
          <strong>Concepts:</strong> {concepts}
        </Typography>
        <Typography variant="body1">
          <strong>Languages/Tools:</strong> {languagesTools}
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <Typography variant="body1">
            <strong>Difficulty:</strong>
          </Typography>
          {Array.from({ length: difficultyStars }, (_, index) => (
            <StarIcon key={index} color="primary" />
          ))}
        </div>
      </div>

      {/* Render the code editor for the course description */}
      <CodeMirror
        value={descriptionCode}
        height="5"
        width="40vw"
        theme={dracula}
        extensions={[java()]}
        readOnly={true}
        options={{
          mode: "java",
          theme: "dracula",
          lineNumbers: true,
          indentUnit: 2,
          tabSize: 2,
          autofocus: true,
        }}
      />

      <div style={{ display: 'flex', alignItems: 'center', color: '#0ef' }}>
        <LinkIcon fontSize="small" color="primary" />
        <a href={courseLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#0ef' }}>
          Course Website
        </a>
      </div>
    </Paper>
  );
};

Course.propTypes = {
  courseName: PropTypes.string.isRequired,
  semester: PropTypes.string.isRequired,
  concepts: PropTypes.string.isRequired,
  languagesTools: PropTypes.string.isRequired,
  difficultyStars: PropTypes.number.isRequired,
  descriptionCode: PropTypes.string.isRequired, // Code for the course description
  courseLink: PropTypes.string.isRequired,
};

export default Course;
