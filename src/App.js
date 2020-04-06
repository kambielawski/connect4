import React, { useState } from 'react';
import Column from './components/Column.js';
import './App.css';

function App() {
  const [board, setBoard] = useState(
    [
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
    ]);
  const [currentTurn, setCurrentTurn] = useState('Red');

  function handleClick(id) {
    let slot = board[id].indexOf(0);
    if (slot !== -1) {
      document.getElementById(`col${id}`).className = "emptyColumn";
      setTimeout(() => document.getElementById(`col${id}`).className = "column", 500);
      setBoard((() => {
        board[id][slot] = currentTurn; // set slot to current turn's color
        return board;
      })());
      setCurrentTurn(currentTurn == 'Red' ? 'Black' : 'Red'); // change turn
    } else {
      document.getElementById(`col${id}`).className = "fullColumn";
      setTimeout(() => document.getElementById(`col${id}`).className = "column", 500);
    }
  }

  // handles hover color
  function hoverIn(id) {
    document.getElementById(`col${id}`)
      .style.backgroundColor = 'blue';
  }
  function hoverOut(id) {
    document.getElementById(`col${id}`)
      .style.backgroundColor = 'grey';
  }
  
  // handles reset
  function onReset() {
    setBoard([
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
      ]);
    setCurrentTurn('Red');
  }

  return (
    <div className="App">
      <h1>Connect Four!</h1>
      <div className="boardContainer">
        {board.map((col, i) => {
          return (
            <a 
              onClick={() => handleClick(i)}
              onMouseEnter={() => hoverIn(i)}
              onMouseLeave={() => hoverOut(i)}
            >
              <Column id={i} pieces={col} />
            </a>
          )
        })}
      </div>
      <h1>{`${currentTurn}'s turn`}</h1>
      <h1><a onClick={onReset}>Reset</a></h1>
    </div>
  );
}

const styles = {
  boardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
export default App;
