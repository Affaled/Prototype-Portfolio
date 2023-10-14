import React from "react";
import AboutText from "../components/AboutText";
import SkillsSVG from "../components/SkillsSVG";

export default function Home() {
  return (
    <main className="home">
      <section className="home__banner">
        <div className="home__banner-title">
          <h1>Front-End Developer</h1>
          <p>Scroll down</p>
        </div>
      </section>
      <section className="home__about">
        <div>
          <h3>About</h3>
          <p>{AboutText.personal.paragraph1}</p>
          <p>{AboutText.professional.paragraph3}</p>
        </div>
        <div>
          <h3>Skills</h3>
          <SkillsSVG />
        </div>
      </section>
      <section className="home__projects">Projects</section>
      <section className="home__contact">Contact</section>
    </main>
  );
}
