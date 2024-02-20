var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1;
    let right = n;

    while (left < right) {
      let midpoint = Math.floor(left + (right - left) / 2);
      if (isBadVersion(midpoint)) {
        right = midpoint;
      } else {
        left = midpoint + 1;
      }
    }
    return left;
  };
};
