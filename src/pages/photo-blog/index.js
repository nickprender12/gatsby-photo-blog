import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";

function PhotoArea({ data }) {
  // console.log(data);
  return <div></div>;
}

export default PhotoArea;

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;
