import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svg/headerLogo.svg";
import menu from "../assets/svg/menuIcon.svg";
import "../assets/styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="nameBar">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/">
          <p>Lucas Dias</p>
        </Link>
      </div>
      <nav>
        <button className="menuIcon">
          <img src={menu} alt="Menu" />
        </button>
        <ul className="listBar">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>About</li>
          </Link>
          <Link to="/">
            <li>Skills</li>
          </Link>
          <Link to="/">
            <li>Projects</li>
          </Link>
          <Link to="/">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
