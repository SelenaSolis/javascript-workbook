'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  let startArr = stacks[startStack];
  let endArr = stacks[endStack];

  endArr.push(startArr.pop());

}

function isLegal(startStack, endStack) {
  let startArr = stacks[startStack];
  let endArr = stacks[endStack];
  console.log(startArr+" this is the arr");
  console.log(startArr.length+" this is length");

  if (startArr.length === 0){
    console.log ("choose from a valid stack");
  }
  else if(startStack === endStack){
    return false;
  }
  else if (startArr[startArr.length - 1] > endArr[endArr.length - 1]){
    return false;
  }
  else{
    return true;
  }

}

function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {

  if(isLegal(startStack, endStack)){
    movePiece(startStack,endStack);
  }
}

  console.log(stacks);


function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
