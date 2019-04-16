'use strict';


//initial setup of board
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

//initial player marker variable
let playerTurn = 'X';
let compTurn = 'O';
let opp = 'person';

//initial turn counter
let turn = 1;

window.onload = printBoard();


//function to change opponent
function opponent(){

  //gets current opponent
  opp = document.getElementById('opponent').innerHTML;

  //alternates opponent when button is clicked
  if (opp == 'person'){
    opp = 'computer';
    printBoard();
  }
  else {
    opp = 'person';
    printBoard();
  }

  //prints opponent on button
  document.getElementById('opponent').innerHTML = opp;
}


//function to clear board and variables
function clearBoard(){
  document.getElementById('message2').innerHTML = " ";
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  printBoard();
  playerTurn = 'X';
  turn = 1;
  let gameBoard = document.getElementById('container');
  gameBoard.style.pointerEvents = 'auto';
  gameBoard.style.backgroundColor = 'white';
}


//prints the existing board
function printBoard() {
  if(opp == 'person'){
    document.getElementById('message1').innerHTML = "It's " + playerTurn + "'s turn";
  }
  else if(opp == 'computer'){
    document.getElementById('message1').innerHTML = "You are X's";
  }

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


//funtion for computer logic
function compLogic(){
  

}



//checks if there is a winner with player marker as parameter
function checkForWin() {

  //calls each check function
  horizontalWin();
  verticalWin();
  diagonalWin();

  //if any check function returns true declares winner
  if (horizontalWin() || verticalWin() || diagonalWin()){

    //prints winning board
    printBoard();
    document.getElementById('message2').innerHTML = playerTurn + "'s win!";
    let gameBoard = document.getElementById('container');
    gameBoard.style.pointerEvents = 'none';
    gameBoard.style.backgroundColor = 'pink';

    return true;

  }
  else if(turn == 9){
      document.getElementById('message2').innerHTML = "It's a tie!";
    
  }
    
}


//function to randomly choose square for computer play
function computerTurn(){
  let row = Math.floor(Math.random()*2);
  let col = Math.floor(Math.random()*2);

  //returns array of values
  return [row, col];
}



//function to print markers
//parameters are the row and column of square clicked
function ticTacToe(row, column) {

  //checks if the user has chosen an unoccupied square
  if (board[row][column] === ' '){

    //replaces existing item in array with the player marker
    board[row][column] = playerTurn;

    //alternates player
    if (playerTurn == 'X'){
      playerTurn = 'O';
    }
    else if(playerTurn == 'O'){
      playerTurn = 'X';
    }

    printBoard();

    //clears message
    document.getElementById('message2').innerHTML = " ";

    checkForWin();
    
    //if opponent is computer 
    if (opp == 'computer' && turn < 9 && !checkForWin()){

      document.getElementById('message1').innerHTML = "You are X's";

      console.log(playerTurn);
      let move = computerTurn();
      row = move[0];
      column = move[1];
      

      if (board[row][column] != ' '){
        while(board[row][column] != ' '){
          row = Math.floor(Math.random()*3);
          column = Math.floor(Math.random()*3);
          console.log('hello');
        }
      }

      console.log(playerTurn);
      board[row][column] = playerTurn;
      turn = turn + 1;
      console.log(turn);
      printBoard();
      checkForWin();

      //alternates player after computer play
      if (playerTurn == 'X'){
        playerTurn = 'O';
      }
      else if(playerTurn == 'O'){
        playerTurn = 'X';
      }

    }

    //if opponent is person
    else if (opp == 'person' && !checkForWin()){
      document.getElementById('message1').innerHTML = "It's " + playerTurn + "'s turn";
    }

    //increments global turn counter
    turn = turn + 1;
  }

  //else user chose occupied square
  else {
    document.getElementById('message2').innerHTML="That square is occupied";
  }

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
