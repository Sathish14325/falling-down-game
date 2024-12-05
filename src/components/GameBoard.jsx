import React, { useEffect, useState } from "react";
import BigBox from "./BigBox";
import SmallBox from "./SmallBox";

const getRandomColor = () => {
  const colors = ["#FF00FF", "#9400D3", "#4B0082", "#800080"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const GameBoard = () => {
  const [grid, setGrid] = useState([]);
  const [score, setScore] = useState(0);
  const gridSize = 20; // 20x20 grid

  // Initialize the grid
  useEffect(() => {
    const initialGrid = Array.from({ length: gridSize }, () =>
      Array(gridSize).fill(null)
    );
    setGrid(initialGrid);
  }, []);

  // Animate falling blocks
  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            if (rowIndex === 0 && Math.random() > 0.9) {
              // Add a new block at the top of a random column
              return { color: getRandomColor(), opacity: 1 };
            } else if (cell && rowIndex < gridSize - 1) {
              // Move block down
              return null;
            }
            return prevGrid[rowIndex - 1]?.[colIndex] || null;
          })
        );

        // Fade out blocks at the bottom
        newGrid[gridSize - 1] = newGrid[gridSize - 1].map((cell) =>
          cell ? { ...cell, opacity: cell.opacity - 0.1 } : null
        );

        return newGrid;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <BigBox>
        {grid.flat().map((cell, index) => (
          <div key={index}>
            {cell && (
              <SmallBox
                color={cell.color}
                opacity={cell.opacity}
                onClick={() => {
                  setScore((prevScore) => prevScore + 10); // Bonus points for clicking
                  setGrid((prevGrid) => {
                    const newGrid = [...prevGrid];
                    const rowIndex = Math.floor(index / gridSize);
                    const colIndex = index % gridSize;
                    newGrid[rowIndex][colIndex] = null; // Remove clicked block
                    return newGrid;
                  });
                }}
              />
            )}
          </div>
        ))}
      </BigBox>
    </div>
  );
};

export default GameBoard;
