import './App.css';
import Game from "./components/Game";
import { useEffect } from "react";
import { useGame } from "./hooks/game";

function App() {
  const {
    colors,
    keyColor,
    score,
    accuracy,
    highScore,
    render,
    correctColor,
    wrongColor,
  } = useGame();

  useEffect(() => {
    render(keyColor)
  }, []);

  return (
    <div className="App">
      <header className="header">
        <span>Счет {score}</span>
        <span>Точность {(score / accuracy).toFixed(2) * 1000 / 10 || 0}%</span>
        <span>Рекорд {highScore}</span>
      </header>
      <Game
        colors={colors}
        keyColor={keyColor}
        correctColor={correctColor}
        wrongColor={wrongColor}
      />
    </div>
  );
}

export default App;
