'use strict';

const Gameboard = (() => {
  const gameSquares = document.querySelectorAll('.testDiv');

  const boardArr = ['X', 'O'];

  function addMark(square) {
    gameSquares.forEach(() => {
      for (let i = 0; i < boardArr.length; i++) {
        square.textContent = boardArr[i];
      }
    });
  }

  function addClickListener() {
    gameSquares.forEach((square) => {
      square.addEventListener('click', (e) => {
        let target = e.target;
        console.log(target);
        addMark(target);
      });
    });
  }

  return { addClickListener: addClickListener };
})();

Gameboard.addClickListener();
