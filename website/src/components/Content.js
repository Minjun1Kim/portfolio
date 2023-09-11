// Content.js
import React from 'react';
import { Link } from 'react-scroll';
import Home from './Home';
import About from './About';


function Content() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      {/* Add more sections as needed */}
      <nav>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        {/* Add more navigation links for other sections */}
      </nav>
    </div>
  );
}

export default Content;
