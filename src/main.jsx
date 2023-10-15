import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import "./assets/styles/global/index.css";

ReactDOM.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById("root")
);
