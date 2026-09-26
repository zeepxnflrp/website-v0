import React from "react";
import { skillGroups } from "./data/skills";

function Skills() {
  return (
    <section className="section-wrap content-section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="eyebrow">05 /</p>
        <h2 id="skills-title">my toolbox</h2>
      </div>
      <div className="skills-list">
        {skillGroups.map((group, index) => (
          <div className="skill-group" key={group.name}>
            <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{group.name}</h3>
            <p>{group.skills.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
