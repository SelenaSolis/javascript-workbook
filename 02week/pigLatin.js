'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  //trims input word
  word = word.trim();

  //converts word to lowercase
  word = word.toLowerCase();

  //array of vowels
  var vowelArr = ["a", "e", "i", "o", "u", "y"];

  //variable to hold letters of word until vowel
  var vowel = "b";

  //variable to count position of vowel
  var i = 0;

  //while loop to look through word until a vowel
    while(!vowelArr.includes(vowel)){
      //assign letter at position i to vowel
      vowel = word.charAt(i);
      //increment position by 1
      i = i + 1;
    }

    //variable for first instance of a vowel
    i = i - 1;

    //variable for the letters before the vowel
    var beg = word.slice(0, i);

    //if word starts with a vowel add "yay"

    if (vowelArr.includes(word.charAt(0))){
      //removes letters before vowel and concatenates them to the end with "yay"
      word = word.slice(i) + beg + 'yay';
    }
    //if not add "ay"
    else{
      //removes letters before vowel and concatenates them to the end with "ay"
      word = word.slice(i) + beg + 'ay';
    }
    return word;
  

  //add 'ay' to the end

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
