import { useEffect, useState } from "react";
import "../css/main.css";

function Game() {
  const [color, setColor] = useState("");

  const getRandomColor = () => {
    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    const color = new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");

    return `#${color}`;
  };
  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  return (
    <div>
      <div className="color-block" style={{ background: color }}>
        {color}
      </div>
      <div className="answers">
        {/*3buttondan birinde random olarak doğru cevap olacak.*/}
        <button className="btn">{color}</button>{" "}
        <button className="btn">{getRandomColor()}</button>
        <button className="btn">{getRandomColor()}</button>
      </div>
    </div>
  );
}

export default Game;
