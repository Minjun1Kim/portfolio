import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
    return (
        <div className="App">
          {/* <Routes>
              <Route path="/" element={<Header />}/>
              <Route path="/" element={<Home />} />
              {/* <Route path="/home" element={<Home />} /> */}
              {/* <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
          </Routes> */}
          {/* <Routes>
            <Route path="/" element={<Home />} />
          </Routes> */}
          
          <Header />
          <Content />

        </div>
    );
}

export default App;