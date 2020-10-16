import React from "react";
import ImageP from "./img/ImageP.svg";
import CircleButton from "./img/CircleButton.svg";



const ImageContainer = () => {
  return(
    <div className="image-container">
      <div className="close">
        <img src={CircleButton} className="close-btn" alt="close-svg"/>
      </div>
      <img src={ImageP} alt="svg-image"/>
  </div>
  );
}

export default ImageContainer;