'use strict';

const Gameboard = (() => {
  const gameSquares = document.querySelectorAll('.testDiv');
  const playerText = document.querySelector('.currentPlayer');
  const restartBtn = document.querySelector('.restartBtn');
  const player1 = 'X';
  const player2 = 'O';
  let currentPlayer = player1;
  let target;
  let boardArr = [];
  let winnerFound = false;
  /*  const boardArr = ['X', 'O']; */

  gameSquares.forEach((element) => {
    boardArr.push(element);
  });

  console.log(boardArr);

  function addMark(square) {
    gameSquares.forEach(() => {
      /* square.textContent = boardArr[0]; */
      if (square.textContent === '') {
        square.textContent = currentPlayer;
        if (currentPlayer === player1) {
          currentPlayer = player2;
        } else {
          currentPlayer = player1;
        }
        playerText.textContent = `${currentPlayer}'s turn!`;
      }
    });

    winnerChecker();
  }

  function addClickListener() {
    gameSquares.forEach((square) => {
      square.addEventListener('click', (e) => {
        target = e.target;
        addMark(target);
        return target;
      });
    });
  }

  restartBtn.addEventListener('click', () => {
    currentPlayer = player1;
    playerText.textContent = `${currentPlayer}'s turn!`;
    gameSquares.forEach((square) => {
      square.textContent = '';
    });
  });

  function winnerChecker() {
    let lettersArr = [];

    for (let i = 0; i <= 9; i++) {
      if (boardArr[i] !== undefined) {
        lettersArr.push(boardArr[i].textContent);
      }
    }

    console.log(lettersArr);

    let winningSequences = [
      //These are the winning sequences for the Rows, Columns and Diagonals
      [0, 1, 2], // row
      [3, 4, 5], // row
      [6, 7, 8], // row
      [0, 4, 8], // diagonal
      [2, 4, 6], // diagonal
      [0, 3, 6], // column
      [1, 4, 7], // column
      [2, 5, 8], // column
    ];

    winningSequences.forEach((sequence) => {
      const [a, b, c] = sequence;

      if (
        lettersArr[a] === lettersArr[b] &&
        lettersArr[a] === lettersArr[c] &&
        lettersArr[a] != '' &&
        lettersArr[b] != '' &&
        lettersArr[c] != ''
      ) {
        console.log('found winner! Winner is ' + lettersArr[a]);
        winnerFound = true;
      }

      if (winnerFound) {
        return;
      }
    });
  }

  return {
    addClickListener: addClickListener,
  };
})();

Gameboard.addClickListener();
