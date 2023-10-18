import React from "react";
import HomeAbout from "../components/HomeAbout";

const Home = React.memo(() => {
  return (
    <main className="home">
      <section className="home__banner">
        <div className="home__banner-title">
          <h1>Front-end developer</h1>
          <p>Scroll down</p>
        </div>
      </section>
      <HomeAbout />
      <section className="home__projects">Projects</section>
      <section className="home__contact">Contact</section>
    </main>
  );
});

export default Home;
