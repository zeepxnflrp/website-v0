import React, { useEffect } from 'react';
import './AboutMe.css';
import me from './static/me.jpg';

function AboutMe() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        }, { threshold: 0.1 }); 

        const elements = document.querySelectorAll(".animate-text");
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <div className="about-container mx-auto p-4 flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex justify-center">
                <img src={me} alt="Baani" className="max-w-full h-auto shadow-lg border border-solid border-pink-500 animate-text w-1/2 md:w-3/4"/>
            </div>
            <div className="text-center md:text-left p-8 md:pr-14">
                <h1 className="text-2xl md:text-4xl font-bold mb-4 animate-text">Who's Baani?</h1>
                <p className="text-base animate-text">
                    I am a 22 year old software engineer, graduated from NYU. I'm interested in web development, 
                    playing around with AI, and backend development. I mostly like working with Python and Javascript. When I'm not cooking something up, 
                    I can be found playing Valorant, watching some cringe drama or pro gameplay, or experimenting with my hair and makeup.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
