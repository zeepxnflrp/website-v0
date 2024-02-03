import React from "react";
import Landing from "./Landing";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
// import Contact from "./Contact";
import "./App.css";
import StarfieldAnimation from "react-starfield-animation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div>
      <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        numParticles={800}
        particleSpeed={0}
        dx={0.000000001} // x speed of stars in px/frame, default 0.05
        dy={0.000000001}
      />
      <title>My Website</title>
      <nav
        className={`fixed z-10 flex min-w-full items-center justify-between py-4 px-4 backdrop-blur-[20px] backdrop-saturate-[1.8] backdrop-filter sm:px-10`}
      >
        <ul className="flex space-x-7">
          <li>
            <a href="#about-me">
              <button className="hover:text-pink cursor-pointer">
                &gt; whoami
              </button>
            </a>
          </li>
          <li>
            <a href="#projects">
              <button className="hover:text-pink cursor-pointer">
                Projects
              </button>
            </a>
          </li>
          <li>
            <a href="#experience">
              <button className="hover:text-pink cursor-pointer">
                Experience
              </button>
            </a>
          </li>
          {/* <li>
            <a href="#contact">
              <button className="hover:text-pink cursor-pointer">
                Contact Me
              </button>
            </a>
          </li> */}
        </ul>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://github.com/zeepxnflrp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hover:text-pink cursor-pointer"><FontAwesomeIcon icon={faGithub} style={{ color: '#ea7cbe' }} /></button>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/baani-pasrija-84aa3216b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hover:text-pink cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: '#ea7cbe' }} />
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <main className="pt-16 universe-background scroll-container">
        <div className="center-content scroll-page" id="landing">
          <Landing />
        </div>
        <div className="center-content scroll-page" id="about-me">
          <AboutMe />
        </div>
        <div className="center-content scroll-page" id="projects">
          <Projects />
        </div>
        <div className="center-content scroll-page" id="experience">
          <Experience />
        </div>
        {/* <div className="center-content" id="contact">
          <Contact />
        </div> */}
      </main>
    </div>
  );
}

export default App;
