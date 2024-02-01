import React from 'react';
import experienceData from './data/experience.json'; 

function Experience() {
    return (
        <div>
            <div className="container space-y-10">
                <h1 className="text-4xl font-bold text-center mb-4">My Experience</h1>
                {experienceData.map((exp, index) => (
                    <div key={index} className="mb-4">
                        <h2 className="text-2xl font-semibold">{exp.role} - {exp.company}</h2>
                        <p className="text-sm text-gray-600">{exp.duration}</p>
                        <p className="text-base">{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
