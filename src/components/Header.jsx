import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">
        <Link to="/" alt="Affaled Logo">
          Affaled
        </Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <Link to="/" title="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" title="About Me">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" title=" My Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" title="Contact Me">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__socials">
        <a href="#">
          <i className="fab fa-linkedin" alt="LinkedIn"></i>
        </a>
        <a href="#">
          <i className="fab fa-github" alt="GitHub"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram" alt="Instagram"></i>
        </a>
      </div>
    </header>
  );
}
