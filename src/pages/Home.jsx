import React from "react";

export default function Home() {
  return (
    <main className="home">
      <section className="home__banner">
        <div className="home__banner-title">
          <h1>Front-End Developer</h1>
          <p>Scroll down</p>
        </div>
      </section>
      <section className="home__about">About</section>
      <section className="home__projects">Projects</section>
      <section className="home__contact">Contact</section>
    </main>
  );
}
