// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

const array1 = [0, 1, 0, 3, 12];
// const array1 = [1, 3, 12, 3, 12];
// i                        ^
// j                               ^



const func = (array) => {
  let i = 0;

  while (array[i] !== 0 && i < array.length) {
    i++;
  }
  let j = i + 1;

  while (j < array.length) {
    if (array[j] === 0) {
      j++;
    } else {
      array[i] = array[j];
      i++;
      j++;
    }
  }
  while (i < array.length) {
    array[i] = 0;
    i++;
  }

  return array;
};

console.log(func(array3));
