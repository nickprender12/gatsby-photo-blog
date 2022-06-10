import React from "react";

import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function Image({ imageData }) {
  // console.log(node);
  // const img = getImage(node.frontmatter.hero_image);
  // console.log(image);
  console.log("rendered");
  return (
    <div>
      <GatsbyImage image={imageData} alt={""} />
      {/* <MDXRenderer>{data.mdx.body}</MDXRenderer> */}
    </div>
  );
}

export default Image;
