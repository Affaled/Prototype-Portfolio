import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Affaled</h1>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-listItem">
            <a href="#">HOME</a>
          </li>
          <li className="header__nav-listItem">
            <a href="#">ABOUT</a>
          </li>
          <li className="header__nav-listItem">
            <a href="#">PROJECTS</a>
          </li>
          <li className="header__nav-listItem">
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div className="header__socials">
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </header>
  );
}
