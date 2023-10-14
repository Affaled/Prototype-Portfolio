import SkillsSVG from "../components/SkillsSVG";
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
        <SkillsSVG />
      </section>
    </main>
  );
}
