'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

//initial setup of board
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

//initial player marker variable
let playerTurn = 'X';
let turn = 1;


function clearBoard(){
  document.getElementById('message2').innerHTML = " ";
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  printBoard();
  playerTurn = 'X';
  document.getElementById('message1').innerHTML = playerTurn;
  turn = 0;

}




//prints the existing board
function printBoard() {

  //counter to print each square 1-9
  let k = 1;

  //loops through each row and column and prints value
  for(let i=0; i<=2; i++){

    for (let j=0; j <= 2; j++){

        //variable to get id from HTML doc
        let square = 'sq' + k;
        document.getElementById(square).innerHTML = board[i][j];
        //adds 1 to square counter
        k = k + 1;

      }

    }

  }


//checks for horizontal win
function horizontalWin() {

  //for loop to check each row
  for(let i=0; i<=2; i++){
    let row = board[i];

    //if win in a row returns true
    if(row[0] == row[1] && row[1] == row[2] && row[0] != ' '){
      return true;
    }

  }

}

//checks for vertical win
function verticalWin() {

  //for loop to check each column
  for(let i=0; i<=2; i++){

    let col = [];

    for(let j=0; j<=2; j++){
      let x = board[j][i];
      col.push(x);
    }

    //if win in a column returns true
    if(col[0] == col[1] && col[1] == col[2] && col[0] != ' '){
      return true;
    }

  }

}

//checks for diagonal win
function diagonalWin() {

  //if one diagonal win returns true
  if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ' ){
    return true;
  }
  //if other diagonal win returns true
  else if( board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[2][0] != ' '){
    return true;
  }

}

//checks if there is a winner with player marker as parameter
function checkForWin(player) {

  //calls each check function
  horizontalWin();
  verticalWin();
  diagonalWin();

  //if any check function returns true declares winner
  if (horizontalWin() || verticalWin() || diagonalWin()){

    //prints winning board
    printBoard();
    document.getElementById('message2').innerHTML = player + "'s win!";

    return true;

  }
  else if(turn == 9){
      document.getElementById('message2').innerHTML = "It's a tie!";
    
  }
    
}


//function to print markers
//parameters are the row and column of square clicked
function ticTacToe(row, column) {

  //checks if the user has chosen an unoccupied square
  if (board[row][column] === ' '){

    //replaces existing item in array with the player marker
    board[row][column] = playerTurn;

    printBoard();
    document.getElementById('message2').innerHTML = " ";
    checkForWin(playerTurn);
    //clears message
    

    //prints board with updated array


    //alternates player
    if (playerTurn == 'X'){
      playerTurn = 'O';
    }
    else if(playerTurn == 'O'){
      playerTurn = 'X';
    }

    //increments global turn counter
    turn = turn + 1;
    document.getElementById('message1').innerHTML = playerTurn;

  }

  //else user chose occupied square
  else {
    document.getElementById('message2').innerHTML="That square is occupied"
  }

}


  

  

// function getPrompt() {

//   printBoard();
//   console.log("It's Player " + playerTurn + "'s turn.");
//   rl.question('row: ', (row) => {
//     rl.question('column: ', (column) => {
//       ticTacToe(row, column);
//       getPrompt();
//     });
//   });

// }




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
      board = [ [' ', ' ', 'O'], [' ', ' ', 'O'], [' ', ' ', 'O'] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
      board = [ [' ', ' ', ' '], ['O', 'O', 'O'], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
    it('should detect if input is out of range', () => {
      assert.equal(ticTacToe(2,3), "Please enter a valid input.");
      assert.equal(ticTacToe(3,2), "Please enter a valid input.");
      assert.equal(ticTacToe(3,3), "Please enter a valid input.");
    });
    it('should detect if input is not an integer', () =>{
      assert.equal(ticTacToe(1.5,0), "Please enter a valid input.");
      assert.equal(ticTacToe(1,1.5), "Please enter a valid input.");
      assert.equal(ticTacToe(1.5,1.5), "Please enter a valid input.");
    });
    it('should detect if a space is occupied', () =>{
      board = [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]
      assert.equal(ticTacToe(1,1), "That space is occupied");
    });
  });
}
