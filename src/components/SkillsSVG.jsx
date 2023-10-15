import React from "react";
import svgs from "../components/svgs";

const SkillsSVG = React.memo(() => {
  return (
    <div className="skills">
      <img src={svgs.git} alt="Git" />
      <img src={svgs.html5} alt="HTML5" />
      <img src={svgs.css3} alt="CSS3" />
      <img src={svgs.scss} alt="SCSS" />
      <img src={svgs.js} alt="JavaScript" />
      <img src={svgs.reactjs} alt="ReactJS" />
      <img src={svgs.angular} alt="Angular" />
    </div>
  );
});

export default SkillsSVG;
