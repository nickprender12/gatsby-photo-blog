import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { image } from "./Image.module.scss";

function Image({ imageData, altData }) {
  return (
    <div className={image}>
      <GatsbyImage image={imageData} alt={altData} />
    </div>
  );
}

export default Image;
