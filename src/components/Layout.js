import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { container, header, photoArray, footer } from "./Layout.module.scss";

function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={header}>
        <Navbar />
      </header>
      <section className={photoArray}>{children}</section>
      <Footer className={footer} />
    </div>
  );
}

export default Layout;
