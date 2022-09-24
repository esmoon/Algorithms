// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

const array1 = [1, 2, 3];
const array2 = [4, 3, 2, 1];
const array3 = [9, 9];
const array4 = [9];

const func = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] >= 9) {
      array[i] = 0;
    } else {
      array[i]++;
      return array;
    }
  }
  array.unshift(1);
  return array;
};

console.log(func(array2));
