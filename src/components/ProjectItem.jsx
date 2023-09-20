import React from "react";

export default function ProjectItem() {
  return (
    <div className="projects__content-item">
      <img src="#" alt="Project Image" />
      <div className="projects__content-itemText">
        <span className="projects__content-itemText-status">In progress</span>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic itaque
          ex nobis, aliquid fuga illum consequatur aut quo deleniti modi
          voluptatem ab iusto nam, culpa esse eligendi ea sapiente? Eaque.
        </p>
        <span className="projects__content-itemText-more">Learn more</span>
      </div>
    </div>
  );
}
