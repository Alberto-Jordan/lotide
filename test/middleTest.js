// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;



describe('#middle', () => {
  it('returns [] for [1]', () => {
    assertArraysEqual(middle([1]), []);
  });

  it('returns [] for [1, 2]', () => {
    assertArraysEqual(middle([1, 2]), []);
  });

  it('returns [2] for [1, 2, 3]', () => {
    assertArraysEqual(middle([1, 2, 3]), [2]);
  });

  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
