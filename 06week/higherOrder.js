'use strict';

const assert = require('assert');

function map(array, callback){
  let newArr = [];
  for(let i=0; i<array.length; i++){
    let elements = callback(array[i]);
    newArr.push(elements);
  }
  return newArr; 
}

const checkObject = [{price: 10},{price: 20},{price: 30}];
const checkArray = [10, 20, 30];
function reduce(array, accumulator) {
    accumulator = accumulator || 0;
    for (let index = 0; index < array.length; index++) {
        if(typeof array[index] == 'number') {
            accumulator = accumulator + array[index];
        } else if(typeof array[index] == 'object') {
            for(let i in array[index]){
                accumulator = accumulator + array[index][i];
            }
        }   
    }
    return accumulator;
}
const sum = reduce(checkArray, 10); // Set accumulator to 10
console.log("ANSWER: ",sum);

function filter(array, callback, thisObject) {
  var filteredArray = [];
  var filterCallback = callback;
  if (thisObject) {
    filterCallback = callback.bind(thisObject);
  }
  for (var i = 0; i < array.length; i++) {
    if (filterCallback(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}


if (typeof describe === 'function') {
  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#reduce()', () => {
    it('should return array elements added together', () => {
      const reduced = reduce([1, 2, 3], 0);
      assert.deepEqual(reduced, 6);
    });
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });
} else {
  console.log('Only run the tests on this one!')
}