import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import ProfileCard from '../components/parts/ProfileCard'; // Import the DiscordProfileCard component
import Avatar from '../images/profilepic.png'
import Banner from '../images/lofiboy.gif'
import JSLogo from '../images/JSLogo.png'
import NokiaLogo from '../images/nokia.jpg'
import UofTLogo from '../images/uoft.jpg'
import styled from 'styled-components';

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.section`
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;


const useStyles = makeStyles((theme) => ({
  about: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    background: theme.palette.background.default,
    minHeight: '100vh',
    overflowY: 'auto',
    alignItems: 'center', // Center content vertically
    justifyContent: 'center', // Center content horizontally
  },
  aboutContent: {
    padding: theme.spacing(2),
  },
}));


const user = {
  avatar: Avatar,
  banner: Banner,
  username: 'Minjun Kim', // User's Discord username
  bio: 'A passionate developer who loves coding.', // User's bio
  dnd: true, // Whether the user is in "Do Not Disturb" mode
  activity: "Editing ProfileCard.js",
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

const experience = [
  {
    title: 'Automation Developer',
    logo: NokiaLogo,
    company: 'Nokia',
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
    title: 'Teaching Assistant',
    logo: UofTLogo,
    company: 'University of Toronto',
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

function About() {
  const classes = useStyles();
  const [skill, setSkill] = useState("Web Design");


  return (
    <Section>


      <Container>
        <Left>
          <section id="about" className={classes.about}>
            <ProfileCard user={user} experience={experience}/>
          </section>

          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setSkill(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {/* {skill === "Web Design" ? (
            <Programming />
          ) : (
            <Programming />
          )} */}
        </Right>
      </Container>

    </Section>
  );
}

export default About;
