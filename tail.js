const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const tail = function(array) {
  return array.slice(1);
};



const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3); 

assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());
assertEqual(tail([1]).toString(), [].toString());
assertEqual(tail([]), undefined);