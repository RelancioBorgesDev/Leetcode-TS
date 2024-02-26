function reverse(x: number): number {
  const isNegative = x < 0;
  const xString = Math.abs(x).toString().split("").reverse().join("");
  const result = parseInt(xString);

  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  }

  return isNegative ? -result : result;
}

console.log(reverse(1534236469));
//80ms


