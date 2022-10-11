// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -231 <= x <= 231 - 1

const str1 = 123;
const str2 = -123;
const str3 = 120;

const func = (str) => {
  // Обрезаем минус у строки, получаем число и переводим его в массив => делаем reverse и переводим обратно в строку
  let reversed = Math.abs(str).toString().split('').reverse().join('');

  // Делаем проверку constrains
  if (reversed > 2 ** 31 - 1) return 0;

  // Если число отрицательное, то получаем -1, если положительное, то 1 и умножаем это на строку => из-за умножения оно переводится в число
  return Math.sign(str) * reversed;
};

console.log(func(str2));
