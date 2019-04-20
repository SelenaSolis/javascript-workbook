'use strict'


let cars = ['ford', 'batmobile', 'hyundai', 'lexus'];
let moreCars = ['delorean', 'BMW', 'tesla', 'honda']


//console logs the length of cars array
console.log("length of cars array: " + cars.length);

//joins cars and moreCars arrays into totalCars array
let totalCars = cars.concat(moreCars);
console.log("join of cars and moreCars arrays: " + totalCars);


//locates 'honda' and returns index
console.log("Index of Honda: " + totalCars.indexOf('honda'));

//locates last instance of 'ford' in carsInReverse array
console.log("last instance of 'ford': " + totalCars.lastIndexOf('ford'));

//converts array into a string
let stringOfCars = totalCars.join();
console.log("stringOfCars: " + stringOfCars);

//splits up total cars string back into array
let totalCars2 = stringOfCars.split(',');
console.log("string turned back into array: " + totalCars2)

//reversed totalCars array
let carsInReverse = totalCars.reverse();
console.log("reverse of total cars: " + carsInReverse);


//converts each element to lowercase and sorts
carsInReverse = carsInReverse.map(function(x) {
    return x.toLowerCase();
});
console.log("cars array lowercase: " + carsInReverse);


//sorts carsInReverse alphabetically
carsInReverse = carsInReverse.sort();
console.log("sorted carsInReverse array: " + carsInReverse);


//put 'ford' and 'honda' in new array
let removedCars = carsInReverse.slice(3,5);
console.log("removedCars: " + removedCars)

//removed 2nd and 3rd elements in carsInReverse array and added 'ford' and 'honda'
carsInReverse.push(...carsInReverse.splice(1, 2, 'Ford', 'honda'));
console.log("replaced 2nd and 3rd items and replaced with 'ford' and 'honda': " + carsInReverse);

//console logs and removes the last element in array
console.log("last element: " + carsInReverse.pop());
console.log("last element removed: " + carsInReverse);

//console logs and removes the first element in array
console.log("first element: " + carsInReverse.shift());
console.log("first element removed: " + carsInReverse);

//adds 'mercedes' to the beginning of array
carsInReverse.unshift('mercedes');
console.log("mercedes added to beginning: " + carsInReverse);

//new numbers array
let numbers = [23, 45, 0, 2];
console.log("Numbers array: " + numbers);

//adds two to each element in numbers and adds them to the end of the numbers array
numbers.forEach(function(x) {
  numbers.push(x+2);
});
console.log("two added to each number and added to the end of array: " + numbers);