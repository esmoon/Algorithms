// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const array = [1, 2, 2, 1];
const array2 = [2, 2];

const func = (array1, array2) => {
  const obj = {};
  const result = [];

  // hash map

  for (let i = 0; i < array.length; i++) {
    let element = array1[i];

    // проверка на то, есть ли этот элемент в объекте
    if (obj[element]) {
      // Если есть, то мы увеличиваем value ключа с этим элементом
      obj[element]++;
    } else {
      // Если нет, то присваиваем один
      obj[element] = 1;
    }
  }

  for (i of array2) {
    // Если элемент больше нуля, то мы пушим этот элемент в результирующий массив
    if (obj[i] > 0) {
      result.push(i);
      // И уменьшаем value ключа с этим элементом
      obj[i]--;
    }
  }
  return result;
};

console.log(func(array, array2));
