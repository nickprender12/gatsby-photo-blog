import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Image from "./Image";

function Blog({ data }) {
  console.log("data", data);
  return (
    <div>
      {data.allMdx.nodes.map((node, index) => {
        let image = getImage(
          data.allMdx.nodes[index].frontmatter.hero_image.childrenImageSharp[0]
        );

        return (
          <article key={node.id}>
            <Image imageData={image} />
            {/* <GatsbyImage image={image} alt={""} /> */}
            {/* <p>Posted: {node.frontmatter.date}</p> */}
          </article>
        );
      })}
    </div>
  );
}

export default Blog;
