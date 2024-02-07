function plusOne(digits: number[]): number[] {
  let s: string = "";

  digits.forEach((digit) => {
    s += digit;
  });

  let num = BigInt(s) + 1n;

  const numS = num.toString();

  let newArr: number[] = [];

  for (let i = 0; i < numS.length; i++) {
    newArr.push(parseInt(numS.charAt(i)));
  }

  return newArr;
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
