import React, {useState} from "react";
import { makeStyles } from '@mui/styles';
import NotesCard from "./parts/NotesCard";
import Avatar from '../images/profilepic.png'
import Banner from '../images/lofiboy.gif'
import JSLogo from '../images/JSLogo.png'

import UofTLogo from '../images/uoft.jpg'
import CSCB07 from "./courses/CSCB07";
import MATA29 from "./courses/MATA29";
import styled from 'styled-components';

const Section = styled.section`
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  
    @media only screen and (max-width: 768px) {
      height: 200vh;
    }
`

const useStyles = makeStyles((theme) => ({
  notes: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    background: theme.palette.background.default,
    minHeight: '100vh',
    overflowY: 'auto',
    alignItems: 'center', // Center content vertically
    justifyContent: 'center', // Center content horizontally
  },
  notesContent: {
    padding: theme.spacing(2),
  },
}));

function Notes() {

    const classes = useStyles();
    const [selectedItem, setSelectedItem] = useState("Overview");
    // const [foldedView, setFoldedView] = useState(false);

    // const handleItemClick = (itemText) => {
    //     setSelectedItem(itemText);
    // };
    
    // const handleSidebarToggle = () => {
    // setFoldedView(!foldedView);
    // };


    const user = {
      avatar: Avatar,
      banner: Banner,
      username: 'Minjun Kim', // User's Discord username
      bio: 'A passionate developer who loves coding.', // User's bio
      dnd: true, // Whether the user is in "Do Not Disturb" mode
      activity: "Editing Notes.js",
      activityImg: JSLogo,
      socials: [
        {
          link: 'https://twitter.com/johndoe',
          icon: <i className="fab fa-twitter"></i>, // Replace with appropriate icon
        },
        {
          link: 'https://github.com/johndoe',
          icon: <i className="fab fa-github"></i>, // Replace with appropriate icon
        },
        // Add more social links as needed
      ],
    };
  
    const courses = [
      {
        title: 'Software Design',
        logo: UofTLogo,
        company: 'CSCB07',
        location: 'Toronto, ON',
        date: 'September 2023 - Present',
        description: 'Worked on Cloud Networks and Security team',
        responsibilities: [
          'Developed and maintained web applications using React.js and Node.js.',
          'Collaborated with cross-functional teams to design and implement new features.',
          'Optimized application performance and resolved bugs and issues.',
        ],
      },
      {
        title: 'Calculus I for Life Sciences',
        logo: UofTLogo,
        company: 'MATA29',
        location: 'Toronto, ON',
        date: 'January 2018 - May 2020',
        description: 'Teaching Assistant for CSC108: Introduction to Computer Programming',
        responsibilities: [
          'Designed and implemented responsive web layouts using HTML, CSS, and JavaScript.',
          'Worked closely with UX/UI designers to create visually appealing user interfaces.',
          'Collaborated with the backend development team to integrate frontend components.',
        ],
      },

      {
        title: 'Introduction to Databases',
        logo: UofTLogo,
        company: 'CSCC43',
        location: 'Toronto, ON',
        date: 'January 2018 - May 2020',
        description: 'Teaching Assistant for CSC108: Introduction to Computer Programming',
        responsibilities: [
          'Designed and implemented responsive web layouts using HTML, CSS, and JavaScript.',
          'Worked closely with UX/UI designers to create visually appealing user interfaces.',
          'Collaborated with the backend development team to integrate frontend components.',
        ],
      },
      // Add more job experiences here
    ];
      
    return (
        <Section>
          <section id="notes">
              {/* <SideNavBar
                  foldedView={foldedView}
                  handleSidebarToggle={handleSidebarToggle}
                  // userData={userData}
                  selectedItem={selectedItem}
                  handleItemClick={handleItemClick}
              /> */}

          <div
            style={{
              background: "#151718",
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center", // Center content vertically
              justifyContent: "center", // Center content horizontally
            }}
          >

          {(() => {
            switch (selectedItem) {
              case "Home":
                return  <NotesCard user={user} courses={courses} className={classes.notes} />

              case "CSCB07":
                return <CSCB07/>
              
              case "MATA29":
                return <MATA29/>
              default:
                return <NotesCard user={user} courses={courses} className={classes.notes}/>
            }
          })()}
        </div>

        

          </section>
        </Section>
    );

}

export default Notes;