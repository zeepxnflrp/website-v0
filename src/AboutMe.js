// import React from 'react';

// function AboutMe() {
//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-4xl font-bold text-center mb-4 animate-text">Who is Baani, anyway?</h1>
//             <p className="text-base text-center animate-text">Some text and stuff goes here.</p>
//         </div>
//     );
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("in-view");
//         }
//       });
//     });
  
//     const elements = document.querySelectorAll(".animate-text");
//     elements.forEach(el => observer.observe(el));
//   });

// export default AboutMe;

import React, { useEffect } from 'react';
import './AboutMe.css';

function AboutMe() {
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
            <h1 className="text-4xl font-bold text-center mb-4 animate-text">Who is Baani, anyway?</h1>
            <p className="text-base text-center animate-text">Some text and stuff goes here.</p>
        </div>
    );
}

export default AboutMe;
