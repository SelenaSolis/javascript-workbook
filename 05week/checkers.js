'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  constructor(color){
    if(color === 'white'){
      this.symbol = '○';
    }
    else{
      this.symbol = '●';
    }
    
  }

}

class Board {
  constructor() {
    this.grid = [];
    this.checkers = [];
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }

  //function lays out both player's checkers
  layoutCheckers() {
    this.layoutPlayer1();
    this.layoutPlayer2();
    console.log(this.checkers);
    console.log(this.checkers[0]);
  }

  layoutPlayer1() {
    // Layout the rows and column for the starting board for player 1
    for(let i = 5; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (i % 2 === 0) {
          if (j % 2 !== 0) {
            this.grid[i][j] = new Checker('black');
            this.checkers.push(this.grid[i][j]);

          }
        }
        else {
          if (j % 2 === 0) {
            this.grid[i][j] = new Checker('black');
            this.checkers.push(this.grid[i][j]);
          }
        }
      }
    }
  }

  layoutPlayer2() {
    // Layout the rows and column for the starting board for player 2
    for(let i = 0; i < 3; i++) {
      for (let j = 0; j < 8; j++) {
        if (i % 2 === 0) {
          if (j % 2 !== 0) {
            this.grid[i][j] = new Checker('white');
            this.checkers.push(this.grid[i][j]);
          }
        }
        else {
          if (j % 2 === 0) {
            this.grid[i][j] = new Checker('white');
            this.checkers.push(this.grid[i][j]);
          }
        }
      }
    }
  }

  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
}

class Game {
  constructor() {
    this.board = new Board();
  }
  start() {
    this.board.createGrid();
    this.board.layoutCheckers();
  }

  killChecker(position){
    let positionRow = position[0];
    let positionCol = position[1];
    let symbol = this.board.grid[positionRow][positionCol].symbol;
    console.log("symbol: " + symbol);
    for (let x in this.board.checkers){
      console.log(this.board.checkers[x].symbol);
      
      if (this.board.checkers[x].symbol === symbol){
        let index = x;
        this.board.checkers.splice(index, 1);
        break;
      }
    }
    this.board.grid[positionRow][positionCol] = null;
  }

  moveChecker(start, end) {
    let [startRow, startColumn] = start.split('');
    let [endRow, endColumn] = end.split('');
    startRow = parseInt(startRow);
    startColumn = parseInt(startColumn);
    

    endRow = parseInt(endRow);
    endColumn = parseInt(endColumn);
    let startCell = this.board.grid[startRow][startColumn];
    let endCell = this.board.grid[parseInt(endRow)][parseInt(endColumn)];

    if (!endCell){
      if(endRow === startRow-1 && (endColumn === startColumn+1 || endColumn === startColumn-1)){
        if(this.board.grid[startRow][startColumn].symbol === '●'){
          this.board.grid[endRow][endColumn] = {symbol: '●'};
          this.board.grid[startRow][startColumn] = null;
          
        }
      }
      else if(endRow === startRow+1 && (endColumn === startColumn+1 || endColumn === startColumn-1)){
        if(this.board.grid[startRow][startColumn].symbol === '○'){
          this.board.grid[endRow][endColumn] = {symbol: '○'};
          this.board.grid[startRow][startColumn] = null;
        }
      }
      else if(Math.abs(startRow - endRow) == 2){
        let killRow = (startRow + endRow)/2;
        let killCol = (startColumn + endColumn)/2;
        let killPosition = [killRow,killCol];
        this.board.grid[endRow][endColumn] = this.board.grid[startRow][startColumn];
        this.killChecker(killPosition);
        
      }
      else{
        console.log("invalid move");
      }



      // if(this.board.grid[startRow][startColumn].symbol === '●'){
      //   if(endRow === startRow-1 && (endColumn === startColumn+1 || endColumn === startColumn-1)){
      //     this.board.grid[endRow][endColumn] = {symbol: '●'};
      //     this.board.grid[startRow][startColumn] = null;
      //   }
      // }
      // else if(this.board.grid[startRow][startColumn].symbol === '○'){
      //     if(endRow === startRow + 1 && (endColumn === startColumn + 1 || endColumn === startColumn - 1)){
      //       this.board.grid[endRow][endColumn] = {symbol: '○'};
      //       this.board.grid[startRow][startColumn] = null;
      //     }
      // }
      // else{
      //   console.log("invalid move");
      // }
    }
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
