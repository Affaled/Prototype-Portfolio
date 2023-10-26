import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import svgs from "./svgs";

const Header = React.memo(() => {
  return (
    <header className="header">
      <div className="header__content">
        <h1>
          <Link to="/">Affaled</Link>
        </h1>
        <Navbar />
        <MobileNav />
        <div className="header__content-social">
          <a href="https://www.linkedin.com/in/lucas-affaled" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Affaled" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/affaled.dev/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <button type="button">
          <img src={svgs.menu} className="menu" alt="" />
        </button>
      </div>
    </header>
  );
});

export default Header;
