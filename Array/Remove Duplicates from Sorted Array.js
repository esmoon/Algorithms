// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Надо вернуть кол-во уникальных элементов

const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5];
//  minIndex      ^
//   current      ^
//   prev      ^

//  minIndex = 1

const func = (array) => {
  let minIndex = 1;

  for (let i = 1; i < array.length; i++) {
    let prev = array[i - 1];
    let current = array[i];
    if (current !== prev) {
      array[minIndex] = current;
      minIndex++;
    }
  }
  return minIndex;
};

console.log(func(array));
