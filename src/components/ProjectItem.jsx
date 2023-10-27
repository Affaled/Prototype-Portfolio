import React from "react";
import MoreButton from "./MoreButton";

const ProjectItem = React.memo(({ image, title, description, url }) => {
  return (
    <div className="projectItem">
      <img
        class="projectItem__image"
        id="ProjectItemIMG"
        src={image}
        alt="Project Photo"
      />
      <div className="projectItem__text">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <a href={url} target="_blank">
          <MoreButton text="View project" />
        </a>
      </div>
    </div>
  );
});

export default ProjectItem;
