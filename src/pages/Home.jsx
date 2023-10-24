import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeAbout from "../components/HomeAbout";
import HomeProjects from "../components/HomeProjects";

const Home = React.memo(() => {
  return (
    <main className="home">
      <HomeBanner />
      <HomeAbout />
      <HomeProjects />
    </main>
  );
});

export default Home;
