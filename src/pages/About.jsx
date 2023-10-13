import React from "react";
import html5 from "../assets/svg/html5.svg";
import css3 from "../assets/svg/css3.svg";
import js from "../assets/svg/js.svg";
import scss from "../assets/svg/scss.svg";
import git from "../assets/svg/git.svg";
import reactjs from "../assets/svg/reactjs.svg";
import angular from "../assets/svg/angular.svg";

export default function About() {
  return (
    <main className="about">
      <h2 className="about__title">About me</h2>
      <div className="about__personal">
        <img src="#" alt="Lucas Photo" />
        <section className="about__personal-text">
          <h3>Front-end developer.</h3>
          <p>
            My involvement with programming began in 2017 when I took my first
            steps into the world of coding with Python 3. Although, at that
            time, I only completed a small portion of a course and soon
            abandoned it, my passion for software development was reignited in
            2022.
          </p>
          <p>
            It was in that year that I decided to fully immerse myself in the
            programming universe by creating games using the Game Maker Studio
            platform. Subsequently, in 2023, I expanded my knowledge to web
            development, dedicating myself to studying HTML and CSS for website
            creation.
          </p>
          <p>
            Currently, I am engaged in the study and development of web
            applications, with a special focus on front-end development. I have
            been committed to learning technologies like React, Angular, and
            JavaScript. Furthermore, I am broadening my horizons to explore
            back-end development, delving into robust technologies like Java and
            PHP to enhance my skills and be capable of creating complete and
            integrated systems.
          </p>
        </section>
      </div>
      <section className="about__biography">
        <h3>Getting to Know Me.</h3>
        <p>
          My name is Lucas, and at the age of 19, I'm a programmer. What
          captivates me in this field is the ability to create, to breathe life
          into my ideas through code. In my personal life, I split my focus
          between reading, drawing, studies, and video games.
        </p>
        <p>
          I love sports like Volleyball, Basketball, and Boxing, which inspire
          me with their energy and strategy. My studies cover various areas,
          from drawing, games, and mythologies to programming and mathematics.
          Additionally, I have the habit of researching any topic that piques my
          curiosity.
        </p>
        <p>
          Music is a constant soundtrack in my life, accompanying me in all
          activities. Whether in my mornings and afternoons, dedicated to work
          and studies, or in the evenings and late nights, moments for leisure
          where I usually unwind.
        </p>
      </section>
      <section className="about__skills">
        <h3>My Skills.</h3>
        <div className="about__skills-container">
          <img src={git} alt="Git" />
          <img src={html5} alt="HTML5" />
          <img src={css3} alt="CSS3" />
          <img src={scss} alt="SCSS" />
          <img src={js} alt="JavaScript" />
          <img src={reactjs} alt="ReactJS" />
          <img src={angular} alt="Angular" />
        </div>
      </section>
    </main>
  );
}
