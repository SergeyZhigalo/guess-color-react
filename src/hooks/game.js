import {useState} from "react";
import chroma from "chroma-js";

export function useGame() {
  const [colors, setColors] = useState([
    {color: chroma.random().hex()},
    {color: chroma.random().hex()},
    {color: chroma.random().hex()},
  ]);
  const [keyColor, setKeyColor] = useState(colors[Math.round(Math.random() * (2))].color);
  const [score, setScore] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0)

  function render(color){
    let gameBoard = document.querySelector(".game-board");
    gameBoard.style.backgroundColor = color;
  }

  function clearStyle(){
    const button = document.querySelectorAll(".game-button button");
    button.forEach((btn) => {
      btn.style.backgroundColor = "white";
      btn.style.color = "black";
      btn.classList.remove("correctColor");
      btn.classList.remove("wrongColor");
    })
  }

  function correctColor(index){
    const button = document.querySelectorAll(".game-button button")[index];
    button.style.backgroundColor = colors[index].color;
    button.style.color = "white"
    button.classList.add("correctColor");
    setScore(score + 1);
    if (score >= highScore){
      setHighScore(score + 1);
      localStorage.setItem("highScore", score + 1)
    }
    setAccuracy(accuracy + 1);
    setTimeout(()=>{
      clearStyle();
      const newColors = [
        {color: chroma.random().hex()},
        {color: chroma.random().hex()},
        {color: chroma.random().hex()},
      ]
      const newKeyColor = newColors[Math.round(Math.random() * (2))].color;
      setColors(newColors)
      setKeyColor(newKeyColor)
      render(newKeyColor)
    }, 500);
  }

  function wrongColor(index){
    const button = document.querySelectorAll(".game-button button")[index];
    button.style.backgroundColor = colors[index].color;
    button.style.color = "white"
    button.classList.add("wrongColor");
    setAccuracy(accuracy + 1);
  }

  return {
    colors,
    keyColor,
    score,
    accuracy,
    highScore,
    render,
    correctColor,
    wrongColor,
  }
}