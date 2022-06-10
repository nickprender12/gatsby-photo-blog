import React from "react";
import { getImage } from "gatsby-plugin-image";
import Image from "./Image";

function Blog({ data }) {
  return (
    <>
      {data.allMdx.nodes.map((node, index) => {
        let image = getImage(
          data.allMdx.nodes[index].frontmatter.hero_image.childrenImageSharp[0]
        );
        let altData = node.frontmatter.hero_image_alt;

        return (
          <article key={node.id}>
            <Image imageData={image} altData={altData} />
            {/* <p>Posted: {node.frontmatter.date}</p> */}
          </article>
        );
      })}
    </>
  );
}

export default Blog;
