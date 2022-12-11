import { useEffect, useState } from "react";
import "../css/main.css";

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
var score = 0;
function Game() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isWrong, setIsWrong] = useState(false);

  const generateColors = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };
  useEffect(() => {
    generateColors();
  }, []);
  const colorGuessEvent = (answer = String) => {
    if (answer === color) {
      setIsWrong(false);
      generateColors();
      score++;
    } else {
      setIsWrong(true);
    }
  };
  return (
    <div className="colorgame-div">
      <div className="score-board"> Score: {score}</div>
      <div className="color-block" style={{ background: color }}>
        {color}
      </div>
      {isWrong && <div className="wrong"> Wrong Answer </div>}
      <div className="answers">
        {answers.map((answer) => (
          <button onClick={() => colorGuessEvent(answer)} key={answer}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Game;
