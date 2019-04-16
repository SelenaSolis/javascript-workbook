'use strict'


let cars = ['ford', 'batmobile', 'hyundai', 'lexus'];
let moreCars = ['delorean', 'BMW', 'tesla', 'honda']


//console logs the length of cars array
console.log(cars.length);

//joins cars and moreCars arrays into totalCars array
let totalCars = cars.concat(moreCars);

//reversed totalCars array
let carsInReverse = totalCars.reverse();

//locates 'honda' and returns index
console.log(carsInReverse.indexOf('honda'));

//locates last instance of 'ford' in carsInReverse array
console.log(carsInReverse.lastIndexOf('ford'));

//converts array into a string
let stringOfCars = totalCars.join();

//splits up total cars string back into array
let totalCars2 = stringOfCars.split(',');




//converts each element to lowercase
carsInReverse = carsInReverse.map(function(x) {
    return x.toLowerCase();
}).sort();


//sorts carsInReverse alphabetically
carsInReverse = carsInReverse.sort();


//put 'ford' and 'honda' in new array
let removedCars = carsInReverse.slice(3,5);

//removed 2nd and 3rd elements in carsInReverse array and added 'ford' and 'honda'
carsInReverse.push(...carsInReverse.splice(1, 2, 'Ford', 'honda'));

//console logs and removes the last element in array
console.log(carsInReverse.pop());


//console logs and removes the first element in array
console.log(carsInReverse.shift());

//adds 'mercedes' to the beginning of array
carsInReverse.unshift('mercedes');

//new numbers array
let numbers = [23, 45, 0, 2];

//adds two to each element in numbers and adds them to the end of the numbers array
numbers.forEach(function(x) {
  numbers.push(x+2);
});