const middle = function(arr) {
  let middleElements = [];
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return middleElements;
  } else if (arr.length % 2 === 0) {
    middleElements.push(arr[middleIndex - 1], arr[middleIndex]);
  } else {
    middleElements.push(arr[middleIndex]);
  }

  return middleElements;
};

module.exports = middle;
