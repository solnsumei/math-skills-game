/**
 * @description
 * Function to check if there are still possible ways of
 * computing a number.
 * @param {Array} arr
 * @param {int} n
 * @returns {boolean} true or false
 */
const possibleCombinationSum = (arr, n) => {
  if (arr.indexOf(n) >= 0) {
    return true;
  }
  if (arr[0] > n) {
    return false;
  }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  /* eslint-disable no-bitwise */
  const listSize = arr.length,
    combinationsCount = (1 << listSize);
  for (let i = 1; i < combinationsCount; i += 1) {
    let combinationSum = 0;
    for (let j = 0; j < listSize; j += 1) {
      if (i & (1 << j)) {
        combinationSum += arr[j];
      }
    }
    if (n === combinationSum) {
      return true;
    }
  }
  return false;
};

export default possibleCombinationSum;
