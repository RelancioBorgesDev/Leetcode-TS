function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = nums1.length, j = 0; m < i; m++, j++) {
    nums1[m] = nums2[j];
  }

  nums1.sort((a, b) => a - b);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
