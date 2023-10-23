import React from "react";
import aboutData from "../data/AboutData";
import SkillsSVG from "./skillsSVG";
import MoreButton from "./MoreButton";

export default function HomeAbout() {
  return (
    <section className="homeAbout">
      <div className="homeAbout__skills">
        <h3>Skills</h3>
        <SkillsSVG />
      </div>
      <div className="homeAbout__text">
        <h3>About</h3>
        <p>{aboutData.personalInfo[0]}</p>
        <p>{aboutData.professionalInfo[2]}</p>
        <span>
          <MoreButton text="Learn more" />
        </span>
      </div>
    </section>
  );
}
