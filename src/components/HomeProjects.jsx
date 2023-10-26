import React from "react";
import ProjectItem from "./ProjectItem";
import angularPhoto from "../assets/images/projects/angular-blog.jpeg";

export default function HomeProjects() {
  return (
    <section className="homeProjects">
      <h3>Projects</h3>
      <div className="homeProjects__content">
        <ProjectItem
          image={angularPhoto}
          title="Angular blog"
          description="A blog made with Angular"
          url="https://angular-blog-mu-red.vercel.app"
        />
      </div>
    </section>
  );
}
