import React from "react";
import { container, copyright, links } from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={container}>
      <div className={copyright}>© 2022 Nicholas Prendergast</div>
      <div className={links}>Email | Github | Linkedin</div>
    </footer>
  );
}

export default Footer;
