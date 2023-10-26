import React from "react";
import { Link } from "react-router-dom";
import aboutData from "../data/AboutData";
import SkillsSVG from "./SkillsSVG";
import MoreButton from "./MoreButton";

export default function HomeAbout() {
  return (
    <section className="homeAbout" id="bio">
      <div className="homeAbout__skills">
        <h3>Skills</h3>
        <SkillsSVG />
      </div>
      <div className="homeAbout__text">
        <h3>About</h3>
        <p>{aboutData.personalInfo[0]}</p>
        <p>{aboutData.professionalInfo[2]}</p>
        <span>
          <Link to="/about">
            <MoreButton text="Learn more" />
          </Link>
        </span>
      </div>
    </section>
  );
}
