import React from "react";
import { Link } from "react-router-dom";
import aboutData from "../data/AboutData";
import SkillsSVG from "./SkillsSVG";
import MoreButton from "./MoreButton";

export default function HomeAbout() {
  return (
    <section className="homeAbout" id="bio">
      <div className="homeAbout__skills">
        <h2>Skills</h2>
        <SkillsSVG />
      </div>
      <div className="homeAbout__text">
        <h2>About</h2>
        <p>{aboutData.personalInfo[0]}</p>
        <p>{aboutData.professionalInfo[2]}</p>
        <span>
          <Link to="/about">
            <MoreButton text="Full biography" />
          </Link>
        </span>
      </div>
    </section>
  );
}
