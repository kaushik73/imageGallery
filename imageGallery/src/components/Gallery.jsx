import React, { useState } from "react";
import Lightbox from "./Lightbox";
import ImageItem from "./ImageItem";
import "../styles/gallery.css";

const images = [
  "/shivam.jpg",
  "/one.png",
  "/radhika.jpg",
  "/sakshi.jpg",
  "/one.png",
  "/shivam.jpg",
  "/radhika.jpg",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);
  const showPrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const showNext = () =>
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <div className="gallery">
      {images.map((img, index) => (
        <ImageItem
          key={index}
          imgSrc={img}
          onClick={() => openLightbox(index)}
        />
      ))}

      {currentIndex !== null && (
        <Lightbox
          image={images[currentIndex]}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
};

export default Gallery;
