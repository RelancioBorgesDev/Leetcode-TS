function moveZeroes(nums: number[]): void {
    let p1 = 0;
    let p2 = 0;
  
    while (p2 < nums.length) {
      if (nums[p2] !== 0) {
        [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
        p1++;
      }
      p2++;
    }
    console.log(nums);
  }
  
  console.log(moveZeroes([0, 1, 0, 3, 12]));
  