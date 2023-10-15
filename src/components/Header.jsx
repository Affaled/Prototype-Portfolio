import React from "react";
import { Link } from "react-router-dom";

const Header = React.memo(() => {
  return (
    <header className="header">
      <h1>
        <Link to="/">Affaled</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="header__social">
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
});

export default Header;
