import React, { useEffect, useState } from "react";
import "../styles/lightbox.css";

const Lightbox = (prop) => {
  const [fade, setFade] = useState("fade-in");

  const { image, onClose, onPrev, onNext } = prop;

  useEffect(() => {
    setFade("fade-in");
  }, [image]);

  const handleClose = () => {
    setFade("fade-out");
    onClose;
  };
  return (
    <div className={`lightbox-container ${fade}`}>
      <button className="nav-btn close-btn" onClick={handleClose}>
        X
      </button>
      <button className="nav-btn prev-btn" onClick={onPrev}>
        ←
      </button>

      <div className="lightbox-content">
        <img src={image} alt="Enlarged" className="lightbox-img" />
      </div>

      <button className="nav-btn next-btn" onClick={onNext}>
        →
      </button>
    </div>
  );
};

export default Lightbox;
