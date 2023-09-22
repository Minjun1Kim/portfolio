import React from 'react';
import { HashRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './components/Education';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Notes from './components/Notes';
import styled from 'styled-components';

function App() {

  const location = useLocation();

  const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    color: white;
    scroll-bar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `

  return (
    <Container>
      <Home />
      <About  />
      <Education />
      <Notes />
      <Contact />
      {/* <Router>
        {location.pathname !== "/notes" && <Header />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/notes" component={Notes} />
        </Switch>
      </Router> */}
    </Container>
  );
}

export default App;