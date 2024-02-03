import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';

function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/zeepxnflrp/repos')
            .then(response => response.json())
            .then(data => setRepos(data));
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll(".project-animate");
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, [repos]);

    return (
      <div>
        <div className="container mx-auto p-4 space-y-10"> 
            <h1 className="text-4xl font-bold text-center title-animate">My Work</h1>
            <ul className="space-y-3">
                {repos.map(repo => (
                <a href={repo.html_url} key={repo.id} className="block border border-gray-800 p-4 bg-black shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-md text-center project-animate">
                    <li className="text-white">
                        <div className="flex items-center justify-center">
                            <h2 className="text-xl font-semibold">
                                {repo.name} <FontAwesomeIcon icon={faGithub} style={{ color: '#ec4899' }} />
                            </h2>
                        </div>
                        <p className="text-sm">{repo.description}</p>
                    </li>
                </a>
                ))}
            </ul>
        </div>
      </div>
    );
}

export default Projects;
