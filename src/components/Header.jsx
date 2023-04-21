import React from "react";
import logo from "../assets/svg/headerLogo.svg";
import "../assets/styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="headerContainer">
        <nav className="navBar">
          <ul className="listBar">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="nameBar">
          <h1>Lucas Dias</h1>
          <img src={logo} alt="Logo" className="headerLogo" />
        </div>
      </div>
    </header>
  );
}
