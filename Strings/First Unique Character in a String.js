// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// 1 <= s.length <= 105
// s consists of only lowercase English letters.

const str1 = 'leetcode';
const str2 = 'loveleetcode';
const str3 = 'aabb';

const func = (str) => {
  // const map = new Map();

  // for (let i = 0; i < str.length; i++) {
  //   let elem = str[i];
  //   if (map.has(elem)) {
  //     map.get(elem) + 1;
  //   }
  //   map.set(elem, map.get(elem) + 1 || 0);
  // }

  // for (let i = 0; i < str.length; i++) {
  //   let elem = str[i];
  //   if (map.get(elem) === 0) {
  //     return i;
  //   }
  // }
  // return -1;

  const map = {};
  for (let i = 0; i < str.length; i++) {
    let elem = str[i];
    // мы входим в определенный ключ, если он есть, то мы присваиваем в ключ тоже самое значение, что бы у нас в объекте ключи не повторялись, либо 0, если этот элемент встречается впервые
    map[elem] = map[elem] || 0;
    // тут делаем increment значения
    map[elem]++;
  }

  // и тут собственно проверка
  for (let i = 0; i < str.length; i++) {
    let elem = str[i];
    if (map[elem] === 1) {
      return i;
    }
  }
  return -1;
};

console.log(func(str1));
