import React from "react";
import SkillsSVG from "../components/skillsSVG";
import aboutText from "../data/AboutData";

const About = React.memo(() => {
  return (
    <main className="about">
      <h2>About me</h2>
      <div className="about__professional">
        <img src="#" alt="Lucas Photo" />
        <section className="about__professional-text">
          <h3>Front-end developer.</h3>
          <p>{aboutText.professionalInfo[0]}</p>
          <p>{aboutText.professionalInfo[1]}</p>
          <p>{aboutText.professionalInfo[2]}</p>
        </section>
      </div>
      <section className="about__personal">
        <h3>Getting to know me.</h3>
        <p>{aboutText.personalInfo[0]}</p>
        <p>{aboutText.personalInfo[1]}</p>
        <p>{aboutText.personalInfo[2]}</p>
      </section>
      <section className="about__skills">
        <h3>My skills.</h3>
        <SkillsSVG />
      </section>
    </main>
  );
});

export default About;
