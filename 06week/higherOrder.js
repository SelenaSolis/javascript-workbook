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

function reduce(arr, callback, accumulator) {
  accumulator = accumulator || 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      accumulator = accumulator + arr[i];
    } 
    else if (typeof arr == 'object') {
      for (let index in arr[i]) {
      accumulator = accumulator + arr[i][index];
      }
    }
    callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

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
      const reduced = reduce([1, 2, 3], (acc, num) => {
        return acc + num;
      });
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
