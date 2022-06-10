import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar";
import Blog from "./Blog";
import Footer from "./Footer";

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
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header>{pageTitle}</header>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
