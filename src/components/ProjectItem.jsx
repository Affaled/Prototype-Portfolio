import React from "react";
import arrow from "../assets/svg/arrow.svg";

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
        <div className="project__item-text-more">
          Learn more
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M6 12H18M18 12L13 7M18 12L13 17"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
