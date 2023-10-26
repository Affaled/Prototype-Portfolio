import React from "react";
import ProjectItem from "../components/ProjectItem";

const Projects = React.memo(() => {
  return (
    <main className="projects">
      <h2>Projects</h2>
      <section className="projects__content">
        <ProjectItem
          image="../assets/images/projects/angular-blog.jpeg"
          title="Angular blog"
          description="A blog made with Angular"
          url="https://angular-blog-mu-red.vercel.app"
        />
      </section>
    </main>
  );
});

export default Projects;
