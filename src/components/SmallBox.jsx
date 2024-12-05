import React from "react";

const SmallBox = ({ color, opacity, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        background: `linear-gradient(to bottom, ${color}, black)`,
        opacity: opacity,
        width: "100%", // Make it adapt to the grid cell
        height: "100%",
      }}
    ></div>
  );
};

export default SmallBox;
