import React from "react";
import me from "./static/me-soft.jpg";

function AboutMe() {
    return (
        <section className="section-wrap content-section" id="about" aria-labelledby="about-title">
            <div className="section-heading">
                <p className="eyebrow">01 /</p>
                <h2 id="about-title">a little bit about me</h2>
            </div>
            <div className="about-layout">
                <img className="about-photo" src={me} alt="Baani" />
                <div className="about-copy">
                      <div className="about-identity">
                          <p className="about-identity-name">baani kaur pasrija</p>
                      </div>
                      <p>i'm interested in the parts of computer science where engineering meets creativity. i've worked on full-stack products, backend systems, games, ai-powered tools, music technology, and interactive experiences.</p>
                      <p>i'm especially drawn to projects where i get to take something from “wouldn't it be cool if...” to an actual working thing... and then spend way too much time making the details feel right.</p>
                      <p>outside of code, i care a lot about design, storytelling, games, visual art, music, and how people actually experience the things we build.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
