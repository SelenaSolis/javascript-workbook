'use strict';
var colors = require('colors');

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//prints board
function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}


function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  let solutionArray = solution.split("");
  let guessArray = guess.split("");
  let correctLetterLoc = 0;
  let correctLetters = 0;
  for (let i=0; i<4; i++){
    if (solutionArray[i] === guessArray[i]){
      correctLetterLoc = correctLetterLoc + 1;
      solutionArray[i] = null;
    }
  }
  for (let i=0; i<4; i++){
    let targetIndex = solutionArray.indexOf(guessArray[i])
    if(targetIndex > -1){
      correctLetters = correctLetters + 1;
      solutionArray[targetIndex] = null;
    }
  }
  return correctLetterLoc + "-" + correctLetters;
  return 
}


function mastermind(guess) {

  // solution = 'abcd'; // Comment this out to generate a random solution
  if(guess === solution){
    console.log("You guessed it!");
    return "You guessed it!";
  }
  else if(guess != solution){
    let hint = generateHint(solution, guess);
    board.push(guess, hint);
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 2);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abcd', 'abdc' ), '2-2');

    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('abcd', 'aedf'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
