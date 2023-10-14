import svgs from "../components/svgs";
import AboutText from "../components/AboutText";

export default function About() {
  return (
    <main className="about">
      <h2 className="about__title">About me</h2>
      <div className="about__personal">
        <img src="#" alt="Lucas Photo" />
        <section className="about__personal-text">
          <h3>Front-end developer.</h3>
          <p>{AboutText.professional.paragraph1}</p>
          <p>{AboutText.professional.paragraph2}</p>
          <p>{AboutText.professional.paragraph3}</p>
        </section>
      </div>
      <section className="about__biography">
        <h3>Getting to Know Me.</h3>
        <p>{AboutText.personal.paragraph1}</p>
        <p>{AboutText.personal.paragraph2}</p>
        <p>{AboutText.personal.paragraph3}</p>
      </section>
      <section className="about__skills">
        <h3>My Skills.</h3>
        <div className="about__skills-container">
          <img src={svgs.git} alt="Git" />
          <img src={svgs.html5} alt="HTML5" />
          <img src={svgs.css3} alt="CSS3" />
          <img src={svgs.scss} alt="SCSS" />
          <img src={svgs.js} alt="JavaScript" />
          <img src={svgs.reactjs} alt="ReactJS" />
          <img src={svgs.angular} alt="Angular" />
        </div>
      </section>
    </main>
  );
}
