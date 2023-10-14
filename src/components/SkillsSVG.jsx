import React from "react";
import svgs from "../components/svgs";

export default function SkillsSVG() {
  return (
    <div className="skills__container">
      <img src={svgs.git} alt="Git" />
      <img src={svgs.html5} alt="HTML5" />
      <img src={svgs.css3} alt="CSS3" />
      <img src={svgs.scss} alt="SCSS" />
      <img src={svgs.js} alt="JavaScript" />
      <img src={svgs.reactjs} alt="ReactJS" />
      <img src={svgs.angular} alt="Angular" />
    </div>
  );
}
