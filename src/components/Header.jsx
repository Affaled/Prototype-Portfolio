import React from "react";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">
        <a href="/" alt="Affaled Logo">
          Affaled
        </a>
      </h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <a href="/" title="Home">
              Home
            </a>
          </li>
          <li>
            <a href="/about" title="About Me">
              About
            </a>
          </li>
          <li>
            <a href="/projects" title=" My Projects">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" title="Contact Me">
              Contact
            </a>
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
