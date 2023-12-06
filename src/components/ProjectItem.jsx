import React from "react";
import MoreButton from "./MoreButton";

const ProjectItem = React.memo(
  ({ desktopImage, mobileImage, title, description, url }) => {
    return (
      <div className="projectItem">
        <div className="projectItem__image">
          <img
            className="projectItem__image-desktop"
            src={desktopImage}
            alt="Project desktop image"
          />
          <img
            className="projectItem__image-mobile"
            src={mobileImage}
            alt="Project mobile image"
          />
        </div>
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
  }
);

export default ProjectItem;
