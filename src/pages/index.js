import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Blog from "../components/Blog";

const IndexPage = ({ data }) => {
  return (
    <div>
      <Layout pageTitle="Nicholas Prendergast">
        <Blog data={data} />
      </Layout>
    </div>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          hero_image_alt
          hero_image {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;
