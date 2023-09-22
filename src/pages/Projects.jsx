import React from "react";
import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  return (
    <main className="projects">
      <h2 className="projects__title">Projects</h2>
      <section className="projects__content">
        <ProjectItem />
        <ProjectItem />
      </section>
    </main>
  );
}
