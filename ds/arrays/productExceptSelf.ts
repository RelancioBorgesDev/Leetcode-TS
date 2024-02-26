function productExceptSelf(nums: number[]): number[] {
  let product = 1;
  for (let num of nums) {
    if(num != 0){
        product *= num;
    }
  }
  console.log(product);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[i] = product / nums[i];
    }
  }

  return nums;
}
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
