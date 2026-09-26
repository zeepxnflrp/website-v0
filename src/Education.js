import React from "react";

const education = [
  {
    label: "currently",
    school: "nyu tandon school of engineering",
    degree: "master of science in computer science",
    dates: "2025 — 2027",
  },
  {
    label: "before that",
    school: "new york university",
    degree: "bachelor of arts in computer science and economics",
    dates: "2020 — 2024",
  },
];

function Education() {
  return (
    <section className="section-wrap content-section education-section" id="education" aria-labelledby="education-title">
      <div className="section-heading">
        <p className="eyebrow">02 /</p>
        <h2 id="education-title">where i've learned things</h2>
      </div>
      <div className="education-list">
        {education.map((entry) => (
          <article className="education-entry" key={entry.label}>
            <p className="eyebrow education-label">{entry.label}</p>
            <h3>{entry.school}</h3>
            <p className="education-degree"><em>{entry.degree}</em></p>
            <p className="education-dates">{entry.dates}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
