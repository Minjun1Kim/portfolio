import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Content from './components/Content';
import ContactMe from './components/ContactMe';
import Notes from './components/Notes';

function App() {

  const location = useLocation();
  
  return (
    <Router>
      {location.pathname !== "/notes" && <Header />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={ContactMe} />
        <Route path="/notes" component={Notes} />
      </Switch>
    </Router>
  );
}

export default App;