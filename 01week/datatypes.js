'use strict';

// subtract one number from another
var firstNumber = 9;
var secondNumber = 3;
console.log(firstNumber - secondNumber);

//Display the current day and time in javascript
var date = new Date();
console.log(date.toLocaleString('en-us'));


//Convert a number, 7 to a string, "7" in javascript
var num = 7;
var str = String(num);
console.log(str);

//Convert a string, "7" to the number, 7 in javascript
var str = '7';
var num = Number(str);
console.log(num);

//Add 2 numbers together in javascript
var num1 = 10;
var num2 = 5;
console.log(num1+num2);

//Prints out "Both are TRUE" only when 2 things are true
var x = true;
var y = true;
var z = false;
if(x  && y ){
  console.log("Both are TRUE");
}

//Prints out "One of these is TRUE" when 1 of 2 things are true.
if (x || z){
  console.log("One of these is TRUE");
}

//Prints out "Neither is TRUE" when both things are not true.
var a = false;
var b = false;
if (!a && !b){
  console.log("Neither is TRUE");
}


//Create one variable for each of the data types below:
//Boolean i.e. var myBool = false;
//Null
//Undefined
//Number
//NaN
//String
var myBool = true;
var myNull = null;
var myUnd;
var myNum = 10;
var myNan = 10/0;
var myStr = "";
console.log(typeof(myNull));