'use strict';

const Gameboard = (() => {
  const gameSquares = document.querySelectorAll('.testDiv');
  const player1 = 'X';
  const player2 = 'O';
  let currentPLayer = player1;
  let target;
  /*  const boardArr = ['X', 'O']; */

  function addMark(square) {
    gameSquares.forEach(() => {
      /* square.textContent = boardArr[0]; */
      if (square.textContent === '') {
        square.textContent = currentPLayer;
        if (currentPLayer === player1) {
          currentPLayer = player2;
        } else {
          currentPLayer = player1;
        }
      }
    });
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

  return { addClickListener: addClickListener };
})();

Gameboard.addClickListener();
