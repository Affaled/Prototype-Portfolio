import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            Affaled
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
