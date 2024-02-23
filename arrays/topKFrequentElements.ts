function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map<number, number>();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let sortedEntries = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(sortedEntries[i][0]);
  }

  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
