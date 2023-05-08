const assertEqual = require('./assertEqual');


// const assertEqual = function(actual, expected) {
 // if (actual === expected) {
  //  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
 // } else {
 //   console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  // }
// };

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
};

//assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([1]), 1);
// assertEqual(head([]), undefined);