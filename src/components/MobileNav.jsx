import React from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <nav className="mobileNav">
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
  );
}
