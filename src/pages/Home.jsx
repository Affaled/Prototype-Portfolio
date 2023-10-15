import React from "react";
import AboutData from "../data/AboutData";
import SkillsSVG from "../components/skillsSVG";
import MoreButton from "../components/MoreButton";

const Home = React.memo(() => {
  return (
    <main className="home">
      <section className="home__banner">
        <div className="home__banner-title">
          <h1>Front-end developer</h1>
          <p>Scroll down</p>
        </div>
      </section>
      <section className="home__about">
        <div className="home__about-skills">
          <h3>Skills</h3>
          <SkillsSVG />
        </div>
        <div className="home__about-text">
          <h3>About</h3>
          <span>
            <MoreButton />
          </span>
        </div>
      </section>
      <section className="home__projects">Projects</section>
      <section className="home__contact">Contact</section>
    </main>
  );
});

export default Home;
