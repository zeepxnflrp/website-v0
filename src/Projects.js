import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/zeepxnflrp/repos')
            .then(response => response.json())
            .then(data => setRepos(data));
    }, []);

    return (
      <div>
        <h1 className="text-4xl font-bold text-center">My Work</h1>
            <div className="container mx-auto p-4"> 
            <ul className="space-y-3">
                {repos.map(repo => (
                <a href={repo.html_url} key={repo.id} className="block border border-black p-4 bg-black rounded-md shadow text-center hover:bg-violet-950">
                    <li className="text-white">
                        <div className="flex items-center justify-center">
                            <h2 className="text-xl font-semibold">
                                {repo.name} <FontAwesomeIcon icon={faGithub} />
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
