const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }

  return results;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterCounts = countLetters("LHL");
assertEqual(letterCounts["L"], 2);
assertEqual(letterCounts["H"], 1);

const letterCounts2 = countLetters("Lighthouse Labs");
assertEqual(letterCounts2["L"], 2);
assertEqual(letterCounts2["i"], 1);
assertEqual(letterCounts2["g"], 2);
assertEqual(letterCounts2["h"], 2);
assertEqual(letterCounts2["t"], 1);
assertEqual(letterCounts2["o"], 1);
assertEqual(letterCounts2["u"], 1);
assertEqual(letterCounts2["s"], 1);
assertEqual(letterCounts2["e"], 1);
assertEqual(letterCounts2["a"], 1);
assertEqual(letterCounts2["b"], 1);
assertEqual(letterCounts2["c"], 1);
assertEqual(letterCounts2["p"], 1);
