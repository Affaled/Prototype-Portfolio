import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/">About me</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>
      </nav>
    </header>
  );
}
