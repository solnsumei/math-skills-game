import { possibleCombinationSum } from '../../utils/helpers';

describe('Helper Functions', () => {
  it('should return false when array length is 0', () => {
    const numberArray = [9];
    expect(possibleCombinationSum(numberArray, 4)).toBe(false);
  });

  it('should return true when index of number is in array', () => {
    const numberArray = [1, 2, 3, 4];
    expect(possibleCombinationSum(numberArray, 4)).toBe(true);
  });

  it('should return false when no possible combination is found', () => {
    const numberArray = [3, 5, 6, 7, 8, 9];
    expect(possibleCombinationSum(numberArray, 4)).toBe(false);
  });

  it('should return true when combination sum is equal to number', () => {
    const numberArray = [1, 2, 3];
    expect(possibleCombinationSum(numberArray, 4)).toBe(true);
  });
});