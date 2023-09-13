import React, { useState } from "react";

const TicTac = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [playTag, setPlayTag] = useState("X");
  const click = (r) => {
    if (board[r] !== "") {
      alert("You Already Clicked The Box");
      return;
    }
    let Arrow = [...board];
    Arrow[r] = playTag;
    setBoard(Arrow);
    if (playTag === "X") {
      setPlayTag("O");
    } else {
      setPlayTag("X");
    }
    console.log("click", r);
    if (winTheGame(Arrow)) {
      alert("Winner");
      Arrow.fill("");
      setBoard(Arrow);
    }
  };
  const winTheGame = (board) => {
    const condition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let game = false;
    condition.forEach((element) => {
      console.log(element);
      if (
        board[element[0]] !== "" &&
        board[element[1]] !== "" &&
        board[element[2]] !== ""
      ) {
        if (
          board[element[0]] === board[element[1]] &&
          board[element[1]] === board[element[2]]
        ) {
          game = true;
        }
      }
    });
    return game;
  };
  const reset = () => {
    setBoard(Array(9).fill(""));
  };
  return (
    <div className="tac">
      <div>
        <h1 className="tik">Tic Tac Toys</h1>

        <table>
          <tbody>
            <tr>
              <td onClick={() => click(0)}>{board[0]}</td>
              <td onClick={() => click(1)}>{board[1]}</td>
              <td onClick={() => click(2)}>{board[2]}</td>
            </tr>
            <tr>
              <td onClick={() => click(3)}>{board[3]}</td>
              <td onClick={() => click(4)}>{board[4]}</td>
              <td onClick={() => click(5)}>{board[5]}</td>
            </tr>
            <tr>
              <td onClick={() => click(6)}>{board[6]}</td>
              <td onClick={() => click(7)}>{board[7]}</td>
              <td onClick={() => click(8)}>{board[8]}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default TicTac;
