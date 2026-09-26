import React from "react";
import { Link } from "react-router-dom";
import { experiences, initiallyVisibleExperiences } from "./data/experiences";

function Experience({ fullPage = false }) {
  const visibleExperiences = fullPage
    ? [...experiences].sort((left, right) => right.sortDate.localeCompare(left.sortDate))
    : experiences.slice(0, initiallyVisibleExperiences);

  return (
    <section className={`section-wrap content-section${fullPage ? " detail-page" : ""}`} id={fullPage ? "experience-archive-page" : "experience"} aria-labelledby={fullPage ? "experience-page-title" : "experience-title"}>
      {fullPage ? (
        <div className="detail-intro">
          <Link className="back-home" to="/" state={{ scrollTarget: "experience" }}>← back home</Link>
          <p className="eyebrow">experience / archive</p>
          <h1 id="experience-page-title">the full lore</h1>
          <p>everything i've done, in approximately chronological order.</p>
        </div>
      ) : (
        <div className="section-heading">
          <p className="eyebrow">03 /</p>
          <h2 id="experience-title">where i've spent my time</h2>
        </div>
      )}
      <div className="experience-list" id="experience-list">
        {visibleExperiences.map((experience, index) => (
          <article className="experience-entry" key={experience.id}>
            <span className="entry-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div className="experience-meta">
              <p>{experience.dates}</p>
              {experience.location && <p>{experience.location}</p>}
            </div>
            <div className="experience-copy">
              <h3>{experience.role}</h3>
              <p className="experience-company">{experience.company}</p>
              {experience.description?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {experience.roles?.map((role) => (
                <div className="nested-role" key={role.title}>
                  <div className="nested-role-heading">
                    <h4>{role.title}</h4>
                    <span>{role.dates}</span>
                  </div>
                  {role.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
      {!fullPage && <Link className="expander" to="/experience">the full lore →</Link>}
    </section>
  );
}

export default Experience;
