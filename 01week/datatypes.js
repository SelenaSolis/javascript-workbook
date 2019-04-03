'use strict';

// subtract one number from another
var firstNum = 9;
var secondNum = 3;
console.log(firstNum - secondNum);

//Display the current day and time in javascript
var date = new Date();
document.getElementById('dateTime').innerHTML = date.toLocaleString('en-us')


//Convert a number, 7 to a string, "7" in javascript
var num = 7;
var str = String(num);
document.getElementById('numToStr').innerHTML = typeof str;

//Convert a string, "7" to the number, 7 in javascript
var str = '7';
var num = Number(str);
document.getElementById('strToNum').innerHTML = typeof num;

//Add 2 numbers together in javascript
var num1 = 10;
var num2 = 5;
document.getElementById('sumTwoNum').innerHTML = num1 + num2;

//Prints out "Both are TRUE" only when 2 things are true
var a = true;
var b = true;
var c = false;
var d = false;
if(a  && b ){
  document.getElementById('bothTrue').innerHTML = "Both are TRUE";
}

//Prints out "One of these is TRUE" when 1 of 2 things are true.
if (a || c){
  document.getElementById('oneTrue').innerHTML = "One of these is TRUE";
}

//Prints out "Neither is TRUE" when both things are not true.
if (!c && !d){
  document.getElementById('noneTrue').innerHTML = "Neither is TRUE";
}


//Create one variable for each of the data types below:
//Boolean i.e. var myBool = false;
//Null
//Undefined
//Number
//NaN
//String
var myBool = true;
document.getElementById('myBool').innerHTML = typeof myBool;
var myNull = null;
document.getElementById('myNull').innerHTML = typeof myNull;
var myUnd;
document.getElementById('myUnd').innerHTML = typeof myUnd;
var myNum = 10;
document.getElementById('myNum').innerHTML = typeof myNum;
var myNan = 0/0;
document.getElementById('myNan').innerHTML = typeof myNan;
var myStr = "poop";
document.getElementById('myStr').innerHTML = typeof myStr;