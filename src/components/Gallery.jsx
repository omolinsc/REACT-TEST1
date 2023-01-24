import React, { useState } from "react";

const Gallery = (props) => {
  let { title, image, color} = props;
  let bgColor;
  let desc = props.description;
  
  if (title === "TechnicalViper"){
    bgColor = "rgba(255, 94, 94, 0.562)";
  }
  if (title === "AirViper"){
    bgColor = "rgba(69, 184, 250, 0.562)"
  }
  if (title === "CounterViper"){
    bgColor = "rgba(244, 255, 94, 0.562)"
  }
  
  const [backColor, setBackColor] = useState(bgColor)
  const toggleColor = () => {
    if (backColor === bgColor) setBackColor("white");
    if (backColor === "white") setBackColor(bgColor);
  }

  const [description, setDescription] = useState("none")
  const toggleDesc = () => {
    if (description === "") {
        setDescription(desc);

    }
    if (description === desc) setDescription("")
  }

  return (
    <div>
      <h3 onClick={toggleDesc}>{title}</h3>
      <img
        onClick={toggleColor}
        src={image}
        className="Pala"
        style={{
          borderColor: color,
          backgroundColor: backColor,
        }}
        alt={title}
      />
      <div>
        {props.description}
      </div>
    </div>
  );
};

export default Gallery;
