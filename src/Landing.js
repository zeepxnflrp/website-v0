import React, { useEffect } from 'react';
import './Landing.css';

function Landing() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        }, { threshold: 0.1 }); // Adjust the threshold as needed

        const elements = document.querySelectorAll(".animate-text");
        elements.forEach(el => observer.observe(el));

        // Cleanup function
        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-7xl font-bold text-center mb-4 animate-text">Welcome to Baani's Digital Universe!</h1>
            <p className="text-2xl text-center animate-text">👩‍💻 Crafting Code & Conjuring Creativity ✨</p>
        </div>
    );
}

export default Landing;
