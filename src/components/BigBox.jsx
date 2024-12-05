import React from "react";

const BigBox = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(20, 1fr)", // Create a 20x20 grid
        gridTemplateRows: "repeat(20, 1fr)",
        width: "500px",
        height: "500px",
        backgroundColor: "black",
        border: "2px solid #333",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
};

export default BigBox;
