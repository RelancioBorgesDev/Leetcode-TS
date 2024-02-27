function trap(height: number[]): number {
  let l = 0;
  let r = height.length - 1;

  let maxL = height[l];
  let maxR = height[r];
  let res = 0;

  while (l < r) {
    if (maxL < maxR) {
      l++;
      maxL = Math.max(maxL, height[l]);
      res += maxL - height[l];
    } else {
      r--;
      maxR = Math.max(maxR, height[r]);
      res += maxR - height[r];
    }
  }
  return res;
}

trap([0,1,0,2,1,0,1,3,2,1,2,1]);
