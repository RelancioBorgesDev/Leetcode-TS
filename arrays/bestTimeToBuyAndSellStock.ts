function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
}

console.log(maxProfit([1, 2, 3, 4, 5]));


