import React from "react";
import GetProjects from "../components/GetProjects";

const Projects = React.memo(() => {
  return (
    <main className="projects">
      <h2>Projects</h2>
      <section className="projects__content">
        <GetProjects />
      </section>
    </main>
  );
});

export default Projects;
