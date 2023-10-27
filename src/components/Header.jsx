import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import svgs from "./svgs";

const showMenu = () => {
  const menu = document.querySelector(".mobileNav");
  menu.classList.toggle("active");
};

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
          <a
            href="https://www.linkedin.com/in/lucas-affaled"
            target="_blank"
            aria-label="to acess my linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Affaled"
            target="_blank"
            aria-label="to acess my github">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/affaled.dev/"
            target="_blank"
            aria-label="to acess my instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <button type="button" onClick={showMenu}>
          <img src={svgs.menu} className="menu" alt="" />
        </button>
      </div>
    </header>
  );
});

export default Header;
