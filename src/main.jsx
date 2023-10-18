import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import RouteApp from "./routes";
import "./assets/styles/global/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={RouteApp} />
  </React.StrictMode>
);
