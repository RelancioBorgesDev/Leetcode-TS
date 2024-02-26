function singleNumber(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  const seen = new Map<number, number>();

  for (const num of nums) {
    if (seen.has(num)) {
      seen.set(num, seen.get(num)! + 1);
    } else {
      seen.set(num, 1);
    }
  }

  for (const [num, count] of seen.entries()) {
    if (count === 1) {
      return num;
    }
  }

  return -1;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
