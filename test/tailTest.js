
const assert = require('chai').assert;
const tail = require('../tail');

// const assertEqual = require('../assertEqual');

// module.exports = assertEqual;

describe('tail', function() {
  it('should return an empty array when passed an empty array', function() {
    const input = [];
    const expectedOutput = [];
    assert.deepEqual(tail(input), expectedOutput);
  });

  it('should return an empty array when passed an array with one element', function() {
    const input = [1];
    const expectedOutput = [];
    assert.deepEqual(tail(input), expectedOutput);
  });

  it('should return the last n elements of an array when passed an array of length n + 1', function() {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [2, 3, 4, 5];
    assert.deepEqual(tail(input), expectedOutput);
  });
});