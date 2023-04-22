import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svg/headerLogo.svg";
import "../assets/styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="nameBar">
          <Link to="/">
            <img src={logo} alt="Logo" className="headerLogo" />
          </Link>
          <Link to="/">
            <h1>Lucas Dias</h1>
          </Link>
        </div>
        <nav className="navBar">
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
      </div>
    </header>
  );
}
