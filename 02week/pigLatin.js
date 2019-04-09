'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  //converts input word to lowercase
  word = word.toLowerCase();

  //array of vowels
  const vowelArr = ["a", "e", "i", "o", "u", "y"];

  //variable to hold letters of word until vowel
  let vowel = "b";


  //get word count of input
  //creates array of words splitting at any spaces
  let words = word.split(' ');

  //removes empty strings from 'words' array
  words = words.filter(Boolean);

  //counts words in 'words' array
  let wordCount = words.length;


  //performs action when iput has only one word
  if (wordCount == 1){

    //trims input word
    word = word.trim();

    //sets initial position of letter in word
    let i = 0;


    //while loop to check if each letter is in the vowel array
    while(!vowelArr.includes(vowel)){

      //assign letter at position i to vowel
      vowel = word.charAt(i);

      //increment position by 1
      i = i + 1;
    }


    //variable for first instance of a vowel
    let vowelLoc = i - 1;

    //variable for the letters before the vowel
    let beg = word.slice(0, vowelLoc);



    //if word starts with a vowel add "yay"
    if (vowelArr.includes(word.charAt(0))){

      //removes letters before vowel and concatenates them to the end with "yay"
      word = word.slice(vowelLoc) + beg + 'yay';

    }

    //if not add "ay"
    else{

      //removes letters before vowel and concatenates them to the end with "ay"
      word = word.slice(vowelLoc) + beg + 'ay';

    }

    return word;
  }

  
  //performs action when iput has more than one word
  if(wordCount > 1){

    //define empty string for translated sentence
    let translated = "";
    

    //loops through each word in 'words' array
    for (let i=0; i<words.length; i++){

      //assigns each word to new variable
      let wordCycle = words[i];

      //assigns 'vowel' a value that is not in the 'vowelArr' to reset
      let vowel = 'b';

      //sets initial position of letter in word
      let j = 0;


      //while loop to check if each letter is in the vowel array
      while(!vowelArr.includes(vowel)){

        //assign letter at position i to vowel
        vowel = wordCycle.charAt(j);
        //increment position by 1
        j = j + 1;

      }


      //variable for first instance of a vowel
      let vowelLoc = j - 1;

      //variable for the letters before the vowel
      let beg = wordCycle.slice(0, vowelLoc);


      //if word starts with a vowel add "yay"
      if (vowelArr.includes(wordCycle.charAt(0))){

      //removes letters before vowel and concatenates them to the end with "yay"
      wordCycle = wordCycle.slice(vowelLoc) + beg + 'yay';

      }

      //if not add "ay"
      else{

      //removes letters before vowel and concatenates them to the end with "ay"
      wordCycle = wordCycle.slice(vowelLoc) + beg + 'ay';

      }


      //concatenates each translated word
      translated = translated + wordCycle + " ";
    
    }

    //returns final sentence
    return translated;
    
  }

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
    it('should separate two words and return them together', ()=> {
      assert.equal(pigLatin('Egg Rocket'), 'eggyay ocketray ');
    })
  });
} else {

  getPrompt();

}
