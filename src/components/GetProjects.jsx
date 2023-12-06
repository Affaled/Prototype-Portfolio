import React from "react";
import ProjectsImagesSet from "../data/ProjectsImagesSet";
import ProjectItem from "./ProjectItem";

export default function GetProjects() {
  return (
    <>
      <ProjectItem
        desktopImage={ProjectsImagesSet.angularBlog[0]}
        mobileImage={ProjectsImagesSet.angularBlog[1]}
        title="Angular blog"
        description="A blog made with Angular"
        url="https://angular-blog-mu-red.vercel.app"
      />
    </>
  );
}
