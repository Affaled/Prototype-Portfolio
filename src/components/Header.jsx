import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Affaled</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li>
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
