import React from "react";
import MoreButton from "./MoreButton";

const ProjectItem = React.memo(() => {
  return (
    <div className="projectItem">
      <img src="#" alt="Project Photo" />
      <div className="projectItem__text">
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
});

export default ProjectItem;
