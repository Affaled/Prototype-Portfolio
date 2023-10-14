import React from "react";
import MoreButton from "./MoreButton";

export default function ProjectItem() {
  return (
    <div className="project__item">
      <img src="#" alt="Project Photo" />
      <div className="project__item-text">
        <div>
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic itaque
            ex nobis, aliquid fuga illum consequatur aut quo deleniti modi
            voluptatem ab iusto nam, culpa esse eligendi ea sapiente? Eaque.
          </p>
        </div>
        <MoreButton />
      </div>
    </div>
  );
}
