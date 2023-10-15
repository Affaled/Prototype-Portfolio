import React from "react";
import SkillsSVG from "../components/skillsSVG";
import AboutText from "../data/AboutData";

const About = React.memo(() => {
  return (
    <main className="about">
      <h2 className="about__title">About me</h2>
      <div className="about__professional">
        <img src="#" alt="Lucas Photo" />
        <section className="about__professional-text">
          <h3>Front-end developer.</h3>
          <p>{AboutText.professional.paragraph1}</p>
          <p>{AboutText.professional.paragraph2}</p>
          <p>{AboutText.professional.paragraph3}</p>
        </section>
      </div>
      <section className="about__personal">
        <h3>Getting to know me.</h3>
        <p>{AboutText.personal.paragraph1}</p>
        <p>{AboutText.personal.paragraph2}</p>
        <p>{AboutText.personal.paragraph3}</p>
      </section>
      <section className="about__skills">
        <h3>My skills.</h3>
        <SkillsSVG />
      </section>
    </main>
  );
});

export default About;
