// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

const array1 = ['H', 'a', 'n', 'n', 'a', 'h'];
const array2 = ['h', 'e', 'l', 'l', 'o'];

const func = (array) => {
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = i + 1; j < array.length; j++) {
  //     [array[j], array[i]] = [array[i], array[j]];
  //   }
  // }
  // return array;

  const reverse = (start, end) => {
    while (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end--;
    }
  };

  reverse(0, array.length - 1);

  return array;
};

console.log(func(array1));
