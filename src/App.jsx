import React from "react";
import GameBoard from "./components/GameBoard";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Falling Boxes Game
      </h1>
      <GameBoard />
    </div>
  );
};

export default App;
