// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

var maxProfit = function (prices) {
  let min = prices[0];
  let max;
  let peak = false;
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    let current = prices[i];
    if (peak) {
      if (current < max) {
        peak = false;
        profit += max - min;
        min = current;
      } else {
        max = current;
      }
    } else {
      if (current < min) {
        min = current;
      } else {
        peak = true;
        max = current;
      }
    }
  }
  if (peak) profit += max - min;
  return profit;

  // Еще один вариант решения

  // let profit = 0;
  //   for (let i = 0; i < prices.length; i++) {
  //     if (prices[i] > prices[i - 1]) {
  //       profit += prices[i] - prices[i - 1];
  //     }
  //   }
  //   return profit;
};
