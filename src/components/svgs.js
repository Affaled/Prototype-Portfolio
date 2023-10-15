import React from "react";

const svgs = {
  html5: React.lazy(() => import("../assets/svg/html5.svg")),
  css3: React.lazy(() => import("../assets/svg/css3.svg")),
  js: React.lazy(() => import("../assets/svg/js.svg")),
  scss: React.lazy(() => import("../assets/svg/scss.svg")),
  git: React.lazy(() => import("../assets/svg/git.svg")),
  reactjs: React.lazy(() => import("../assets/svg/reactjs.svg")),
  angular: React.lazy(() => import("../assets/svg/angular.svg")),
};

export default svgs;
