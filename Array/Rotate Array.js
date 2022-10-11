// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

const array1 = [-1, -100, 3, 99];
//              ^
//                        ^

const array2 = [1, 2, 3, 4, 5, 6, 7];

//  Мы вращаем массив сначала полностью
//  Потом вращаем переднюю часть массива
//  И в конце начинаем вращать задней частью массива
//              7 6 5 4 3 2 1
//              5 6 7 4 3 2 1
//              5 6 7 1 2 3 4

const func = (array, target) => {
  // здесь обрабатываем условие, если target > длинны массива, то делим его на длину
  if (target > array.length) target %= array.length;

  const reverse = (start, end) => {
    while (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end--;
    }
  };

  reverse(0, array.length - 1);
  reverse(0, target - 1);
  reverse(target, array.length - 1);

  return array;
};

console.log(func(array2, 3));
