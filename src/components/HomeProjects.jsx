import React from "react";
import GetProjects from "./GetProjects";

export default function HomeProjects() {
  return (
    <section className="homeProjects">
      <h2>Projects</h2>
      <div className="homeProjects__content">
        <GetProjects />
      </div>
    </section>
  );
}
