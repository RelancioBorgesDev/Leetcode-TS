function isPalindrome(s: string): boolean {
  const cS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(cS);
  let p1 = 0;
  let p2 = cS.length - 1;

  while (p1 < p2) {
    if (cS[p1] !== cS[p2]) {
      return false;
    }
    p1++;
    p2--;
  }
  return true;
}
//69 ms

console.log(isPalindrome("race a car"));
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("0P"));
