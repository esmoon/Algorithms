// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Если есть дубликат - true

const array1 = [1, 1, 3, 4, 5, 6, 2, 4, 6];
const array2 = [1, 2, 3, 4];
const array3 = [1, 2, 3, 1];
const array4 = [0, 4, 5, 0, 3, 6];

const func = (array) => {
  const result = new Set();
  let flag = false;
  for (let i = 0; i < array.length; i++) {
    if (result.has(array[i])) {
      flag = true;
    } else {
      result.add(array[i]);
    }
  }
  return flag;

  // Альтернативное решение

  // const set = new Set();
  // return nums.some((item) =>{
  //     if(set.has(item)){
  //         return true
  //     } else{
  //         set.add(item)
  //         return false
  //     }
  // })

  // Еще одно решение

  // Тут я кладу массив в коллекцию Set и сравниваю длину, тк Set - это коллекция из уникальных элементов

  //  const set = new Set(array);
  //  return set.size < array.length ? true : false;
};

console.log(func(array3));
