import React from "react";
import html5 from "../assets/svg/html5.svg";
import css3 from "../assets/svg/css3.svg";
import js from "../assets/svg/js.svg";
import scss from "../assets/svg/scss.svg";
import git from "../assets/svg/git.svg";

export default function About() {
  return (
    <main className="about">
      <h2 className="about__title">About me</h2>
      <section className="about__personal">
        <img src="#" alt="Lucas Photo" />
        <section className="about__personal-text">
          <h3>Front-end developer.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            qui laborum omnis nobis aliquam! Ipsam rem illo cupiditate? Rem
            consectetur ipsam fugit et incidunt perspiciatis dolorum minima ut
            iure eveniet.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            esse ducimus soluta placeat inventore minus possimus deleniti, sunt
            ratione quod consequuntur! Soluta, accusantium? Illo animi iure
            velit commodi, corrupti atque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            soluta aliquid illo? Adipisci inventore autem illo dignissimos,
            nostrum vel eaque animi exercitationem omnis suscipit dolor pariatur
            asperiores, veniam cumque! Iusto? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quae quas corrupti autem officiis eos
            laborum. Cum dignissimos aut impedit fugit aliquam ex, deserunt
            veritatis alias autem, nostrum unde, quas dolor!
          </p>
        </section>
      </section>
      <section className="about__biography">
        <h3>Getting to Know Me.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
          officia cum eligendi tempore consectetur quis animi, autem dolorem
          quidem ducimus atque corporis debitis praesentium quisquam dolorum,
          culpa optio. Totam, neque.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          cumque laborum non error molestiae. Id cupiditate, necessitatibus
          ipsam laborum, earum voluptatibus dolorum inventore ea unde quam ullam
          molestiae maiores fugit! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Libero amet vel voluptates neque culpa!
          Necessitatibus voluptates officia eligendi illo quasi exercitationem
          fuga, cum quidem voluptatibus rerum repellendus ea, quia consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          officia cum eligendi tempore consectetur quis animi, autem dolorem
          quidem ducimus atque corporis debitis praesentium quisquam dolorum,
          culpa optio. Totam, neque.
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
        </div>
      </section>
    </main>
  );
}
