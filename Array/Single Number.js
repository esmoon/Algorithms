// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Вернуть число, которое не повторяется

// Буду использовать XOR
// То есть, [4,1,2,1,2]

// XOR сравнивает двоичный код числа
// 4 = 100
// 1 = 001
// Если не совпадает символ с символом, то возвращается 1, если совпадает, то 0

// let result = 0

// 100
// 001
// Результат - 101 - записываем в переменную result
// 1 сравнивается с 0 - не совпадет, значит вернется 1
// 0 сравнивается с 0 - совпадет, значит вернется 0
// 1 сравнивается с 0 - не совпадет, значит вернется 1

const nums = [4, 1, 2, 1, 2];
const func = (array) => {
  let result = 0;
  array.forEach((x) => {
    return (result ^= x);
  });
  return result;
};

console.log(func(nums));
