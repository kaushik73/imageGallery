import React from "react";
import "../styles/gallery.css";

const ImageItem = ({ imgSrc, onClick }) => {
  return (
    <>
      <img
        src={imgSrc}
        alt="Gallery"
        className="gallery-image"
        onClick={onClick}
      />
    </>
  );
};

export default ImageItem;
