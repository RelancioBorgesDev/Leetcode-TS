function twoSum(nums: number[], target: number): number[] {
  //Input: nums = [2,7,11,15], target = 9
  let p1 = 0;
  let p2 = 1;
  let targetArr: number[] = [];

  while (p1 < nums.length) {
    let sum = nums[p1] + nums[p2];

    if (sum === target) {
      return [p1, p2];
    }
    p2++;

    if (p2 == nums.length) {
      p1++;
      p2 = p1 + 1;
    }
  }

  return targetArr;
}
console.log(twoSum([3, 2, 3], 6));
