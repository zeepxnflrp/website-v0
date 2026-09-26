import React from "react";
import { Link } from "react-router-dom";
import { featuredProjectCount, projects } from "./data/projects";

function ProjectsSection({ fullPage = false }) {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const visibleProjects = fullPage
    ? [...featuredProjects, ...otherProjects]
    : featuredProjects.slice(0, featuredProjectCount);

  return (
    <section className={`section-wrap content-section${fullPage ? " detail-page" : ""}`} id={fullPage ? "projects-archive-page" : "projects"} aria-labelledby={fullPage ? "projects-page-title" : "projects-title"}>
      {fullPage ? (
        <div className="detail-intro">
          <Link className="back-home" to="/" state={{ scrollTarget: "projects" }}>← back home</Link>
          <p className="eyebrow">projects / archive</p>
          <h1 id="projects-page-title">more things i've made</h1>
          <p>projects, experiments, and other things that escaped my laptop.</p>
        </div>
      ) : (
        <div className="section-heading">
          <p className="eyebrow">04 /</p>
          <h2 id="projects-title">things i've made</h2>
        </div>
      )}
      <div className={`project-list${fullPage ? " project-list-complete" : ""}`}>
        {visibleProjects.map((project, index) => (
          <article className="project-entry" key={project.name}>
            <p className="project-number">{String(index + 1).padStart(2, "0")}</p>
            <div className="project-copy">
              <p className="eyebrow project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p>{project.description || <span className="content-placeholder">[description needed]</span>}</p>
              {project.longDescription && <p>{project.longDescription}</p>}
              {project.technologies?.length > 0 && <p className="project-tech">{project.technologies.join(" · ")}</p>}
              <div className="text-links project-links">
                {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer">github <span aria-hidden="true">↗</span></a> : project.githubNeeded && <span className="link-placeholder">github <small>[link needed]</small></span>}
                {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">demo <span aria-hidden="true">↗</span></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
      {!fullPage && <Link className="expander" to="/projects">more things i've made →</Link>}
    </section>
  );
}

export default ProjectsSection;
