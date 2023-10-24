import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content-text">
          <p>
            Created by <span>Lucas - Affaled</span>
          </p>
          <a href="https://wpastra.com/templates/theatre-artist-02/ ">
            Design by WPAstra
          </a>
        </div>
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
          </ul>
        </nav>
        <div className="footer__content-social">
          <a href="https://www.linkedin.com/in/lucas-affaled" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/Affaled" target="_blank">
            GitHub
          </a>
          <a href="https://www.instagram.com/affaled.dev/" target="_blank">
            Instagram
          </a>
          <p>affaledl@gmail.com</p>
        </div>
      </div>
      <p>Copyright © 2022 All rights reserved</p>
    </footer>
  );
}
