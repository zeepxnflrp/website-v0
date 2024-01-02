import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import butterfly from './static/butterfly.svg';
import laptop from './static/laptop.svg';
import './App.css';

const MyButterfly = () => (
  <div>
    <img src={butterfly} alt="Butterfly SVG" className="butterfly-svg" />
  </div>
);

const MyLaptop = () => (
  <div>
    <img src={laptop} alt="Laptop SVG" className="laptop-svg" />
  </div>
);


function App() {
  return (
    <div>
      <title>Placeholder</title>
      <nav className="fixed top-0 left-0 w-full bg-black z-40 py-3">
          <ul className="flex space-x-2">
            <li><a href="#about-me"><button className="btn btn-outline">About Me</button></a></li>
            <li><a href="#projects"><button className="btn btn-outline btn-primary">Projects</button></a></li>
            <li><a href="#experience"><button className="btn btn-outline btn-secondary">Experience</button></a></li>
            <li><a href="#contact"><button className="btn btn-outline btn-accent">Contact Me</button></a></li>
          </ul>
          <MyButterfly />
      </nav>
      <main className="pt-16">
        <div className="center-content" id="about-me">
          <AboutMe />
        </div>
        <div className="center-content" id="projects">
          <Projects />
        </div>
        <div className="center-content" id="experience">
          <Experience />
        </div>
        <div className="center-content" id="contact">
          <Contact />
        </div>
        <MyLaptop />
      </main>
    </div>
  );
}

export default App;