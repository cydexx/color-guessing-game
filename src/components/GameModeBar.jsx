import React from "react";
import "../css/main.css";

function GameModeBar() {
  return (
    <>
      <div className="game-mode-bar">
        Game Modes:
        <nav className="game-modes">
          <div className="game-mode" id="10">
            <button>10</button>
          </div>
          <div className="game-mode" id="endless">
            <button>endless</button>
          </div>
          <div className="game-mode" id="test">
            <button>test</button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default GameModeBar;
