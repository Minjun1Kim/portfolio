// import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';

// function CourseNotes({ courseName, semester, notes }) {
//   const [selectedWeek, setSelectedWeek] = useState(0);
//   const [markdownContent, setMarkdownContent] = useState('');

//   useEffect(() => {
//     // Fetch the Markdown content for the selected week
//     fetch(notes[selectedWeek])
//       .then((response) => response.text())
//       .then((data) => {
//         setMarkdownContent(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching Markdown content:', error);
//       });
//   }, [selectedWeek, notes]);

//   const handleWeekChange = (weekIndex) => {
//     setSelectedWeek(weekIndex);
//   };

//   return (
//     <div>
//       {/* Render a list of links to weeks */}
//       <ul>
//         {notes.map((weekNotes, index) => (
//           <li key={index}>
//             <button onClick={() => handleWeekChange(index)}>Week {index + 1}</button>
//           </li>
//         ))}
//       </ul>

//       {/* Render the selected week's notes using ReactMarkdown */}
//       {/* <div className='markdown-body'> */}
//         <h3>Week {selectedWeek + 1} Notes</h3>
//         {/* <ReactMarkdown>{markdownContent}</ReactMarkdown> */}
//       {/* </div> */}
//     </div>
//   );
// }

// export default CourseNotes;


import React, { useState } from 'react';
import Link from '@mui/material/Link'; // Import Link from MUI
import List from '@mui/material/List'; // Import List from MUI
import ListItem from '@mui/material/ListItem'; // Import ListItem from MUI

function CourseNotes({ notes }) {
  const [selectedWeek, setSelectedWeek] = useState(null); // Initialize as null

  const handleWeekClick = (weekIndex) => {
    setSelectedWeek(weekIndex);
  };

  return (
    <div>
      <List>
        {notes.map((weekNotes, index) => (
          <ListItem key={index}>
            <Link href={weekNotes} target="_blank" onClick={() => handleWeekClick(index)}>
              Week {index + 1}
            </Link>
          </ListItem>
        ))}
      </List>

    </div>
  );
}

export default CourseNotes;