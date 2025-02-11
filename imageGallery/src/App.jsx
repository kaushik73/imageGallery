import React from "react";
import Gallery from "./components/Gallery";
import "./styles/gallery.css";

const App = () => {
  const style = {
    appContainer: {
      textAlign: "center",
    },
  };

  return (
    <div style={style.appContainer}>
      <h1>Image Gallery (Kaushik Jain) </h1>
      <Gallery />
    </div>
  );
};

export default App;
