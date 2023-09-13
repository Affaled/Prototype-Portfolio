import React from "react";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">Affaled</h1>
      <div className="header__container">
        <nav className="header__container--nav">
          <ul className="header__container--navList">
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <p className="header__container--email">affaledl@gmail.com</p>
      </div>
    </header>
  );
}
