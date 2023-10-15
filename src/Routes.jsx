import React from "react";
import { createRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

const AppRoutes = createRoutes([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

export default function Routes() {
  return (
    <BrowserRouter>
      <Routes>{AppRoutes}</Routes>
    </BrowserRouter>
  );
}
