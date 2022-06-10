import React from "react";
import { Link } from "gatsby";
import { container, home, links } from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={container}>
      <ul>
        <li className={home}>
          <Link to="/">Nicholas Prendergast</Link>
        </li>
        <div className={links}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
