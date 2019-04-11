'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';
let win = false;


function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  for(let i=0; i<=2; i++){
    let row = board[i];
    if(row[0] == row[1] && row[1] == row[2] && row[0] != ' '){
      win = true;
      break;
    }
  }
}

function verticalWin() {
  for(let i=0; i<=2; i++){
    let col = [];
    for(let j=0; j<=2; j++){
      let x = board[j][i];
      col.push(x);
    }
    if(col[0] == col[1] && col[1] == col[2] && col[0] != ' '){
      win = true;
      break;
    }
  }
}

function diagonalWin() {
  if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ' ){
    win = true;
  }
  else if( board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[2][0] != ' '){
    win = true;
  }
}

function checkForWin(player) {
  horizontalWin();
  verticalWin();
  diagonalWin();

  if (win == true){
    printBoard();
    console.log(player + "'s win!");
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    win = false;
  }  
    
}

function ticTacToe(row, column) {
  board[row][column] = 'x';
  checkForWin('x');

  let compRow = Math.floor(Math.random() * 3);
  let compCol = Math.floor(Math.random() * 3)
  if (board[compRow][compCol] != ' '){
    while(board[compRow][compCol] != ' '){
      compRow = Math.floor(Math.random() * 3)
      compCol = Math.floor(Math.random() * 3)
    }
  }
  board[compRow][compCol] = 'o'; 
  checkForWin('o');
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
