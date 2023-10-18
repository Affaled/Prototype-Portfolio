import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeAbout from "../components/HomeAbout";

const Home = React.memo(() => {
  return (
    <main className="home">
      <HomeBanner />
      <HomeAbout />
      <section className="home__projects">Projects</section>
      <section className="home__contact">Contact</section>
    </main>
  );
});

export default Home;
