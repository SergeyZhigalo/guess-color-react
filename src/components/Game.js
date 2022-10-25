function Game({ colors, keyColor, correctColor, wrongColor }) {
  return (
    <div className="game">
      <div className="game-board"></div>
      <div className="game-button">
        {
          colors.map((color, index) => {
            return (color.color === keyColor)
              ? <button key={index} onClick={()=>correctColor(index)}>{color.color}</button>
              : <button key={index} onClick={()=>wrongColor(index)}>{color.color}</button>
          })
        }
      </div>
    </div>
  )
}

export default Game;