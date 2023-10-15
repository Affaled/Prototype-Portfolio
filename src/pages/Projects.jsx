import React from "react";
import ProjectItem from "../components/ProjectItem";

const Projects = React.memo(() => {
  return (
    <main className="projects">
      <h2 className="projects__title">Projects</h2>
      <section className="projects__content">
        <ProjectItem />
        <ProjectItem />
      </section>
    </main>
  );
});

export default Projects;
