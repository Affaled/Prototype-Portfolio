import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/styles/components/Header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={style.logo}>
        <Link to="/">Lucas Dias</Link>
      </h1>
      <nav>
        <ul className={style.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
