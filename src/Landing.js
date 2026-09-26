import React from "react";

function Landing() {
    return (
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
            <div className="hero-copy">
                <p className="eyebrow">my universe</p>
                <h1 id="hero-title">hi, i'm baani.</h1>
                <p className="hero-intro">i'm a software engineer and computer science grad student at nyu, usually building somewhere around the intersection of software, ai, games, and interactive systems.</p>
                <p className="hero-detail">i like making things that are useful, playful, or slightly strange, ideally all three.</p>
                <div className="text-links hero-links">
                    <a href="#projects">view my work <span aria-hidden="true">↘</span></a>
                    <a href="https://github.com/zeepxnflrp" target="_blank" rel="noreferrer">github <span aria-hidden="true">↗</span></a>
                    <a href="https://www.linkedin.com/in/baani-kaur-pasrija-84aa3216b/" target="_blank" rel="noreferrer">linkedin <span aria-hidden="true">↗</span></a>
                </div>
            </div>
        </section>
    );
}

export default Landing;
