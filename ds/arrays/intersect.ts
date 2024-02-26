function intersect(nums1: number[], nums2: number[]): number[] {
  let pn1 = 0;
  let pn2 = 0;
  let intersectedArray: number[] = [];

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  while (pn1 < nums1.length && pn2 < nums2.length) {
    if (nums1[pn1] === nums2[pn2]) {
      intersectedArray.push(nums1[pn1]);
      pn1++;
      pn2++;
    } else if (nums1[pn1] < nums2[pn2]) {
      pn1++;
    } else {
      pn2++;
    }
  }

  return intersectedArray;
}

console.log(intersect([2, 1], [1, 2]));
