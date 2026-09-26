import React, { useEffect } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactLinks from "./ContactLinks";
import Education from "./Education";
import Experience from "./Experience";
import Landing from "./Landing";
import ProjectsSection from "./ProjectsSection";
import Skills from "./Skills";
import Starfield from "./Starfield";
import "./App.css";
import "./Portfolio.css";

function HomePage() {
  return (
    <>
      <Landing />
      <AboutMe />
      <Education />
      <Experience />
      <ProjectsSection />
      <Skills />
      <ContactLinks />
    </>
  );
}

export function PortfolioRoutes() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const scrollTarget = isHome ? location.state?.scrollTarget : null;
    if (scrollTarget) {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.requestAnimationFrame(() => {
        document.getElementById(scrollTarget)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [isHome, location.key, location.state]);

  return (
    <div className="site-shell">
      <Starfield
        numParticles={800}
        style={{ position: "fixed", inset: 0, width: "100%", height: "100%" }}
      />
      <header className="site-header">
        <div className="header-inner">
          <Link className="wordmark" to={isHome ? "#home" : "/"} aria-label="baani, back to home">baani<span aria-hidden="true">*</span></Link>
          {isHome ? (
            <nav className={`site-nav${isHome ? "" : " secondary-nav"}`} aria-label="main navigation">
              <a href="#about">about</a>
              <a href="#experience">experience</a>
              <a href="#projects">projects</a>
              <a href="#skills">skills</a>
              <a href="#contact">contact</a>
            </nav>
          ) : (
            <nav className="site-nav" aria-label="main navigation">
              <Link to="/">home</Link>
              <Link to="/experience">experience</Link>
              <Link to="/projects">projects</Link>
              <a href="https://github.com/zeepxnflrp" target="_blank" rel="noreferrer">github</a>
              <a href="https://www.linkedin.com/in/baani-kaur-pasrija-84aa3216b/" target="_blank" rel="noreferrer">linkedin</a>
            </nav>
          )}
        </div>
      </header>
      <main className={`page-main${isHome ? "" : " subpage-main"}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<div className="route-page"><Experience fullPage /></div>} />
          <Route path="/projects" element={<div className="route-page"><ProjectsSection fullPage /></div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="site-footer">made with questionable amounts of screen time ♡</footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <PortfolioRoutes />
    </BrowserRouter>
  );
}

export default App;
