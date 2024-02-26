function twoSum(numbers: number[], target: number): number[] {
  let p1 = 0;
  let p2 = 1;
  let size = numbers.length;
  while (p1 < size && p2 < size) {
    let sum = numbers[p1] + numbers[p2];

    if (sum == target) {
      return [p1 + 1, p2 + 1];
    } else {
      p2++;
    }

    if (p2 == size) {
      p1++;
      p2 = p1 + 1;
    }
  }

  return [];
}
//1000 ms solution
