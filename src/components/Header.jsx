import React from "react";
import "../assets/styles/Header.css";

export default function Header() {
  return (
    <header className="header">
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
        <img src="" alt="Logo" className="headerLogo" />
      </div>
    </header>
  );
}
